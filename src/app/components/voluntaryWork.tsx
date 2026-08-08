"use client";
import Image from "next/image";
import Title from "@/app/components/shared/title";
import { IVoluntaryWork } from "../interfaces";
import { useState } from "react";

export default function VoluntaryWork({ voluntaryWorks }: { voluntaryWorks: IVoluntaryWork[] }) {
  const [ flippedIndex, setFlippedIndex ] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-white" id="voluntary">
      <div className="container py-16 md:py-20">
        <Title
          title="Voluntary Commitment"
          subtitle="Volunteering with Responsibility and Team Spirit"
          text=""
        ></Title>
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          { voluntaryWorks.map((item, index) => (
            <div
              key={ index }
              className="perspective-1000 group h-80 w-full cursor-pointer"
              onClick={ () => handleFlip(index) }
            >
              <div
                className={ `relative h-full w-full transition-all duration-500 preserve-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }` }
              >
                {/* Front Side */ }
                <div
                  className="backface-hidden absolute flex h-full w-full flex-col items-center justify-center rounded bg-white px-8 py-12 shadow hover:bg-primary group-hover:bg-primary">
                  <div className="relative mx-auto h-24 w-24 text-center">
                    <Image
                      src={ item.imageSrc }
                      alt={ item.title }
                      fill
                      sizes="96px"
                      className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <h3 className="font-header text-xl font-medium uppercase text-primary group-hover:text-white">
                      { item.title }
                    </h3>
                    <p className="pt-2 font-body text-grey-20 group-hover:text-white">
                      { item.dateFrom } - { item.dateTill }
                    </p>
                  </div>
                </div>

                {/* Back Side */ }
                <div
                  className="rotate-y-180 backface-hidden absolute flex h-full w-full flex-col overflow-y-auto rounded bg-primary px-8 py-8 shadow text-white">
                  <h3 className="font-header text-xl font-medium uppercase">
                    { item.backTitle || item.title }
                  </h3>
                  <p className="pt-4 font-body text-sm">
                    { item.backDescription || item.description }
                  </p>
                  { item.backImages && item.backImages.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      { item.backImages.map((img, i) => (
                        <div key={ i } className="relative h-24 w-32 shrink-0">
                          <Image
                            src={ img }
                            alt={ `${ item.title } — photo ${ i + 1 }` }
                            fill
                            sizes="128px"
                            className="rounded object-cover"
                          />
                        </div>
                      )) }
                    </div>
                  ) }
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}
