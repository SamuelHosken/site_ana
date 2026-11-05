// Contato e rastreamento da LP casa-qi7-lago-sul

declare global {
  interface Window {
    dataLayer?: object[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const WHATSAPP = "5561992683736";
export const PHONE_HREF = "tel:+5561992683736";

// Google Ads: preencha o ID (ex.: "AW-123456789") para carregar a tag,
// e o rótulo (ex.: "AW-123456789/AbCdEfGh") para registrar conversões.
export const ADS_ID = "";
export const ADS_CONVERSION = "";

export const MSG_VISITA = "Olá! Vi o anúncio da casa na QI 7 do Lago Sul e gostaria de agendar uma visita.";
export const MSG_INFO = "Olá! Vi o anúncio da casa na QI 7 do Lago Sul e gostaria de mais informações.";

export const waUrl = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export function track(event: string, data: object = {}) {
  window.dataLayer?.push({ event, ...data });
}

export function trackLead(kind: "whatsapp" | "ligacao" | "formulario") {
  if (ADS_CONVERSION) window.gtag?.("event", "conversion", { send_to: ADS_CONVERSION, event_label: kind });
  track("lead_" + kind);
}
