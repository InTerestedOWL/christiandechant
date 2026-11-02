import Link from "next/link";
import { IPageHero } from "../../interfaces";
import Breadcrumbs from "./breadcrumbs";
import { Eyebrow } from "./sectionHeading";
import Icon from "./materialIcon";
import RichText from "./richText";

/** Hero for sub pages: breadcrumbs, the page's only h1, intro, calls to action and key facts. */
export default function PageHero({ content, breadcrumb, primaryHref, secondaryHref }: {
  content: IPageHero,
  breadcrumb: { label: string, trail: { name: string, path: string }[] },
  primaryHref: string,
  secondaryHref?: string,
}) {
  return (
    <section aria-labelledby="page-title"
             className="relative overflow-hidden border-b border-slate-100 bg-linear-to-b from-brand-50/40 via-white to-white py-12 lg:py-20">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"
           aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs label={ breadcrumb.label } trail={ breadcrumb.trail }/>

        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow icon={ content.icon } text={ content.eyebrow }/>
          <h1 id="page-title"
              className="text-4xl leading-[1.12] font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-none">
            { content.title } <br className="hidden sm:inline"/>
            <span className="bg-linear-to-r from-brand-700 via-brand-600 to-indigo-500 bg-clip-text text-transparent">
              { content.titleHighlight }
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600"><RichText text={ content.intro }/></p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link href={ primaryHref }
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700">
              <span>{ content.primaryCta }</span>
              <Icon name="send" className="text-[18px]"/>
            </Link>
            { content.secondaryCta && secondaryHref && (
              <Link href={ secondaryHref }
                    className="inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-brand-300 hover:bg-brand-50">
                <span>{ content.secondaryCta }</span>
                <Icon name="arrow_downward" className="text-[18px] text-brand-600"/>
              </Link>
            ) }
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          { content.facts.map((fact) => (
            <li key={ fact.label }
                className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 p-3 text-sm font-medium text-slate-700">
              <Icon name={ fact.icon } className="text-xl text-brand-600"/>
              <span>{ fact.label }</span>
            </li>
          )) }
        </ul>
      </div>
    </section>
  );
}
