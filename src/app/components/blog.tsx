import Link from "next/link";
import Title from "./shared/title";

interface IVideo {
  etag: string;
  id: { kind: string, videoId: string };
  kind: string;
  snippet: { thumbnails: IThumbnails, title: string, description: string }
}

interface IThumbnails {
  high: IThumbnailResolution;
  default: IThumbnailResolution;
  medium: IThumbnailResolution;
}

interface IThumbnailResolution {
  url: string,
  width: number,
  height: number
}

async function getVideos(): Promise<IVideo[]> {
  const cid = process.env.YOUTUBE_CHANNELID;
  const apiKey = process.env.YOUTUBE_API_KEY;
  const reqURL = `https://www.googleapis.com/youtube/v3/search?key=${ apiKey }&part=snippet&channelId=${ cid }&type=video&maxResults=3&order=date`;

  try {
    // Cached and revalidated hourly so we don't burn YouTube API quota on every request.
    const response = await fetch(reqURL, { next: { revalidate: 3600 } });

    if ( !response.ok ) {
      console.error(`Error fetching YouTube data: ${ response.statusText }`);
      return [];
    }

    const data = await response.json();
    return data.items ?? [];
  } catch ( error ) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
}

export default async function Blog() {
  const videos = await getVideos();

  return (
    <div className="bg-grey-50" id="blog">
      <div className="container py-16 md:py-20">
        <Title title={ 'I also like to travel' }
               subtitle={ 'Check out my latest travel stories on my German Youtube Channel InTerestedOWL!' }
               text=""></Title>
        <div
          className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
        >
          { videos.map((item, index) => (
            <Link key={ index } href={ `https://youtube.com/watch?v=${ item.id.videoId }` } className="shadow">
              <div
                style={ { backgroundImage: `url(${ item.snippet.thumbnails.high.url })` } }
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                ></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                >Click here</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"
                >{ decodeURIComponent(item.snippet.title) }</span>
                <span className="block pt-2 font-body text-grey-20">{ item.snippet.description }</span>
              </div>
            </Link>
          )) }
        </div>
      </div>
    </div>
  );
}
