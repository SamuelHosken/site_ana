import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Later Nobilis",
  description: "Conheça a Later Nobilis, imobiliária boutique de Brasília. Excelência em cada detalhe, estratégia em cada movimento.",
  openGraph: {
    title: "Quem Somos | Later Nobilis",
    description: "Conheça a Later Nobilis, imobiliária boutique de Brasília.",
  },
};

export default function QuemSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
