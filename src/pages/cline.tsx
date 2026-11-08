import Image from 'next/image';

import { CaseStudy, CaseStudySection } from '@/components/CaseStudy';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Cline = () => (
  <Main
    meta={
      <Meta
        title="Cline | Daniel Steigman"
        description="Daniel Steigman’s work as Head of Operations at Cline: team building, product roadmap, accounts, and the MCP marketplace."
      />
    }
  >
    <CaseStudy
      company="Cline"
      title="Product and operations at Cline"
      role="Head of Operations"
      dates="January 2025–January 2026"
      summary="I joined Cline as an early hire and became Head of Operations. I helped build a 48-person team and led product roadmap, strategy, and partnerships alongside the team."
      sections={[
        { id: 'team', label: 'Team & product' },
        { id: 'marketplace', label: 'MCP marketplace' },
        { id: 'growth', label: 'Community & growth' },
      ]}
      next={{ href: '/stable', label: 'Stable Finance' }}
    >
      <CaseStudySection
        id="team"
        label="01 / Team & product"
        title="Building the team and the product"
      >
        <p>
          Cline is an open-source coding agent. During my time there, I worked
          across hiring, product, engineering, and operations as we built a
          48-person team.
        </p>
        <dl className="case-study-details">
          <div>
            <dt>Roadmap & strategy</dt>
            <dd>
              Led product priorities and partnerships with the team. Built
              product analytics and feedback loops to inform those decisions.
            </dd>
          </div>
          <div>
            <dt>Accounts & administration</dt>
            <dd>
              Helped launch Cline Accounts and enterprise administration
              capabilities, working with the teams building the product.
            </dd>
          </div>
        </dl>
      </CaseStudySection>
      <CaseStudySection
        id="marketplace"
        label="02 / Developer tools"
        title="Discovering and installing MCP tools inside Cline"
      >
        <p>
          I helped launch what was then the largest in-app MCP marketplace. It
          gave developers a way to find and install tools inside Cline,
          reducing the need to configure each integration by hand.
        </p>
        <p>
          The marketplace connected Cline to tools beyond the editor. The
          launch was a team effort across product and engineering.
        </p>
        <div className="case-study-links">
          <a href="https://github.com/cline/cline">
            Cline on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </CaseStudySection>
      <CaseStudySection
        id="growth"
        label="03 / Community"
        title="2.7 million installs by July 2025"
      >
        <p>
          Cline’s July 2025 funding announcement reported 2.7 million installs
          across VS Marketplace and Open VSX. That milestone reflects the work
          of the team and the open-source community around the product.
        </p>
        <p className="case-study-note">
          This is a historical install count, not a current active-user count.
        </p>
        <div className="case-study-links">
          <a href="https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust">
            July 2025 announcement <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a href="https://cline.bot" className="case-study-brand">
          <Image
            src="/cline-icon.png"
            alt=""
            width={32}
            height={32}
          />
          <span>Visit Cline</span>
          <span aria-hidden="true">↗</span>
        </a>
      </CaseStudySection>
    </CaseStudy>
  </Main>
);

export default Cline;
