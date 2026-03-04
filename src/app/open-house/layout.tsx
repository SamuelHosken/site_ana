import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open House Exclusivo | Later Nobilis",
  description: "Eventos imobiliários que transformam visitas em experiências de encantamento. Conheça o Open House da Later Nobilis.",
  openGraph: {
    title: "Open House Exclusivo | Later Nobilis",
    description: "Eventos imobiliários que transformam visitas em experiências de encantamento.",
  },
};

export default function OpenHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
