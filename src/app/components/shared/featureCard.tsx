import { IReason } from "../../interfaces";
import Icon from "./materialIcon";
import { accentHoverBorder, accentIconBox } from "./accent";

/** Card with icon, title, text and a checklist. `number` is shown as a decorative counter. */
export default function FeatureCard({ item, number, className = '' }: { item: IReason, number?: number, className?: string }) {
  return (
    <div
      className={ `group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${ accentHoverBorder[item.accent] } ${ className }` }>
      <div className="mb-4 flex items-center justify-between">
        <div
          className={ `flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${ accentIconBox[item.accent] }` }>
          <Icon name={ item.icon } className="text-2xl"/>
        </div>
        { number !== undefined && (
          <span aria-hidden="true" className="font-mono text-xs font-semibold text-slate-500">
            { String(number).padStart(2, '0') }
          </span>
        ) }
      </div>
      <h3 lang={ item.lang } className="mb-2 text-lg font-bold text-slate-900">{ item.title }</h3>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">{ item.text }</p>
      <ul className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
        { item.points.map((point) => (
          <li key={ point } className="flex items-start gap-2">
            <Icon name="check_circle" className="shrink-0 text-base text-emerald-600"/>
            <span>{ point }</span>
          </li>
        )) }
      </ul>
    </div>
  );
}
