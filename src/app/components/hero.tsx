import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import Icon from "./shared/materialIcon";
import RichText from "./shared/richText";
import { accentText } from "./shared/accent";
import { codeCardStack } from "../content/shared";

type HeroContent = SiteContent['hero'];

export default function Hero({ locale, content }: { locale: Locale, content: HeroContent }) {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-100 bg-linear-to-b from-brand-50/40 via-white to-white py-16 lg:py-24">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60"></div>
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"></div>
      <div
        className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{ content.status }</span>
            </div>

            <h1
              className="text-4xl leading-[1.12] font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-none lg:text-[54px]">
              { content.headline } <br className="hidden sm:inline"/>
              <span className="bg-linear-to-r from-brand-700 via-brand-600 to-indigo-500 bg-clip-text text-transparent">
                { content.headlineHighlight }
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600"><RichText text={ content.intro }/></p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link href={ `/${ locale }#contact` }
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] hover:bg-brand-700 hover:shadow-brand-500/25">
                <span>{ content.primaryCta }</span>
                <Icon name="send" className="text-[18px]"/>
              </Link>
              <Link href={ `/${ locale }#wayventure` }
                    className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-amber-300 hover:bg-amber-50">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>{ content.secondaryCta }</span>
                <Icon name="arrow_forward" className="text-[18px] text-amber-600"/>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
              { content.stats.map((stat) => (
                <div key={ stat.value } className="rounded-xl border border-slate-200/70 bg-white/80 p-3">
                  <span className={ `block font-mono text-xl font-bold ${ accentText[stat.accent ?? 'slate'] }` }>
                    { stat.value }
                  </span>
                  <span className="text-xs font-medium text-slate-500">{ stat.label }</span>
                </div>
              )) }
            </div>
          </div>

          <div className="lg:col-span-5">
            <CodeCard locale={ locale } content={ content }/>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeCard({ locale, content }: { locale: Locale, content: HeroContent }) {
  const str = 'text-emerald-600';
  const tech = 'text-indigo-600';
  const ai = 'text-amber-600';
  const { code } = content;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400"></span>
          <span className="h-3 w-3 rounded-full bg-amber-400"></span>
          <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
          <span className="ml-2 font-mono text-xs font-medium text-slate-400">christian-dechant.ts</span>
        </div>
        <span
          className="rounded border border-brand-100 bg-brand-50 px-2 py-0.5 font-mono text-[11px] font-medium text-brand-600">
          { code.badge }
        </span>
      </div>

      <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-slate-700">
        <span className="font-semibold text-brand-600">export const</span> <span
        className="font-semibold text-indigo-900">engineer</span> = { '{' }{ '\n' }
        { '  ' }name: <span className={ str }>&quot;Christian Dechant&quot;</span>,{ '\n' }
        { '  ' }role: <span className={ str }>&quot;{ code.role }&quot;</span>,{ '\n' }
        { '  ' }credentials: [{ '\n' }
        { code.credentials.map((credential, index) => (
          <span key={ credential }>
            { '    ' }<span
            className={ str }>&quot;{ credential }&quot;</span>{ index < code.credentials.length - 1 ? ',' : '' }{ '\n' }
          </span>
        )) }
        { '  ' }],{ '\n' }
        { '  ' }stack: { '{' }{ '\n' }
        { Object.entries(codeCardStack).map(([ key, values ], index, entries) => (
          <span key={ key }>
            { '    ' }{ key }: [{ values.map((value, i) => (
            <span key={ value }>
              <span className={ key === 'aiPillars' ? ai : tech }>&quot;{ value }&quot;</span>{ i < values.length - 1 ? ', ' : '' }
            </span>
          )) }]{ index < entries.length - 1 ? ',' : '' }{ '\n' }
          </span>
        )) }
        { '  ' }{ '}' },{ '\n' }
        { '  ' }mantra: <span className="font-medium text-amber-600">&quot;{ code.mantra }&quot;</span>,{ '\n' }
        { '  ' }availability: <span className="font-semibold text-emerald-600">true</span>{ '\n' }
        { '}' };
      </pre>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="font-mono text-slate-600">k8s-cluster :: healthy</span>
        </div>
        <span className="font-mono text-slate-400">node v22.x LTS</span>
      </div>

      <Link href={ `/${ locale }/wayventure` }
            className="mt-4 flex items-center gap-3 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 transition-colors hover:bg-amber-50">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white">
          <Icon name="explore" className="text-lg"/>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-amber-900">{ content.teaserTitle }</span>
          <span className="text-[11px] text-amber-700">{ content.teaserText }</span>
        </div>
      </Link>
    </div>
  );
}
