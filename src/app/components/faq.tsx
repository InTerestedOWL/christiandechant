import { SiteContent } from "../interfaces";
import SectionHeading from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";

// Answers stay in the HTML even when collapsed, so crawlers and AI assistants can read them.
export default function Faq({ content }: { content: SiteContent['faq'] }) {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content }/>

        <div className="grid max-w-4xl grid-cols-1 gap-3">
          { content.items.map((item) => (
            <details key={ item.question }
                     className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-colors open:border-brand-200 open:bg-brand-50/30">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                { item.question }
                <Icon name="expand_more"
                      className="shrink-0 text-2xl text-brand-600 transition-transform group-open:rotate-180"/>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{ item.answer }</p>
            </details>
          )) }
        </div>
      </div>
    </section>
  );
}
