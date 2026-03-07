import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Later Nobilis",
  description: "Conheça a Later Nobilis, imobiliária boutique de Brasília. Excelência em cada detalhe, estratégia em cada movimento.",
  openGraph: {
    title: "Quem Somos | Later Nobilis",
    description: "Conheça a Later Nobilis, imobiliária boutique de Brasília.",
    images: [{ url: "/Ana-107.jpg", width: 1200, height: 630, alt: "Later Nobilis — Quem Somos" }],
  },
};

export default function QuemSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
