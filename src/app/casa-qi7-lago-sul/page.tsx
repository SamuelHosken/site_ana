import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";
import { Libre_Bodoni } from "next/font/google";

import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Gallery from "@/components/casa-qi7/Gallery";
import HeroVideo from "@/components/casa-qi7/HeroVideo";
import LeadForm from "@/components/casa-qi7/LeadForm";
import LeadLink from "@/components/casa-qi7/LeadLink";
import VideoEmbed from "@/components/casa-qi7/VideoEmbed";
import { ADS_ID, MSG_INFO, MSG_VISITA } from "@/components/casa-qi7/lead";

// Fallback do Bodoni 72 (só existe em Apple). Sem isso Android/Windows caem no Georgia.
const bodoni = Libre_Bodoni({ subsets: ["latin"], style: "italic", variable: "--font-bodoni", display: "swap" });

const PAGE_URL = "https://laternobilis.com/casa-qi7-lago-sul";
const IMG = "/casa-qi7-lago-sul/img/";
const OG_TITLE = "Seu paraíso particular no Lago Sul – QI 7";
const OG_DESCRIPTION = "1.112,36 m² · 5 suítes · piscina com borda infinita · vista para o lago · mobiliada";
const OG_IMAGE = `${IMG}dia-07.jpg`;

