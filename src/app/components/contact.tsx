'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IMessage, SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import Icon from "./shared/materialIcon";
import { Eyebrow } from "./shared/sectionHeading";
import { accentIconBox } from "./shared/accent";

const inputClass = 'rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none';
const labelClass = 'font-mono text-xs font-semibold text-slate-700';

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

export default function Contact({ locale, content }: { locale: Locale, content: SiteContent['contact'] }) {
  const { form } = content;
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ scope, setScope ] = useState(form.scopes[0]?.value ?? '');
  const [ message, setMessage ] = useState('');
  const [ acceptedPrivacy, setAcceptedPrivacy ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ result, setResult ] = useState<'success' | 'error' | 'rateLimited' | null>(null);
  const [ website, setWebsite ] = useState('');
  const [ startedAt, setStartedAt ] = useState(0);

  useEffect(() => setStartedAt(Date.now()), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const scopeLabel = form.scopes.find((option) => option.value === scope)?.label ?? scope;
    const payload: IMessage = {
      name,
      email,
      text: `[${ scopeLabel }]\n\n${ message }`,
      lang: locale,
      website,
      startedAt,
    };

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if ( response.ok ) {
        setResult('success');
        setName('');
        setEmail('');
        setMessage('');
        setAcceptedPrivacy(false);
      } else {
        setResult(response.status === 429 ? 'rateLimited' : 'error');
      }
    } catch ( error ) {
      console.error('Error:', error);
      setResult('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-slate-200/80 bg-slate-50 py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={ `mx-auto mb-16 grid grid-cols-1 gap-6 ${ content.testimonials.length > 1 ? 'max-w-5xl md:grid-cols-2' : 'max-w-3xl' }` }>
          { content.testimonials.map((testimonial) => (
            <figure key={ testimonial.name }
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                { [ 0, 1, 2, 3, 4 ].map((star) => <Icon key={ star } name="star" filled className="text-lg"/>) }
              </div>
              <blockquote
                className="text-base leading-relaxed font-medium text-slate-800 italic sm:text-lg sm:leading-7">
                „{ testimonial.text }“
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700">
                  { testimonial.initials ?? initials(testimonial.name) }
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900">{ testimonial.name }</span>
                  <span className="text-[11px] text-slate-500">{ testimonial.role }</span>
                </div>
              </figcaption>
            </figure>
          )) }
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div>
              <Eyebrow icon="mail" text={ content.eyebrow } className="mb-2"/>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{ content.title }</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{ content.text }</p>
            </div>

            <div className="flex flex-col gap-3.5">
              { content.items.map((item) => (
                <div key={ item.label }
                     className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                  <div
                    className={ `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${ accentIconBox[item.accent] }` }>
                    <Icon name={ item.icon } className="text-xl"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] text-slate-400">{ item.label }</span>
                    { item.href ? (
                      <a href={ item.href }
                         className="text-sm font-semibold text-slate-900 transition-colors hover:text-brand-600">
                        { item.text }
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-900">{ item.text }</span>
                    ) }
                  </div>
                </div>
              )) }
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-7">
            <form className="flex flex-col gap-4" onSubmit={ handleSubmit }>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className={ labelClass } htmlFor="name">{ form.name }</label>
                  <input id="name" type="text" required className={ inputClass } placeholder={ form.namePlaceholder }
                         value={ name } onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={ labelClass } htmlFor="email">{ form.email }</label>
                  <input id="email" type="email" required className={ inputClass } placeholder={ form.emailPlaceholder }
                         value={ email } onChange={ (e) => setEmail(e.target.value) }/>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={ labelClass } htmlFor="scope">{ form.scope }</label>
                <select id="scope" className={ `${ inputClass } bg-white` } value={ scope }
                        onChange={ (e) => setScope(e.target.value) }>
                  { form.scopes.map((option) => (
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                  )) }
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={ labelClass } htmlFor="message">{ form.message }</label>
                <textarea id="message" required rows={ 4 } className={ inputClass }
                          placeholder={ form.messagePlaceholder }
                          value={ message } onChange={ (e) => setMessage(e.target.value) }></textarea>
              </div>
              {/* Honeypot: hidden from humans and assistive tech, bots tend to fill it. */ }
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={ -1 } autoComplete="off"
                       value={ website } onChange={ (e) => setWebsite(e.target.value) }/>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <input id="dsgvo" type="checkbox" required checked={ acceptedPrivacy }
                       onChange={ (e) => setAcceptedPrivacy(e.target.checked) }
                       className="mt-1 rounded border-slate-300 text-brand-600 focus:ring-brand-500"/>
                <label className="text-xs leading-normal text-slate-500" htmlFor="dsgvo">
                  { form.consent[0] }
                  <Link href={ `/${ locale }/privacy-policy` } className="underline hover:text-brand-600">
                    { form.consent[1] }
                  </Link>
                  { form.consent[2] }
                </label>
              </div>
              <button type="submit" disabled={ loading }
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-brand-500/25 disabled:opacity-60">
                <span>{ loading ? form.sending : form.submit }</span>
                <Icon name="send" className="text-lg"/>
              </button>
              { result === 'success' && (
                <div
                  className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-medium text-emerald-800">
                  <Icon name="task_alt" className="text-lg text-emerald-600"/>
                  <span>{ form.success }</span>
                </div>
              ) }
              { result === 'rateLimited' && (
                <div
                  className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs font-medium text-amber-800">
                  <Icon name="schedule" className="text-lg text-amber-600"/>
                  <span>{ form.rateLimited }</span>
                </div>
              ) }
              { result === 'error' && (
                <div
                  className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-800">
                  <Icon name="error" className="text-lg text-rose-600"/>
                  <span>{ form.error }</span>
                </div>
              ) }
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
