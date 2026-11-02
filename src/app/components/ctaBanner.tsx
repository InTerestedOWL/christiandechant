import Link from "next/link";
import { ICtaBanner } from "../interfaces";
import Icon from "./shared/materialIcon";

/** Closing call to action at the end of a sub page. */
export default function CtaBanner({ content, href }: { content: ICtaBanner, href: string }) {
  return (
    <section aria-labelledby="cta-title" className="bg-linear-to-r from-brand-700 via-brand-800 to-indigo-900 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{ content.title }</h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">{ content.text }</p>
        <Link href={ href }
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 shadow-md transition-all hover:bg-brand-50">
          <span>{ content.cta }</span>
          <Icon name="send" className="text-[18px]"/>
        </Link>
      </div>
    </section>
  );
}
