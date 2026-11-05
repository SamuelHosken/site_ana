"use client";

import type { FormEvent } from "react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackLead, waUrl } from "./lead";

const label = "mt-4 mb-1.5 block text-xs font-medium tracking-[0.12em] text-gray-500 uppercase";
const field =
  "w-full rounded-[10px] border border-gray-200 bg-neutral-50 px-3.5 py-3 text-base text-gray-900 focus:outline-2 focus:outline-offset-1 focus:outline-primary";

export default function LeadForm() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome")).trim();
    const msg = `Olá! Meu nome é ${nome}. Vi a casa na QI 7 do Lago Sul e quero: ${String(f.get("interesse")).toLowerCase()}. Melhor período para contato: ${String(f.get("quando")).toLowerCase()}.`;
    trackLead("formulario");
    // location.href em vez de window.open: navegadores de apps (Instagram, Facebook) bloqueiam popup
    window.location.href = waUrl(msg);
  }

  return (
    <form onSubmit={submit} className="rounded-[20px] bg-white p-6 text-gray-800 sm:p-9">
      <h3 className="text-[1.4rem] font-medium text-gray-900">
        Fale com <em className="font-bodoni font-normal text-primary">o corretor</em>
      </h3>

      <label htmlFor="nome" className={label}>Seu nome</label>
      {/* pattern: exige ao menos um caractere que não seja espaço */}
      <input id="nome" name="nome" type="text" autoComplete="name" required pattern=".*\S.*" className={field} />

      <label htmlFor="interesse" className={label}>Quero</label>
      <select id="interesse" name="interesse" className={field}>
        <option>Agendar uma visita</option>
        <option>Receber o vídeo e mais fotos</option>
        <option>Conhecer as condições de negociação</option>
      </select>

      <label htmlFor="quando" className={label}>Melhor período para contato</label>
      <select id="quando" name="quando" className={field}>
        <option>Qualquer horário</option>
        <option>Manhã</option>
        <option>Tarde</option>
        <option>Noite</option>
      </select>

      <button
        type="submit"
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-[0.8rem] leading-none font-medium tracking-[0.08em] text-white uppercase transition hover:-translate-y-px hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon />
        Continuar no WhatsApp
      </button>
      <small className="mt-3 block text-center text-xs text-gray-500">
        Você será direcionado ao WhatsApp com a mensagem pronta.
      </small>
    </form>
  );
}
