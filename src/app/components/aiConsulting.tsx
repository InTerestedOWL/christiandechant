import Title from "./shared/title";
import { IAiConsultingTrack } from "../interfaces";

export default function AiConsulting({ tracks }: { tracks: IAiConsultingTrack[] }) {
  return (
    <div id="ai-consulting" className="bg-white border-t border-lila">
      <div className="container py-16 md:py-20">
        <Title
          title="AI Consulting"
          subtitle="Helping teams and developers move to AI-agent-driven development."
          text={ null }></Title>
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
      </div>
    </div>
  );
}
