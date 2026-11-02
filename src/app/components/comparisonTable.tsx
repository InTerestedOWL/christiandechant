import { SiteContent } from "../interfaces";
import Icon from "./shared/materialIcon";

type Comparison = SiteContent['packagesPage']['comparison'];

function Cell({ value, content }: { value: boolean | string, content: Comparison }) {
  if ( typeof value === 'string' ) {
    return <span className="font-medium text-slate-800">{ value }</span>;
  }
  return value
    ? <><Icon name="check_circle" className="text-xl text-emerald-600"/><span className="sr-only">{ content.included }</span></>
    : <><Icon name="remove" className="text-xl text-slate-500"/><span className="sr-only">{ content.notIncluded }</span></>;
}

/**
 * Feature × package matrix as a real data table (caption, column and row headers).
 * The scroll container is focusable so keyboard users can scroll it on small screens.
 */
export default function ComparisonTable({ content, packages }: { content: Comparison, packages: string[] }) {
  return (
    <div role="region" aria-labelledby="comparison-caption" tabIndex={ 0 }
         className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <caption id="comparison-caption" className="sr-only">{ content.caption }</caption>
        <thead>
        <tr className="border-b border-slate-200 bg-slate-50">
          <th scope="col" className="px-4 py-3 font-semibold text-slate-700">{ content.featureLabel }</th>
          { packages.map((name) => (
            <th key={ name } scope="col" className="px-4 py-3 text-center font-bold text-slate-900">{ name }</th>
          )) }
        </tr>
        </thead>
        <tbody>
        { content.rows.map((row) => (
          <tr key={ row.label } className="border-b border-slate-100 last:border-b-0">
            <th scope="row" className="px-4 py-3 font-medium text-slate-700">{ row.label }</th>
            { row.values.map((value, index) => (
              <td key={ packages[index] } className="px-4 py-3 text-center">
                <Cell value={ value } content={ content }/>
              </td>
            )) }
          </tr>
        )) }
        </tbody>
      </table>
    </div>
  );
}
