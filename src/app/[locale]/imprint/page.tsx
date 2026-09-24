import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/app/components/legalPage";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { alternates } from "@/app/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const { imprint } = getContent(locale);

  return {
    title: imprint.metaTitle,
    description: imprint.metaDescription,
    alternates: alternates(locale, '/imprint'),
  };
}

export default async function Imprint({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }

  return <LegalPage content={ getContent(locale).imprint }/>;
}
