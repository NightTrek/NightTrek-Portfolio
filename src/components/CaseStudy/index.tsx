import Link from 'next/link';
import type { ReactNode } from 'react';

type CaseStudyProps = {
  company: string;
  title: string;
  role: string;
  dates: string;
  summary: string;
  sections: { id: string; label: string }[];
  children: ReactNode;
  next: { href: string; label: string };
};

const CaseStudy = (props: CaseStudyProps) => (
  <article className="case-study">
    <header>
      <Link className="case-study-back" href="/#experience">
        <span aria-hidden="true">←</span> Work experience
      </Link>
      <div className="case-study-intro">
        <div>
          <p className="case-study-eyebrow">{props.company}</p>
          <h1>{props.title}</h1>
          <p className="case-study-summary">{props.summary}</p>
        </div>
        <dl className="case-study-meta">
          <div>
            <dt>Role</dt>
            <dd>{props.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{props.dates}</dd>
          </div>
        </dl>
      </div>
      <nav aria-label={`${props.company} sections`} className="case-study-nav">
        {props.sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>
            {label} <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
    </header>
    {props.children}
    <nav aria-label="More work" className="case-study-next">
      <Link href="/#experience">All experience</Link>
      <Link href={props.next.href}>
        {props.next.label} <span aria-hidden="true">→</span>
      </Link>
    </nav>
  </article>
);

const CaseStudySection = (props: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) => (
  <section
    id={props.id}
    aria-labelledby={`${props.id}-title`}
    className="case-study-section"
  >
    <p className="case-study-eyebrow">{props.label}</p>
    <div className="case-study-copy">
      <h2 id={`${props.id}-title`}>{props.title}</h2>
      {props.children}
    </div>
  </section>
);

export { CaseStudy, CaseStudySection };
