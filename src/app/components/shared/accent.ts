import { Accent } from "../../interfaces";

// Full class strings are listed explicitly so Tailwind can detect them at build time.

export const accentIconBox: Record<Accent, string> = {
  brand: 'bg-brand-50 text-brand-600 border-brand-100',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100',
  slate: 'bg-slate-100 text-slate-600 border-slate-200',
};

export const accentHoverBorder: Record<Accent, string> = {
  brand: 'hover:border-brand-300',
  indigo: 'hover:border-indigo-300',
  emerald: 'hover:border-emerald-300',
  amber: 'hover:border-amber-300',
  rose: 'hover:border-rose-300',
  slate: 'hover:border-slate-300',
};

export const accentBadge: Record<Accent, string> = {
  brand: 'text-brand-700 bg-brand-50 border-brand-200',
  indigo: 'text-indigo-700 bg-indigo-50 border-indigo-100',
  emerald: 'text-emerald-800 bg-emerald-50 border-emerald-200',
  amber: 'text-amber-800 bg-amber-50 border-amber-200',
  rose: 'text-rose-700 bg-rose-50 border-rose-200',
  slate: 'text-slate-700 bg-slate-100 border-slate-200',
};

export const accentText: Record<Accent, string> = {
  brand: 'text-brand-600',
  indigo: 'text-indigo-600',
  emerald: 'text-emerald-600',
  amber: 'text-amber-600',
  rose: 'text-rose-600',
  slate: 'text-slate-900',
};

export const accentDot: Record<Accent, string> = {
  brand: 'bg-brand-600',
  indigo: 'bg-indigo-600',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
  slate: 'bg-slate-400',
};

export const accentLink: Record<Accent, string> = {
  brand: 'text-brand-600 hover:text-brand-700',
  indigo: 'text-indigo-600 hover:text-indigo-700',
  emerald: 'text-emerald-700 hover:text-emerald-800',
  amber: 'text-amber-700 hover:text-amber-800',
  rose: 'text-rose-700 hover:text-rose-800',
  slate: 'text-slate-700 hover:text-slate-900',
};

export const accentButton: Record<Accent, string> = {
  brand: 'bg-brand-600 hover:bg-brand-700',
  indigo: 'bg-indigo-600 hover:bg-indigo-700',
  emerald: 'bg-slate-900 hover:bg-black',
  amber: 'bg-amber-500 hover:bg-amber-600',
  rose: 'bg-rose-600 hover:bg-rose-700',
  slate: 'bg-slate-900 hover:bg-black',
};
