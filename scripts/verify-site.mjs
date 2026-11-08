import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3100';
const routes = ['/', '/cline/', '/codex/', '/stable/', '/nugbase/', '/dual4t/'];
const phonePattern =
  /(?:\+?1[ .-]?)?\(?[2-9]\d{2}\)?[ .-][2-9]\d{2}[ .-]\d{4}\b/;
async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const filename = path.join(dir, entry.name);
      return entry.isDirectory() ? filesIn(filename) : filename;
    }),
  );
  return nested.flat();
}

test('public source has no phone contact links or phone-number patterns', async () => {
  const files = [
    ...(await filesIn(path.join(root, 'src'))),
    ...(await filesIn(path.join(root, 'public'))),
  ];
  for (const file of files.filter((name) =>
    /\.(tsx?|jsx?|mjs|html|json|xml|txt|svg|css)$/.test(name),
  )) {
    const text = await readFile(file, 'utf8');
    assert.ok(
      !phonePattern.test(text),
      `Possible phone exposure in ${path.relative(root, file)}`,
    );
    assert.ok(
      !/(?:href\s*=\s*["']\s*tel:|["']telephone["']\s*:)/i.test(text),
      `Phone contact field in ${path.relative(root, file)}`,
    );
  }
});

test('production pages, local links, fragments and assets resolve', async () => {
  const checked = new Set();
  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.ok(
      !/Lorem ipsum|example\.com|calendly\.com\/nighttrek/i.test(html),
      `Placeholder in ${route}`,
    );
    assert.ok(!phonePattern.test(html), `Possible phone exposure in ${route}`);
    assert.match(html, /rel="canonical" href="https:\/\/www\.ntrek\.dev\//);
    assert.match(
      html,
      /property="og:image" content="https:\/\/www\.ntrek\.dev\//,
    );
    const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) =>
      match[1].replaceAll('&amp;', '&'),
    );
    for (const link of links.filter(
      (value) => value.startsWith('/') && !value.startsWith('//'),
    )) {
      const url = new URL(link, origin);
      if (checked.has(url.href)) continue;
      checked.add(url.href);
      const target = await fetch(url);
      assert.equal(
        target.status,
        200,
        `Broken local reference: ${url.pathname}`,
      );
      if (url.hash) {
        const body = await target.text();
        assert.ok(
          body.includes(`id="${url.hash.slice(1)}"`),
          `Missing anchor: ${url.pathname}${url.hash}`,
        );
      }
      if (/\.js$/.test(url.pathname)) {
        const source = await target.text();
        assert.ok(
          !phonePattern.test(source),
          `Possible phone exposure in delivered script: ${url.pathname}`,
        );
        assert.ok(
          !/href:["']tel:/i.test(source),
          `Phone contact link in script: ${url.pathname}`,
        );
      }
    }
  }
});

test('retired starter blog pages do not publish filler', async () => {
  const blog = await fetch(`${origin}/blog/`, { redirect: 'manual' });
  assert.equal(blog.status, 308);
  assert.equal(blog.headers.get('location'), '/#work');
  const post = await fetch(`${origin}/blog/blog-0/`);
  assert.equal(post.status, 404);
});

test('robots and sitemap use canonical domain and omit retired routes', async () => {
  for (const route of ['/robots.txt', '/sitemap.xml', '/sitemap-0.xml']) {
    const response = await fetch(`${origin}${route}`);
    assert.equal(response.status, 200);
    const body = await response.text();
    assert.ok(body.includes('https://www.ntrek.dev'));
    assert.ok(!/example\.com|\/blog/.test(body));
  }
});
