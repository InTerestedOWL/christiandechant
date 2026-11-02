import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/app/components/legalPage";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const { imprint } = getContent(locale);

  return pageMetadata(locale, 'imprint', { title: imprint.metaTitle, description: imprint.metaDescription });
}

export default async function Imprint({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }

  const content = getContent(locale);
  return <LegalPage content={ content.imprint } newTabHint={ content.a11y.newTab }/>;
}
