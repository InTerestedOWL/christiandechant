import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { pagePath } from "../i18n/routes";
import TechStack from "./shared/techStack";
import { Eyebrow } from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";
import { accentHoverBorder, accentIconBox } from "./shared/accent";

export default function Competencies({ locale, content }: { locale: Locale, content: SiteContent['competencies'] }) {
  return (
    <section aria-labelledby="about-title" className="border-b border-slate-200/80 bg-slate-50 py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow icon={ content.icon } text={ content.eyebrow } className="mb-2"/>
            <h2 id="about-title" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{ content.title }</h2>
            <p className="mt-2 max-w-2xl text-base text-slate-600">{ content.text }</p>
          </div>
          <div
            className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-500">
            { content.badge }
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          { content.items.map((item) => (
            <div key={ item.title }
                 className={ `group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${ accentHoverBorder[item.accent] }` }>
              <div>
                <div
                  className={ `mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${ accentIconBox[item.accent] }` }>
                  <Icon name={ item.icon } className="text-2xl"/>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{ item.title }</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{ item.text }</p>
              </div>
              <div
                className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 font-mono text-[11px] text-slate-600">
                { item.tags.map((tag) => (
                  <span key={ tag } className="rounded bg-slate-100 px-2 py-0.5">{ tag }</span>
                )) }
              </div>
            </div>
          )) }
        </div>

        <div id="stack" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Eyebrow icon="stacks" text={ content.stackTitle } className="mb-6"/>
          <TechStack groups={ content.stackGroups }/>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href={ pagePath(locale, 'about') }
                className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-all hover:bg-brand-50">
            <span>{ content.detailsCta }</span>
            <Icon name="arrow_forward" className="text-[18px]"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
