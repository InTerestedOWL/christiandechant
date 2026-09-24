import React from "react";
import { ISectionHeading } from "../../interfaces";
import Icon from "./materialIcon";

export function Eyebrow({ icon, text, className = '' }: { icon: string, text: string, className?: string }) {
  return (
    <div
      className={ `inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-brand-600 ${ className }` }>
      <Icon name={ icon } className="text-[16px]"/>
      { text }
    </div>
  );
}

export default function SectionHeading({ content }: { content: ISectionHeading }) {
  return (
    <div className="mb-12 flex max-w-2xl flex-col gap-3">
      <Eyebrow icon={ content.icon } text={ content.eyebrow }/>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{ content.title }</h2>
      <p className="text-base text-slate-600">{ content.text }</p>
    </div>
  );
}
