import Link from "next/link";
import Icon from "./materialIcon";

/** Visible breadcrumb trail; the last entry is the current page. */
export default function Breadcrumbs({ label, trail }: { label: string, trail: { name: string, path: string }[] }) {
  return (
    <nav aria-label={ label } className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-600">
        { trail.map((item, index) => {
          const isCurrent = index === trail.length - 1;
          return (
            <li key={ item.path } className="flex items-center gap-1.5">
              { index > 0 && <Icon name="chevron_right" className="text-base text-slate-500"/> }
              { isCurrent
                ? <span aria-current="page" className="font-semibold text-slate-900">{ item.name }</span>
                : <Link href={ item.path } className="rounded underline-offset-4 transition-colors hover:text-brand-700 hover:underline">
                  { item.name }
                </Link> }
            </li>
          );
        }) }
      </ol>
    </nav>
  );
}
