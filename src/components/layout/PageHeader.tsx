import type { ReactNode } from 'react';

type Props = {
  label: string;
  title: ReactNode;
  lede?: string;
  id?: string;
};

/**
 * Consistent page banner used by every sub-route.
 * The h1 gets its own wider measure than the lede so headlines do not wrap
 * into awkward four-line stacks.
 */
export default function PageHeader({ label, title, lede, id }: Props) {
  return (
    <section className="page-header" id={id}>
      <div className="container">
        <div className="page-header-inner reveal">
          <span className="label">{label}</span>
          <h1>{title}</h1>
          {lede ? <p>{lede}</p> : null}
        </div>
      </div>
    </section>
  );
}
