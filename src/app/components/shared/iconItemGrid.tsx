import { IIconItem } from "../../interfaces";
import Icon from "./materialIcon";
import { accentIconBox } from "./accent";

/** Grid of icon + title + text tiles, four columns by default (three for 3 or 6 tiles). */
export default function IconItemGrid({ items, columns = 4 }: { items: IIconItem[], columns?: 3 | 4 }) {
  return (
    <ul className={ `grid grid-cols-1 gap-6 sm:grid-cols-2 ${ columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4' }` }>
      { items.map((item) => (
        <li key={ item.title } className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className={ `flex h-11 w-11 items-center justify-center rounded-xl border ${ accentIconBox.brand }` }>
            <Icon name={ item.icon } className="text-2xl"/>
          </div>
          <h3 className="text-base font-bold text-slate-900">{ item.title }</h3>
          <p className="text-sm leading-relaxed text-slate-600">{ item.text }</p>
        </li>
      )) }
    </ul>
  );
}
