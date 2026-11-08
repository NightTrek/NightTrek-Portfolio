import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  const pathname = router.asPath.split(/[?#]/)[0] || '/';
  const canonical =
    props.canonical ||
    `${AppConfig.siteUrl}${pathname.endsWith('/') ? pathname : `${pathname}/`}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} key="desc" />
        {canonical && <link rel="canonical" href={canonical} key="canonical" />}
        <meta property="og:title" content={props.title} key="og-title" />
        <meta
          property="og:description"
          content={props.description}
          key="og-desc"
        />
        {canonical && (
          <meta property="og:url" content={canonical} key="og-url" />
        )}
        <meta
          property="og:locale"
          content={AppConfig.ogLocale}
          key="og-locale"
        />
        <meta
          property="og:site_name"
          content={AppConfig.site_name}
          key="og-site"
        />
        <meta
          property="og:image"
          content={`${AppConfig.siteUrl}${router.basePath}/OG/HomePageOG.jpg`}
          key="og-image"
        />
        <meta property="og:image:width" content="1872" key="og-image-width" />
        <meta property="og:image:height" content="1203" key="og-image-height" />
        <meta
          property="og:image:alt"
          content="Home page image"
          key="og-image-alt"
        />
        <meta
          property="og:image:type"
          content="image/jpeg"
          key="og-image-type"
        />
      </Head>
    </>
  );
};

export { Meta };
