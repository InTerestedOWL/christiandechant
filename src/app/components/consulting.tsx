import Title from "./shared/title";
import { IAiConsultingTrack } from "../interfaces";

export default function Consulting({ tracks }: { tracks: IAiConsultingTrack[] }) {
  return (
    <div id="consulting" className="bg-grey-60 border-t border-lila">
      <div className="container py-16 md:py-20">
        <Title
          title="Startup & Team Consulting"
          subtitle="Practical guidance from years of freelancing and entrepreneurship."
          text="How should you approach a project? When is your product ready for customers? How do you build a team that ships? I share what I have learned building products, teams and businesses of my own."></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          { tracks.map((track, index) => (
            <div key={ index }
                 className="group bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-lila border-t-4 border-t-lila hover:border-t-primary">
              <div>
                <div className="flex items-center mb-4">
                  <i className={ `bx ${ track.icon } text-4xl text-primary mr-3` }></i>
                  <span className="font-header text-sm font-semibold uppercase text-grey-10">{ track.audience }</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{ track.title }</h3>
                <p className="text-grey-10 mb-4 text-sm">{ track.description }</p>
                <ul className="mb-6 space-y-2">
                  { track.features.map((feature, idx) => (
                    <li key={ idx } className="text-sm flex items-start">
                      <span className="mr-2 text-primary">✅</span>
                      <span>{ feature }</span>
                    </li>
                  )) }
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-grey-20 text-center transition-colors"
              >
                Let&#39;s Talk!
              </a>
            </div>
          )) }
        </div>
        <div className="bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg rounded-lg p-6 md:p-8 mt-8">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">My guiding principle</p>
          <h3 className="font-header text-2xl md:text-3xl font-semibold mb-6">&ldquo;Publish early, but publish
            complete.&rdquo;</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-1">🚀 Publish early</h4>
              <p className="text-sm">Get your MVP into the hands of real customers as soon as possible. Their feedback
                is
                worth more than any assumption made in a meeting room.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">✨ Publish complete</h4>
              <p className="text-sm">An MVP still has to feel finished. It should solve its core problem so well that
                customers enjoy using it and gladly come back for more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
