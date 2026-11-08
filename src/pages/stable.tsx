import { CaseStudy, CaseStudySection } from '@/components/CaseStudy';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Stable = () => (
  <Main
    meta={
      <Meta
        title="Stable Finance | Daniel Steigman"
        description="Building a native iOS wallet and its backend as Stable Finance’s founding engineer."
      />
    }
  >
    <CaseStudy
      company="Stable Finance"
      title="A native iOS wallet and its backend"
      role="Founding Engineer"
      dates="May 2024–January 2025"
      summary="As Stable’s first engineer, I built the native iOS app and primary backend for a smart-contract wallet. The work spanned SwiftUI, wallet infrastructure, and financial integrations."
      sections={[
        { id: 'ios', label: 'iOS app' },
        { id: 'infrastructure', label: 'Wallet infrastructure' },
      ]}
      next={{ href: '/codex', label: 'OpenAI / Codex' }}
    >
      <CaseStudySection
        id="ios"
        label="01 / Application"
        title="Building the app in Swift and SwiftUI"
      >
        <p>
          I built the account flows, charts, and everyday wallet experience.
          Working on both the app and its backend let me connect the user-facing
          product with the services behind it.
        </p>
      </CaseStudySection>
      <CaseStudySection
        id="infrastructure"
        label="02 / Backend"
        title="Connecting the wallet to financial services"
      >
        <dl className="case-study-details">
          <div>
            <dt>Wallet infrastructure</dt>
            <dd>
              Built signing and transaction-indexing flows for smart-contract
              wallets and connected them to the app.
            </dd>
          </div>
          <div>
            <dt>Integrations</dt>
            <dd>
              Integrated Plaid and Bridge into the user-facing financial flows
              and primary backend.
            </dd>
          </div>
        </dl>
      </CaseStudySection>
    </CaseStudy>
  </Main>
);

export default Stable;
