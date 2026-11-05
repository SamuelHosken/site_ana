"use client";

import type { ComponentProps } from "react";

import { PHONE_HREF, trackLead, waUrl } from "./lead";

type Props = Omit<ComponentProps<"a">, "href"> & {
  /** Com mensagem: abre o WhatsApp com o texto pronto. Sem mensagem: liga. */
  msg?: string;
};

export default function LeadLink({ msg, ...props }: Props) {
  return msg ? (
    <a {...props} href={waUrl(msg)} target="_blank" rel="noopener" onClick={() => trackLead("whatsapp")} />
  ) : (
    <a {...props} href={PHONE_HREF} onClick={() => trackLead("ligacao")} />
  );
}
