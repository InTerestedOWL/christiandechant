import { SiteContent } from "../interfaces";
import Icon from "./shared/materialIcon";

export default function VoluntaryWork({ content }: { content: SiteContent['volunteering'] }) {
  return (
    <section className="bg-white py-20" id="feuerwehr">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-8">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
                <Icon name="local_fire_department" className="text-[16px]"/>
                { content.badge }
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{ content.title }</h2>
              <p className="text-base leading-relaxed text-slate-600">{ content.text }</p>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                { content.values.map((value) => (
                  <div key={ value.label } className="rounded-xl border border-slate-200/80 bg-white p-3">
                    <span className="block font-mono text-[11px] uppercase text-slate-400">{ value.label }</span>
                    <span className="text-sm font-bold text-slate-900">{ value.value }</span>
                  </div>
                )) }
              </div>
            </div>

            <div
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase text-slate-400">{ content.quoteLabel }</span>
              <p className="text-xs leading-relaxed text-slate-600 italic">„{ content.quote }“</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                  CD
                </div>
                <span className="text-xs font-semibold text-slate-800">{ content.signature }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
