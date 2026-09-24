import { notFound } from "next/navigation";

/** Catches unknown paths below a locale so they render the localized not-found page. */
export default function CatchAll() {
  notFound();
}
