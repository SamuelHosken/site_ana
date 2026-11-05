"use client";

import { useEffect, useRef, useState } from "react";

import { track } from "./lead";

const YT = "6C7GX1uDbEs";
const SRC = `https://www.youtube-nocookie.com/embed/${YT}?autoplay=1&mute=1&loop=1&playlist=${YT}&controls=0&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1`;

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

// Vídeo de fundo do topo: mudo e em loop. O player do YouTube pesa ~2 MB, então só
// começa 2s depois do load (sem disputar banda com a foto do hero, que é o LCP).
// Não carrega com "reduzir movimento" nem com economia de dados ligada.
export default function HeroVideo() {
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ((navigator as NavigatorWithConnection).connection?.saveData) return;
    let timer: ReturnType<typeof setTimeout>;
    const start = () => (timer = setTimeout(() => setLoad(true), 2000));
    if (document.readyState === "complete") start();
    else addEventListener("load", start, { once: true });
    return () => {
      removeEventListener("load", start);
      clearTimeout(timer);
    };
  }, []);

  if (!load) return null;

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    frame.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: next ? "mute" : "unMute", args: [] }),
      "*"
    );
    if (!next) track("video_play", { video: YT + "_topo_som" });
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden [container-type:size]" aria-hidden="true">
        <iframe
          ref={frame}
          src={SRC}
          title="Vídeo da casa na QI 7 do Lago Sul"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          onLoad={() => setTimeout(() => setVisible(true), 1200)}
          className={`absolute top-1/2 left-1/2 h-[max(100cqh,56.25cqw)] w-[max(100cqw,177.78cqh)] -translate-1/2 scale-120 border-0 transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full border border-white/50 bg-gray-900/45 px-3.5 py-2 text-xs font-medium tracking-[0.08em] text-white uppercase backdrop-blur-md transition-colors hover:bg-gray-900/70 sm:bottom-5 sm:left-5 sm:translate-x-0 sm:px-4 sm:py-2.5"
      >
        {muted ? "Ativar som" : "Desativar som"}
      </button>
    </>
  );
}
