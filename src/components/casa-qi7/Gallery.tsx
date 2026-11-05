"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Photo = [file: string, caption: string, category: string, size?: "big" | "wide"];

const CATEGORIES: Record<string, string> = {
  externa: "Área externa",
  social: "Social",
  gourmet: "Gourmet",
  intima: "Suítes e íntima",
  noite: "À noite",
  aerea: "Vista aérea",
};

// A ordem aqui é a ordem na página. "big" e "wide" só valem na visão "Todas".
const PHOTOS: Photo[] = [
  ["dia-07.jpg", "Piscina aquecida com borda infinita", "externa", "big"],
  ["dia-16.jpg", "Sala de estar integrada ao jardim", "social"],
  ["dia-01.jpg", "Área gourmet com parrilla", "gourmet"],
  ["drone-13.jpg", "Vista aérea da casa", "aerea", "wide"],
  ["dia-04.jpg", "Fireplace no jardim", "externa"],
  ["dia-36.jpg", "Suíte com varanda", "intima"],
  ["noite-04.jpg", "Piscina iluminada à noite", "noite", "wide"],
  ["dia-08.jpg", "Sala de estar", "social"],
  ["dia-25.jpg", "Banho com banheira", "intima"],
  ["dia-10.jpg", "Fachada", "externa"],
  ["dia-44.jpg", "Sala de jantar", "social"],
  ["dia-55.jpg", "Piscina, prainha e varanda", "externa"],
  ["dia-56.jpg", "Piscina com borda infinita", "externa"],
  ["dia-53.jpg", "Varanda e piscina", "externa"],
  ["dia-54.jpg", "Jardim com fireplace visto do alto", "externa"],
  ["dia-52.jpg", "Jardim e área de lazer", "externa"],
  ["dia-02.jpg", "Redário", "externa"],
  ["dia-63.jpg", "Varanda coberta", "externa"],
  ["dia-47.jpg", "Ambiente integrado ao jardim", "externa"],
  ["dia-11.jpg", "Entrada", "externa"],
  ["dia-12.jpg", "Fachada em ripado", "externa"],
  ["dia-13.jpg", "Caminho lateral do jardim", "externa"],
  ["dia-41.jpg", "Sala de estar", "social"],
  ["dia-68.jpg", "Salas de estar e jantar integradas", "social"],
  ["dia-69.jpg", "Sala de jantar", "social"],
  ["dia-70.jpg", "Sala de jantar integrada", "social"],
  ["dia-65.jpg", "Sala de jantar e escada", "social"],
  ["dia-61.jpg", "Área gourmet com ilha em granito", "gourmet"],
  ["dia-46.jpg", "Mesa da área gourmet", "gourmet"],
  ["dia-19.jpg", "Sala íntima do pavimento superior", "intima"],
  ["dia-40.jpg", "Sala íntima com vista", "intima"],
  ["dia-21.jpg", "Copa íntima", "intima"],
  ["dia-37.jpg", "Circulação do pavimento superior", "intima"],
  ["dia-32.jpg", "Suíte com varanda", "intima"],
  ["dia-33.jpg", "Suíte", "intima"],
  ["dia-22.jpg", "Banheiro em travertino", "intima"],
  ["dia-38.jpg", "Banheiro de suíte", "intima"],
  ["dia-42.jpg", "Área de serviço", "servico"],
  ["noite-02.jpg", "Sala de estar à noite", "noite"],
  ["noite-19.jpg", "Sala de estar à noite", "noite"],
  ["noite-22.jpg", "Sala de estar à noite", "noite"],
  ["noite-16.jpg", "Sala de jantar à noite", "noite"],
  ["noite-17.jpg", "Sala de jantar à noite", "noite"],
  ["noite-05.jpg", "Área gourmet à noite", "noite"],
  ["noite-07.jpg", "Circulação do pavimento superior", "noite"],
  ["noite-13.jpg", "Suíte à noite", "noite"],
  ["noite-10.jpg", "Banheiro à noite", "noite"],
  ["noite-11.jpg", "Banheiro à noite", "noite"],
  ["drone-07.jpg", "Vista aérea da casa", "aerea"],
  ["drone-01.jpg", "Vista aérea do Lago Sul", "aerea"],
];

