import { Accent, IExperience, IHighlightBox, SiteContent } from "../interfaces";
import SectionHeading from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";
import { accentBadge, accentDot } from "./shared/accent";

// Current positions get a coloured pill, the Strauss position a neutral one, past positions plain text.
const periodStyle: Record<Accent, string> = {
  brand: `rounded border px-2.5 py-0.5 font-bold ${ accentBadge.brand }`,
  amber: `rounded border px-2.5 py-0.5 font-bold ${ accentBadge.amber }`,
  indigo: 'rounded bg-slate-100 px-2.5 py-0.5 font-bold text-slate-700',
  emerald: `rounded border px-2.5 py-0.5 font-bold ${ accentBadge.emerald }`,
  rose: `rounded border px-2.5 py-0.5 font-bold ${ accentBadge.rose }`,
  slate: 'font-medium text-slate-500',
};

function TimelineItem({ item }: { item: IExperience }) {
  const isFounder = item.accent === 'amber';

  return (
    <div className="relative">
      <div
        className={ `absolute top-1.5 -left-[31px] h-4 w-4 rounded-full ring-4 ring-white sm:-left-[39px] ${ accentDot[item.accent] }` }></div>
      <div className={ `rounded-2xl border bg-white p-6 ${ isFounder ? 'border-amber-200/90' : 'border-slate-200' }` }>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          { isFounder ? (
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">{ item.title }</h3>
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
            </div>
          ) : (
            <h3 className="text-lg font-bold text-slate-900">{ item.title }</h3>
          ) }
          <span className={ `font-mono text-xs ${ periodStyle[item.accent] }` }>{ item.period }</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{ item.text }</p>
      </div>
    </div>
  );
}

function HighlightBox({ box }: { box: IHighlightBox }) {
  const body = (
    <>
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600">
        <Icon name={ box.icon } className="text-3xl"/>
      </div>
      <div>
        <div className="mb-1 flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase text-brand-700">{ box.eyebrow }</span>
          <span className="text-xs text-slate-400">{ box.meta }</span>
        </div>
        <h4 className="text-lg font-bold text-slate-900">{ box.title }</h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-5">{ box.text }</p>
      </div>
    </>
  );
  const className = 'mt-10 flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-brand-200/90 bg-white p-6 sm:p-8 md:flex-row';

  return box.href ? (
    <a href={ box.href } target="_blank" rel="noreferrer"
       className={ `${ className } transition-shadow hover:shadow-md` }>
      { body }
    </a>
  ) : (
    <div className={ className }>{ body }</div>
  );
}

export default function Experience({ content }: { content: SiteContent['experience'] }) {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50 py-20" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content }/>

        <div className="relative flex max-w-4xl flex-col gap-8 border-l-2 border-brand-200 pl-6 sm:pl-8">
          { content.items.map((item) => <TimelineItem key={ item.title } item={ item }/>) }
        </div>

        { content.highlights.map((box) => <HighlightBox key={ box.title } box={ box }/>) }
      </div>
    </section>
  );
}
