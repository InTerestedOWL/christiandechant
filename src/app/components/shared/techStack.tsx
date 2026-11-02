import { StackGroup } from "../../interfaces";
import { techStack } from "../../content/shared";

/** The full tech stack, grouped; group labels come from the locale content. */
export default function TechStack({ groups }: { groups: Record<StackGroup, string> }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      { ( Object.keys(techStack) as StackGroup[] ).map((group) => (
        <div key={ group }>
          <h3 className="mb-2.5 text-sm font-bold text-slate-900">{ groups[group] }</h3>
          <ul className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-700">
            { techStack[group].map((tech) => (
              <li key={ tech } className="rounded bg-slate-100 px-2 py-0.5">{ tech }</li>
            )) }
          </ul>
        </div>
      )) }
    </div>
  );
}
