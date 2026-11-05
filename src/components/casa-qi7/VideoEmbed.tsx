"use client";

import { useState } from "react";
import Image from "next/image";

import { track } from "./lead";

type Props = {
  id: string;
  title: string;
  poster: string;
  label?: string;
  short?: boolean;
};

// O player do YouTube só carrega quando a pessoa clica (a página continua leve).
export default function VideoEmbed({ id, title, poster, label, short = false }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-gray-900 ${
        short ? "aspect-[9/16] w-[min(300px,46%)]" : "mx-auto aspect-video max-w-[1000px]"
      }`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes={short ? "300px" : "(min-width: 1048px) 1000px, 100vw"}
            className="object-cover brightness-[.7]"
          />
          <a
            href={short ? `https://youtube.com/shorts/${id}` : `https://youtu.be/${id}`}
            aria-label={label ? undefined : title}
            onClick={(e) => {
              e.preventDefault();
              setPlaying(true);
              track("video_play", { video: id });
            }}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-sm font-medium tracking-[0.12em] text-white uppercase"
          >
            <span
              className={`grid place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-108 ${
                short ? "size-16" : "size-21"
              }`}
            >
              <svg viewBox="0 0 24 24" className={`ml-1 fill-gray-900 ${short ? "size-8" : "size-11"}`} aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {label && <span>{label}</span>}
          </a>
        </>
      )}
    </div>
  );
}
