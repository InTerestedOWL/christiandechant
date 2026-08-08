import Image from "next/image";

export default function Map() {
  return (
    <div className="relative h-72 sm:h-64 md:h-72 lg:h-96">
      <Image
        src="/map.png"
        alt="Map"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  )
}