export const metadata: Metadata = {
  title: "Casa à venda no Lago Sul – QI 7 | 5 suítes, 1.112 m² | Later Nobilis Boutique",
  description:
    "Casa de alto padrão à venda na SHIS QI 7, Lago Sul, Brasília. 1.112,36 m² construídos, 5 suítes, piscina aquecida com borda infinita, área gourmet com parrilla, automação completa e mobiliada. Agende sua visita com a Later Nobilis Boutique.",
  alternates: { canonical: "/casa-qi7-lago-sul" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Later Nobilis Boutique",
    url: "/casa-qi7-lago-sul",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "Piscina aquecida com borda infinita ao entardecer" }],
  },
  twitter: { card: "summary_large_image", title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
  other: { "theme-color": "#101828" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Casa à venda no Lago Sul – SHIS QI 7",
  description:
    "Casa de alto padrão com 1.112,36 m² construídos, 5 suítes, piscina aquecida com borda infinita, área gourmet, automação Sertec e climatização Daikin. Mobiliada.",
  url: PAGE_URL,
  image: [`https://laternobilis.com${OG_IMAGE}`],
  offers: {
    "@type": "Offer",
    price: 23000000,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    seller: { "@type": "RealEstateAgent", name: "Later Nobilis Boutique", url: "https://laternobilis.com/", telephone: "+55 61 99268-3736" },
  },
  about: {
    "@type": "SingleFamilyResidence",
    numberOfRooms: 5,
    numberOfBedrooms: 5,
    floorSize: { "@type": "QuantitativeValue", value: 1112.36, unitCode: "MTK" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "SHIS QI 7",
      addressLocality: "Lago Sul, Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
  },
};

const STATS = [
  ["1.112 m²", "área construída"],
  ["5", "suítes"],
  ["6", "vagas de garagem"],
  ["Borda infinita", "piscina aquecida"],
];

const CREDITS = [
  ["Arquitetura", "Larissa Dias"],
  ["Paisagismo", "Flávia Carvalho"],
  ["Execução", "Campolina Engenharia"],
  ["Mobiliário social", "Quadra"],
  ["Área gourmet", "Spazio e Franccino"],
  ["Marcenaria", "Keiko"],
  ["Automação", "Sertec"],
  ["Climatização", "Daikin"],
];

type Feature = {
  img: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  items: string[];
  reverse?: boolean;
  bg?: "dark" | "gray";
};

const FEATURES: Feature[] = [
  {
    img: "dia-16.jpg",
    alt: "Sala de estar integrada ao jardim",
    eyebrow: "Térreo · área social",
    title: <>Viver integrado <em>ao jardim</em></>,
    text: "Piso em travertino da Multipedras e esquadrias Talenttus do piso ao teto. A sala de estar se integra à sala de jantar e à varanda, com mobiliário assinado pela Quadra.",
    items: ["Sala de estar e jantar integradas", "Varanda coberta", "Escritório reservado", "Suíte de hóspedes", "Preparação para adega", "Espaço multiuso"],
  },
  {
    img: "dia-01.jpg",
    alt: "Área gourmet com ilha em granito e parrilla",
    eyebrow: "Área gourmet",
    title: <>Desenhada para <em>receber sem esforço</em></>,
    text: "Um espaço para o churrasco ao estilo argentino, com marcenaria Spazio e Franccino e equipamentos Eletromec.",
    items: ["Churrasqueira de parrilla", "Champanheira na pedra", "Ice maker", "Cervejeira", "Cooktop e forno Eletromec", "Geladeira de apoio"],
    reverse: true,
    bg: "dark",
  },
  {
    img: "dia-36.jpg",
    alt: "Suíte com piso de madeira e varanda",
    eyebrow: "Área íntima · 5 suítes",
    title: <>Descanso com <em>vista para o lago</em></>,
    text: "Piso em taco de madeira natural (Cumaru) da Sonotto, cortinas automatizadas e climatização Daikin em todas as suítes.",
    items: ["Suíte principal com varanda e vista para o lago", "3 suítes no superior com varanda contínua", "1 suíte no térreo para hóspedes", "Sala de estar e home theater", "Copa íntima no pavimento superior", "Banheiros em travertino"],
  },
  {
    img: "dia-04.jpg",
    alt: "Fireplace circular no jardim ao lado da piscina",
    eyebrow: "Lazer externo",
    title: <>Um resort <em>no seu quintal</em></>,
    text: "Paisagismo de Flávia Carvalho envolvendo piscina, fogueira e redário em um jardim amplo e iluminado.",
    items: ["Piscina aquecida com borda infinita", "Prainha", "Deck", "Fireplace", "Redário", "Jardim com iluminação cênica"],
    reverse: true,
    bg: "gray",
  },
];

const SPECS = [
  {
    title: "Cozinha principal",
    items: ["Ilha em granito São Gabriel com 8 lugares", "Torre quente", "Forno elétrico e a gás Eletromec", "Micro-ondas embutido e cooktop Eletromec", "2 geladeiras", "Cuba dupla, lava-louças e filtro"],
  },
  {
    title: "Tecnologia e conforto",
    items: ["Automação Sertec: iluminação, cortinas e clima", "Controle por voz via Alexa", "Climatização Daikin em todos os ambientes", "Preparação para carregador de carro elétrico", "Marcenaria planejada Keiko em toda a casa", "Casa mobiliada"],
  },
  {
    title: "Apoio e serviço",
    items: ["Garagem para 6 veículos (3 soltas e cobertas)", "Dependência completa de serviço", "Área de passar roupa", "Corredor de serviço independente", "2 depósitos (garagem e jardim)", "Copa íntima com frigobar, micro-ondas, filtro e pia"],
  },
];

const wrap = "mx-auto max-w-6xl px-5 md:px-6";
const section = "py-18 lg:py-24";
const h3 = "text-xl font-medium text-gray-900 [&_em]:font-bodoni [&_em]:font-normal [&_em]:text-primary";
// Botão = base + tamanho + cor (tamanho separado para não conflitar classes de padding/fonte)
const btn =
  "inline-flex items-center justify-center gap-2.5 rounded-full border leading-none font-medium tracking-[0.08em] uppercase transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const lg = "px-7 py-4 text-[0.8rem]";
const sm = "px-2.5 py-3.5 text-xs";
const white = "border-transparent bg-white text-gray-900 hover:bg-gray-100";
const ghost = "border-white/75 text-white hover:bg-white/10";
const navy = "border-transparent bg-gray-900 text-white hover:bg-gray-800";
const outline = "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white";
const wa = "border-transparent bg-whatsapp text-white hover:bg-whatsapp-dark";

export default function CasaQi7LagoSul() {
  return (
    <main className={`${bodoni.variable} leading-[1.65]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      {ADS_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
          <Script id="gtag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}
          </Script>
        </>
      )}

      {/* Topo */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className={`${wrap} flex h-17 items-center justify-between`}>
          <a href="https://laternobilis.com/" aria-label="Later Nobilis Boutique – página inicial">
            <Image src="/Logo horizontal com cor.svg" alt="Later Nobilis Boutique" width={175} height={22} className="h-[22px] w-auto" />
          </a>
          <LeadLink msg={MSG_VISITA} className={`${btn} ${navy} px-4.5 py-3 text-xs max-sm:hidden`}>
            <WhatsAppIcon />
            Agendar visita
          </LeadLink>
        </div>
      </header>

      {/* Hero */}
      <section className="px-2.5 pt-2.5 sm:px-4 sm:pt-4">
        <div className="relative mx-auto flex max-w-[1400px] items-center justify-center overflow-hidden rounded-[20px] px-5 pt-18 pb-20 text-center text-white sm:min-h-[min(88svh,820px)] sm:px-6 sm:pt-24 sm:pb-24">
          <Image
            src={OG_IMAGE}
            alt="Piscina aquecida com borda infinita ao entardecer"
            fill
            preload
            fetchPriority="high"
            sizes="(min-width: 1432px) 1400px, 100vw"
            className="object-cover"
          />
          <HeroVideo />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/45 via-gray-900/35 to-gray-900/70" />

          <div className="relative max-w-[780px] [text-shadow:0_1px_16px_rgb(0_0_0/0.35)]">
            <p className="text-xs font-medium tracking-[0.12em] text-orange-100 uppercase">SHIS QI 7 · Lago Sul · Brasília</p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] leading-tight font-normal tracking-[0.01em] uppercase">
              Seu paraíso particular{" "}
              <em className="mt-1 block font-bodoni text-[1.1em] normal-case">no Lago Sul</em>
            </h1>
            <hr className="mx-auto mt-5 mb-7 h-px w-16 border-0 bg-white/70" />
            <p className="mx-auto max-w-[52ch] text-base opacity-95 lg:text-lg">
              1.112,36 m² de área construída, 5 suítes, vista para o lago e projeto assinado. Entregue mobiliada.
            </p>
            <p className="mt-5.5 font-bodoni text-[clamp(1.7rem,3vw,2.3rem)]">
              <span className="mb-0.5 block font-sans text-xs tracking-[0.2em] uppercase not-italic opacity-85">Valor de venda</span>
              R$ 23.000.000
            </p>
            <div className="mt-7.5 flex flex-wrap justify-center gap-3">
              <LeadLink msg={MSG_VISITA} className={`${btn} ${lg} ${white} max-sm:w-full`}>
                <WhatsAppIcon />
                Agendar visita
              </LeadLink>
              <a href="#fotos" className={`${btn} ${lg} ${ghost} max-sm:w-full`}>
                Ver fotos &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section aria-label="Destaques" className="pt-14">
        <div className={wrap}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-gray-200 bg-gray-200 lg:grid-cols-4">
            {STATS.map(([value, label]) => (
              <li key={label} className="bg-white px-4 py-7.5 text-center">
                <strong className="block font-bodoni text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1] font-normal text-primary">{value}</strong>
                <span className="mt-2 block text-xs tracking-[0.12em] text-gray-500 uppercase">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro */}
      <section className={section}>
        <div className={`${wrap} grid items-start gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-18`}>
          <ScrollReveal>
            <Heading eyebrow="A casa">
              Pensada nos mínimos detalhes por quem <em>se imaginou morando aqui</em>
            </Heading>
            <p className="mb-4 text-[1.05rem]">
              Uma casa em uma das melhores quadras do Lago Sul, onde arquitetura, paisagismo, materiais e localização trabalham juntos para criar algo raro.
            </p>
            <p className="text-[1.05rem]">
              Muito travertino, madeira natural e uma automação sem igual, em ambientes amplos e integrados que se abrem para o jardim, a piscina e a vista.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <aside className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-9">
              <h3 className={`${h3} mb-4.5`}>
                Assinaturas do <em>projeto</em>
              </h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-[0.95rem]">
                {CREDITS.map(([role, name]) => (
                  <div key={role} className="contents">
                    <dt className="text-gray-500">{role}</dt>
                    <dd className="font-medium text-gray-900">{name}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Galeria */}
      <section id="fotos" className={`${section} scroll-mt-17 bg-neutral-50`}>
        <div className={wrap}>
          <header className="mb-9 flex flex-wrap items-end justify-between gap-6 [&_hr]:mb-0">
            <Heading eyebrow="Galeria">
              Conheça <em>cada ambiente</em>
            </Heading>
            <a href="#video" className={`${btn} ${lg} ${outline}`}>
              Assistir ao vídeo
            </a>
          </header>
          <Gallery />
        </div>
      </section>

      {/* Vídeo */}
      <section id="video" className={`${section} scroll-mt-17`}>
        <div className={wrap}>
          <Heading eyebrow="Tour em vídeo" center>
            Percorra a casa <em>sem sair daí</em>
          </Heading>
          <VideoEmbed id="6C7GX1uDbEs" title="Tour completo pela casa na QI 7 do Lago Sul" poster={`${IMG}dia-16.jpg`} label="Assistir ao tour completo" />
          <p className="mt-12 mb-5 text-center text-xs font-medium tracking-[0.12em] text-primary uppercase">Destaques em vídeo curto</p>
          <div className="flex justify-center gap-4">
            <VideoEmbed id="r3TH2uvbwyY" title="Destaques da casa na QI 7 do Lago Sul" poster={`${IMG}noite-04.jpg`} short />
            <VideoEmbed id="3aVGHdXONwo" title="Destaques da casa na QI 7 do Lago Sul" poster={`${IMG}dia-04.jpg`} short />
          </div>
        </div>
      </section>

      {/* Ambientes */}
      {FEATURES.map((f) => {
        const dark = f.bg === "dark";
        return (
          <section key={f.img} className={`${section} ${dark ? "bg-gray-900 text-white" : f.bg === "gray" ? "bg-neutral-50" : ""}`}>
            <div className={`${wrap} grid items-center gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-16`}>
              <ScrollReveal animation="reveal-scale" className={f.reverse ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gray-100">
                  <Image src={IMG + f.img} alt={f.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Heading eyebrow={f.eyebrow} tone={dark ? "dark" : "light"}>
                  {f.title}
                </Heading>
                <p className={`mb-5 ${dark ? "text-gray-300" : ""}`}>{f.text}</p>
                <ul className="gap-7 sm:columns-2">
                  {f.items.map((item) => (
                    <li
                      key={item}
                      className={`relative break-inside-avoid border-b py-2.5 pl-5 text-[0.95rem] before:absolute before:top-[19px] before:left-0 before:h-px before:w-2 ${
                        dark ? "border-white/10 text-gray-200 before:bg-primary-light" : "border-gray-200 before:bg-primary"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* História */}
      <section className="p-2.5 sm:p-4">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[20px] px-5 py-22 text-center text-white sm:py-32">
          <Image src={`${IMG}noite-04.jpg`} alt="" fill sizes="(min-width: 1432px) 1400px, 100vw" className="object-cover brightness-[.45]" />
          <ScrollReveal className="relative mx-auto max-w-[780px]">
            <Heading eyebrow="Se imagine aqui" tone="photo" center>
              Mais um dia para colecionar <em>nas memórias</em>
            </Heading>
            <div className="space-y-4.5 text-[1.08rem] text-gray-100">
              <p>Chamar os amigos para se reunir ao redor da fogueira, ouvindo música e conversando até as brasas esfriarem sob o céu estrelado de Brasília.</p>
              <p>Acordar com o sol raiando, ir para a beira da piscina e ouvir a campainha porque o churrasco já está prestes a começar.</p>
              <p>Deitar na rede vendo as nuvens até os olhos pesarem.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ficha técnica */}
      <section className={section}>
        <div className={wrap}>
          <Heading eyebrow="Ficha técnica" center>
            Tudo o que <em>a casa entrega</em>
          </Heading>
          <div className="grid gap-5 lg:grid-cols-3">
            {SPECS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                  <h3 className={`${h3} mb-3.5`}>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item} className="border-b border-gray-100 py-2.5 text-[0.95rem] last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className={`${section} bg-neutral-50`}>
        <div className={`${wrap} grid items-center gap-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-14`}>
          <ScrollReveal>
            <Heading eyebrow="Localização">
              QI 7 do <em>Lago Sul</em>
            </Heading>
            <p className="mb-4 text-[1.05rem]">
              Um dos endereços mais sólidos e cobiçados de Brasília, de oferta limitada. Entre o lago, o canto dos passarinhos e a arquitetura autoral.
            </p>
            <p className="mb-4 text-[1.05rem]">
              Endereço consolidado, seguro e patrimonialmente sólido: um ativo raro em uma das regiões mais desejadas da cidade.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=SHIS+QI+7+Lago+Sul+Bras%C3%ADlia+DF"
              target="_blank"
              rel="noopener"
              className={`${btn} ${lg} ${outline} mt-2`}
            >
              Ver a região no mapa &rarr;
            </a>
          </ScrollReveal>
          <ScrollReveal animation="reveal-scale" delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-200">
              <Image src={`${IMG}drone-01.jpg`} alt="Vista aérea do Lago Sul e do Lago Paranoá" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className={`${section} scroll-mt-17 bg-gray-900 text-white`}>
        <div className={`${wrap} grid items-center gap-9 lg:grid-cols-2 lg:gap-18`}>
          <div>
            <Heading eyebrow="Agende sua visita" tone="dark" big>
              Se imaginou <em>aqui?</em>
            </Heading>
            <p className="mb-3 text-gray-300">
              Uma casa para quem já conquistou muito e agora escolhe viver melhor. Venha conhecer cada detalhe desse paraíso particular.
            </p>
            <p className="mt-1.5 mb-1 font-bodoni text-[1.7rem]">R$ 23.000.000</p>
            <LeadLink className="mt-1.5 inline-block text-2xl font-light text-white no-underline hover:text-primary-light">(61) 99268-3736</LeadLink>
            <p className="mt-2 text-sm text-gray-300">CRECI 32944</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-gray-900 pt-10 pb-28 text-sm text-gray-400">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-5`}>
          <a href="https://laternobilis.com/">
            <Image src="/Logo 1 Horizontal.svg" alt="Later Nobilis Boutique" width={160} height={20} className="h-5 w-auto" />
          </a>
          <span>Casa à venda · SHIS QI 7, Lago Sul, Brasília/DF · CRECI 32944</span>
          <span>Fotos reais do imóvel. Informações sujeitas a alteração sem aviso prévio.</span>
        </div>
      </footer>

      {/* WhatsApp flutuante (desktop) e barra fixa (celular) */}
      <LeadLink
        msg={MSG_INFO}
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-60 grid size-15 place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgb(0_0_0/0.25)] transition-transform hover:scale-107 max-sm:hidden"
      >
        <WhatsAppIcon className="size-7.5" />
      </LeadLink>
      <div className="fixed inset-x-0 bottom-0 z-60 flex gap-2.5 border-t border-gray-200 bg-white px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgb(16_24_40/0.08)] sm:hidden">
        <LeadLink className={`${btn} ${sm} ${outline} flex-1`}>Ligar</LeadLink>
        <LeadLink msg={MSG_VISITA} className={`${btn} ${sm} ${wa} flex-1`}>
          <WhatsAppIcon />
          WhatsApp
        </LeadLink>
      </div>
    </main>
  );
}

type HeadingProps = {
  eyebrow: string;
  children: ReactNode;
  center?: boolean;
  big?: boolean;
  /** light: fundo claro · dark: fundo azul-marinho · photo: sobre foto */
  tone?: "light" | "dark" | "photo";
};

function Heading({ eyebrow, children, center = false, big = false, tone = "light" }: HeadingProps) {
  const accent = { light: "text-primary", dark: "text-primary-light", photo: "text-orange-100" }[tone];
  const em = { light: "[&_em]:text-primary", dark: "[&_em]:text-primary-light", photo: "[&_em]:text-white" }[tone];
  const rule = { light: "bg-primary", dark: "bg-primary-light", photo: "bg-white/70" }[tone];

  return (
    <div className={center ? "text-center" : ""}>
      <p className={`text-xs font-medium tracking-[0.12em] uppercase ${accent}`}>{eyebrow}</p>
      <h2
        className={`mt-2 leading-tight font-normal [&_em]:font-bodoni ${em} ${tone === "light" ? "text-gray-900" : "text-white"} ${
          big ? "text-[clamp(2rem,4vw,3rem)]" : "text-[clamp(1.7rem,3.4vw,2.5rem)]"
        }`}
      >
        {children}
      </h2>
      <hr className={`mt-5 mb-7 h-px w-16 border-0 ${rule} ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
