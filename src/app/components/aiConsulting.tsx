import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import SectionHeading from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";
import { accentBadge, accentButton, accentText } from "./shared/accent";

export default function AiConsulting({ locale, content }: { locale: Locale, content: SiteContent['aiConsulting'] }) {
  return (
    <section className="bg-white py-20" id="ai-consulting">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content }/>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          { content.tracks.map((track) => (
            <div key={ track.title }
                 className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={ `rounded-md border px-2.5 py-1 font-mono text-xs font-bold ${ accentBadge[track.accent] }` }>
                    { track.badge }
                  </span>
                  <Icon name={ track.icon } className={ `text-2xl ${ accentText[track.accent] }` }/>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{ track.title }</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">{ track.text }</p>
                <div className="mb-8 flex flex-col gap-3">
                  { track.items.map((item) => (
                    <div key={ item.title }
                         className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5">
                      <Icon name={ item.icon } className={ `mt-0.5 text-lg ${ accentText[track.accent] }` }/>
                      <div>
                        <span className="block text-xs font-semibold text-slate-900">{ item.title }</span>
                        <span className="text-xs text-slate-500">{ item.text }</span>
                      </div>
                    </div>
                  )) }
                </div>
              </div>
              <Link href={ `/${ locale }#contact` }
                    className={ `w-full rounded-xl py-3 text-center text-xs font-semibold text-white transition-colors ${ accentButton[track.accent] }` }>
                { track.cta }
              </Link>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}
