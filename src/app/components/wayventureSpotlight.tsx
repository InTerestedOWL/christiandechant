import Image from "next/image";
import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { wayVentureUrl } from "../content/shared";
import Icon from "./shared/materialIcon";
import RichText from "./shared/richText";

export default function WayVentureSpotlight({ locale, content }: {
  locale: Locale,
  content: SiteContent['wayventure']
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20" id="wayventure">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border-2 border-amber-200/90 bg-linear-to-br from-amber-50/60 via-white to-orange-50/40 p-8 shadow-xl shadow-amber-500/5 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Icon name="verified" className="text-[16px] text-amber-600"/>
                { content.badge }
              </div>
              <h2
                className="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                { content.title } <br className="hidden sm:inline"/>
                <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  { content.titleHighlight }
                </span>
              </h2>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-7"><RichText
                text={ content.text }/></p>

              <div className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2">
                { content.features.map((feature) => (
                  <div key={ feature.title } className="flex items-start gap-2.5">
                    <Icon name={ feature.icon } className="mt-0.5 text-xl text-amber-600"/>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">{ feature.title }</span>
                      <span className="text-xs text-slate-600">{ feature.text }</span>
                    </div>
                  </div>
                )) }
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a href={ wayVentureUrl } target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-600">
                  <span>{ content.primaryCta }</span>
                  <Icon name="open_in_new" className="text-[18px]"/>
                </a>
                <Link href={ `/${ locale }#contact` }
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50">
                  <span>{ content.secondaryCta }</span>
                  <Icon name="article" className="text-[18px]"/>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div
                className="relative w-full max-w-sm rotate-1 rounded-2xl border border-amber-200/90 bg-white p-3.5 shadow-2xl transition-transform hover:rotate-0">
                <Image src="/wayventure-insight.png" width={ 800 } height={ 640 }
                       className="h-80 w-full rounded-xl border border-slate-100 object-cover object-top"
                       alt={ content.imageAlt }/>
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span> { content.status }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
