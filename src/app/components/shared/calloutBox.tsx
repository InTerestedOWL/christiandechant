import Link from "next/link";
import { ICtaBanner } from "../../interfaces";
import Icon from "./materialIcon";

/** Inline box with icon, title, text and one link, e.g. "custom software? → freelancing". */
export default function CalloutBox({ content, href, icon = 'developer_board' }: { content: ICtaBanner, href: string, icon?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row">
      <div className="flex items-center gap-5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600">
          <Icon name={ icon } className="text-2xl"/>
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{ content.title }</h3>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">{ content.text }</p>
        </div>
      </div>
      <Link href={ href }
            className="shrink-0 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-black">
        { content.cta }
      </Link>
    </div>
  );
}
