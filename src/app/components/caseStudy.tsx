import { ICaseStudy } from "../interfaces";
import { Eyebrow } from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";

export default function CaseStudy({ content, href, newTabHint }: { content: ICaseStudy, href: string, newTabHint: string }) {
  return (
    <section aria-labelledby="case-title" className="border-b border-slate-200/80 bg-white py-20" id="case-study">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-3">
            <Eyebrow icon={ content.icon } text={ content.eyebrow }/>
            <h2 id="case-title" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              { content.title }
            </h2>
            <p className="font-mono text-xs font-semibold text-slate-600">{ content.client } · { content.period }</p>
            <p className="text-base leading-relaxed text-slate-700">{ content.text }</p>
            <ul className="flex flex-wrap gap-2">
              { content.deliverables.map((deliverable) => (
                <li key={ deliverable }
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                  { deliverable }
                </li>
              )) }
            </ul>
            <a href={ href } target="_blank" rel="noreferrer"
               className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline">
              { content.linkLabel }
              <Icon name="open_in_new" className="text-base"/>
              <span className="sr-only">{ newTabHint }</span>
            </a>
          </div>

          <figure className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <Icon name="format_quote" className="text-4xl text-brand-600"/>
            <blockquote className="text-base leading-relaxed text-slate-800">
              <p>{ content.quote.text }</p>
            </blockquote>
            <figcaption className="flex flex-col border-t border-slate-100 pt-4 text-sm">
              <span className="font-bold text-slate-900">{ content.quote.name }</span>
              <span className="text-slate-600">{ content.quote.role }</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
