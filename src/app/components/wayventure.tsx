import Image from "next/image";
import Link from "next/link";
import { wayVentureFeatures, wayVentureUpcoming } from "@/app/data";

export default function WayVenture() {
  return (
    <section
      id="wayventure"
      className="relative overflow-hidden bg-wv-surface py-20 md:py-28"
      aria-labelledby="wayventure-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-wv-primary blur-[120px]"/>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-wv-light blur-[120px]"/>
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-2xl shadow-lg shadow-wv-primary/20">
            <Image
              src="/wayventure.png"
              alt="WayVenture app icon"
              width={ 160 }
              height={ 160 }
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-wv-primary/20 bg-white px-4 py-2 text-sm font-semibold text-wv-primary shadow-sm"
          >
            <i className="bx bxs-rocket"></i>
            Founder Project &middot; Live Product
          </span>

          <h2
            id="wayventure-heading"
            className="mt-6 font-header text-4xl font-extrabold uppercase leading-tight text-wv-dark sm:text-5xl lg:text-6xl"
          >
            Building{ ' ' }
            <span className="bg-gradient-to-r from-wv-primary via-[#ffaf7b] to-[#f08235] bg-clip-text text-transparent">
              WayVenture
            </span>
          </h2>

          <p className="mt-6 font-header text-xl font-medium text-wv-dark/70 sm:text-2xl">
            Your smart travel planner &mdash; from the planning to the memory.
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-body text-grey-10">
            Alongside my freelance work, I design and build{ ' ' }
            <strong className="text-wv-dark">WayVenture</strong>, a mobile-first travel companion
            app for road trips, camper journeys, and spontaneous getaways. It combines a digital
            travel pass, an AI-generated trip timeline, per-waypoint travel advisories, trip
            budgeting, and vehicle management into a single all-in-one travel app, live today at{ ' ' }
            <Link
              href="https://wayventure.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-wv-primary underline underline-offset-2 hover:text-wv-dark"
            >
              wayventure.de
            </Link>.
          </p>
        </div>

        {/* Feature Grid */ }
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { wayVentureFeatures.map((feature) => (
            <div
              key={ feature.title }
              className="group relative rounded-2xl border border-wv-primary/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-wv-primary/40 hover:shadow-xl"
            >
              { feature.badge && (
                <span
                  className="absolute right-4 top-4 rounded-full border border-wv-primary/20 bg-wv-primary/10 px-2 py-0.5 text-[10px] font-bold text-wv-primary"
                >
                  { feature.badge }
                </span>
              ) }
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-wv-primary/10 text-wv-primary transition-colors group-hover:bg-wv-primary/20"
              >
                <i className={ `bx ${ feature.icon } text-3xl` }></i>
              </div>
              <h3 className="mt-5 font-header text-lg font-bold text-wv-dark">{ feature.title }</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-grey-10">{ feature.description }</p>
            </div>
          )) }
        </div>

        {/* Screenshot */ }
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-wv-primary to-wv-light opacity-40 blur-lg"
          ></div>
          <Image
            src="/wayventure-insight.png"
            alt="Screenshot of the WayVenture travel app showing trip planning, digital travel pass, and budget overview"
            width={ 2569 }
            height={ 817 }
            className="relative w-full rounded-2xl border border-wv-primary/10 shadow-2xl"
          />
        </div>

        {/* Coming Soon */ }
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="font-header text-sm font-bold uppercase tracking-widest text-grey-30">
            On the Roadmap
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            { wayVentureUpcoming.map((item) => (
              <span
                key={ item.title }
                className="inline-flex items-center gap-2 rounded-full border border-wv-primary/10 bg-white px-4 py-2 text-sm font-medium text-grey-10 shadow-sm"
              >
                <i className={ `bx ${ item.icon } text-base text-wv-primary` }></i>
                { item.title }
              </span>
            )) }
          </div>
        </div>

        {/* CTA */ }
        <div className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            href="https://wayventure.de"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-wv-primary px-8 py-4 text-center font-header font-bold text-white shadow-lg shadow-wv-primary/30 transition-all hover:scale-105 hover:bg-wv-light sm:w-auto"
          >
            Visit WayVenture <i className="bx bx-link-external ml-1"></i>
          </Link>
          <Link
            href="/wayventure"
            className="w-full rounded-xl border-2 border-wv-primary/20 px-8 py-4 text-center font-header font-bold text-wv-dark transition-all hover:border-wv-primary/50 hover:bg-white sm:w-auto"
          >
            Read the Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
