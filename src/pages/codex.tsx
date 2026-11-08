import { CaseStudy, CaseStudySection } from '@/components/CaseStudy';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Codex = () => (
  <Main
    meta={
      <Meta
        title="OpenAI Codex | Daniel Steigman"
        description="Daniel Steigman’s product work on enterprise Codex adoption, shared Linux NFS support, and onboarding."
      />
    }
  >
    <CaseStudy
      company="OpenAI / Codex"
      title="Product work on Codex"
      role="Product Manager, Codex"
      dates="2026–present"
      summary="I work with enterprise teams adopting Codex. I bring deployment problems into product and engineering, and help teams get started with coding agents."
      sections={[
        { id: 'nfs', label: 'Shared Linux home directories' },
        { id: 'onboarding', label: 'Adoption & onboarding' },
      ]}
      next={{ href: '/cline', label: 'Cline' }}
    >
      <CaseStudySection
        id="nfs"
        label="01 / Product"
        title="Support for shared Linux NFS home directories"
      >
        <p>
          Some enterprise teams use a network file system for their Linux home
          directories. Codex needed to support that setup before those teams
          could use it reliably.
        </p>
        <dl className="case-study-details">
          <div>
            <dt>My contribution</dt>
            <dd>
              I connected the requirement across customers, defined the product
              work, and secured engineering buy-in. I partnered with the
              engineers who implemented and shipped the support.
            </dd>
          </div>
          <div>
            <dt>What shipped</dt>
            <dd>
              Support for shared Linux NFS home directories is now documented
              in Codex. The release made this deployment option available to
              other teams with the same requirement.
            </dd>
          </div>
        </dl>
        <div className="case-study-links">
          <a href="https://learn.chatgpt.com/docs/environments/network-file-systems">
            NFS documentation <span aria-hidden="true">↗</span>
          </a>
          <a href="https://github.com/openai/codex/releases/tag/rust-v0.166.0">
            Release notes <span aria-hidden="true">↗</span>
          </a>
        </div>
      </CaseStudySection>
      <CaseStudySection
        id="onboarding"
        label="02 / Adoption"
        title="Helping teams get started with Codex"
      >
        <p>
          My work includes helping teams adopt Codex at NVIDIA. I work with the
          people doing the rollout, help them find practical ways to use agents,
          and bring their feedback to product and engineering.
        </p>
        <p>
          Onboarding and enablement are part of that work: helping people move
          from access to using Codex in their day-to-day work. NVIDIA has
          published its own account of the adoption.
        </p>
        <div className="case-study-links">
          <a href="https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/">
            NVIDIA’s public story <span aria-hidden="true">↗</span>
          </a>
        </div>
      </CaseStudySection>
    </CaseStudy>
  </Main>
);

export default Codex;
