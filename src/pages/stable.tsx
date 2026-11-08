import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Stable = () => (
  <Main
    meta={
      <Meta
        title="Stable Finance | Daniel Steigman"
        description="Building a native iOS wallet experience and the infrastructure behind it as Stable Finance’s founding engineer."
      />
    }
  >
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-36 md:px-10 lg:pt-44">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-default-400">
        Stable Finance / Founding engineer / 2024–2025
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-[44px] font-bold leading-tight text-obsidian-50 md:text-[68px]">
        Making a complex financial product feel simple.
      </h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-obsidian-200">
        At Stable, I built the native iOS experience and primary backend for a
        smart-contract wallet. My work connected the app people touched with the
        infrastructure that made it work.
      </p>
    </section>
    <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-20 md:grid-cols-2 md:px-10">
      {[
        [
          'Native iOS',
          'Built the app in Swift and SwiftUI, including account flows, charts, and the everyday experience of using the wallet.',
        ],
        [
          'Wallet infrastructure',
          'Built signing and transaction-indexing flows, connecting smart-contract wallet infrastructure to the app.',
        ],
        [
          'Financial integrations',
          'Integrated Plaid and Bridge into the user-facing experience and backend.',
        ],
        [
          'End-to-end ownership',
          'Worked across product decisions, app development, and backend engineering to make the pieces work together.',
        ],
      ].map(([title, body]) => (
        <article key={title} className="glass-panel rounded-3xl p-6 md:p-8">
          <h2 className="mb-4 font-display text-2xl font-bold text-default-400">
            {title}
          </h2>
          <p className="text-lg leading-8 text-obsidian-200">{body}</p>
        </article>
      ))}
      <div className="pt-6 md:col-span-2">
        <ButtonBright title="Back to selected work" link="/#work" />
      </div>
    </section>
  </Main>
);

export default Stable;
