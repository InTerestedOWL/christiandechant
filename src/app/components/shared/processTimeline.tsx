import { IProcessStep } from "../../interfaces";
import Icon from "./materialIcon";

/** Ordered process steps; the numbered list carries the order for screen readers. */
export default function ProcessTimeline({ steps }: { steps: IProcessStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
      { steps.map((step, index) => (
        <li key={ step.title } className="relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 font-mono text-sm font-bold text-white">
              { index + 1 }
            </span>
            <Icon name={ step.icon } className="text-2xl text-brand-600"/>
          </div>
          <h3 className="text-base font-bold text-slate-900">{ step.title }</h3>
          <p className="text-sm leading-relaxed text-slate-600">{ step.text }</p>
        </li>
      )) }
    </ol>
  );
}