const src = (file: string) => `/casa-qi7-lago-sul/img/${file}`;
const SPAN = { big: "col-span-2 row-span-2", wide: "col-span-2" };

export default function Gallery() {
  const [category, setCategory] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const view = category ? PHOTOS.filter((p) => p[2] === category) : PHOTOS;
  // Quantas aparecem antes do "+ fotos". Em "Todas", 11 fecha a grade sem buraco
  // (por causa das fotos big/wide) tanto em 4 quanto em 2 colunas.
  const visible = category ? 12 : 11;
  const go = (step: number) => setCurrent((c) => (c + step + view.length) % view.length);
  const open = (i: number) => {
    setCurrent(i);
    dialog.current?.showModal();
  };

  const chips: [label: string, key: string | null][] = [
    ["Todas", null],
    ...Object.entries(CATEGORIES).map(([key, label]): [string, string] => [label, key]),
  ];
  const [file, caption] = view[current] ?? view[0];

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar fotos por ambiente">
        {chips.map(([label, key]) => (
          <button
            key={label}
            type="button"
            aria-pressed={category === key}
            onClick={() => setCategory(key)}
            className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium tracking-[0.04em] text-gray-800 transition-colors hover:border-gray-900 aria-pressed:border-gray-900 aria-pressed:bg-gray-900 aria-pressed:text-white"
          >
            {label}
            <span className="ml-1 font-normal opacity-75">
              {key ? PHOTOS.filter((p) => p[2] === key).length : PHOTOS.length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 lg:auto-rows-[210px] lg:grid-cols-4">
        {view.slice(0, visible).map(([file, caption, , size], i) => {
          const span = size && !category ? SPAN[size] : "";
          return (
            <button
              key={file}
              type="button"
              aria-label={"Ampliar: " + caption}
              onClick={() => open(i)}
              className={`group relative cursor-zoom-in overflow-hidden rounded-[14px] bg-gray-100 ${span}`}
            >
              <Image
                src={src(file)}
                alt={caption}
                fill
                sizes={span ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-600 group-hover:scale-104"
              />
              {i === visible - 1 && view.length > visible && (
                <span className="absolute inset-0 grid place-items-center bg-gray-900/60 text-sm font-medium tracking-[0.12em] text-white uppercase">
                  +{view.length - visible} fotos
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* <dialog> nativo: Esc fecha, foco fica preso dentro e volta ao fechar */}
      <dialog
        ref={dialog}
        aria-label="Galeria de fotos"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="m-0 size-full max-h-none max-w-none items-center justify-center bg-[rgb(10_14_24/0.96)] p-0 backdrop:bg-transparent open:flex"
      >
        {/* Imagem no tamanho da própria foto: clicar no escuro em volta fecha */}
        <Image
          key={file}
          src={src(file)}
          alt={caption}
          width={1200}
          height={800}
          sizes="92vw"
          className="h-auto max-h-[84vh] w-auto max-w-[92vw] rounded-lg"
        />
        <button type="button" aria-label="Fechar" onClick={() => dialog.current?.close()} className={`${navBtn} top-2.5 right-3.5`}>
          &times;
        </button>
        <button type="button" aria-label="Foto anterior" onClick={() => go(-1)} className={`${navBtn} top-1/2 left-2 -translate-y-1/2`}>
          &#8249;
        </button>
        <button type="button" aria-label="Próxima foto" onClick={() => go(1)} className={`${navBtn} top-1/2 right-2 -translate-y-1/2`}>
          &#8250;
        </button>
        <p className="absolute inset-x-0 bottom-4.5 text-center text-sm tracking-[0.06em] text-gray-300">
          {caption} · {current + 1}/{view.length}
        </p>
      </dialog>
    </>
  );
}

const navBtn = "absolute cursor-pointer p-4 text-[2.4rem] leading-none font-light text-white opacity-80 hover:opacity-100";
