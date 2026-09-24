import React from "react";
import { ILegalPage, ILegalSection } from "../interfaces";
import { Eyebrow } from "./shared/sectionHeading";

/** Turns plain https:// URLs inside legal text into links. */
function Linkified({ text }: { text: string }) {
  return (
    <>
      { text.split(/(https:\/\/\S+[^\s.,;)])/g).map((part, index) => part.startsWith('https://')
        ? <a key={ index } href={ part } target="_blank" rel="noreferrer"
             className="text-brand-600 underline hover:text-brand-700">{ part }</a>
        : part) }
    </>
  );
}

function Section({ section, level }: { section: ILegalSection, level: 2 | 3 }) {
  const Heading = level === 2 ? 'h2' : 'h3';

  return (
    <div className={ level === 2 ? 'flex flex-col gap-3 border-t border-slate-100 pt-8 first:border-t-0 first:pt-0' : 'flex flex-col gap-2 pt-2' }>
      <Heading className={ level === 2
        ? 'text-xl font-bold tracking-tight text-slate-900'
        : 'text-base font-semibold text-slate-900' }>
        { section.heading }
      </Heading>
      { section.paragraphs?.map((paragraph) => (
        <p key={ paragraph } className="text-sm leading-relaxed whitespace-pre-line text-slate-600">
          <Linkified text={ paragraph }/>
        </p>
      )) }
      { section.list && (
        <ul className="flex flex-col gap-1.5 text-sm text-slate-600">
          { section.list.map((item) => (
            <li key={ item } className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
              <span>{ item }</span>
            </li>
          )) }
        </ul>
      ) }
      { section.subsections?.map((subsection) => (
        <Section key={ subsection.heading } section={ subsection } level={ 3 }/>
      )) }
    </div>
  );
}

export default function LegalPage({ content }: { content: ILegalPage }) {
  return (
    <main className="relative overflow-hidden bg-linear-to-b from-brand-50/40 via-white to-white py-16 lg:py-24">
      <div className="bg-grid-pattern pointer-events-none absolute inset-x-0 top-0 h-96 opacity-60"></div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <Eyebrow icon="gavel" text={ content.eyebrow }/>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{ content.title }</h1>
          { content.intro && <p className="text-base leading-relaxed text-slate-600">{ content.intro }</p> }
          <span className="font-mono text-xs text-slate-400">{ content.updated }</span>
        </div>
        <div className="flex flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          { content.sections.map((section) => <Section key={ section.heading } section={ section } level={ 2 }/>) }
        </div>
      </div>
    </main>
  );
}
