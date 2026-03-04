import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Staging Profissional | Later Nobilis",
  description: "Transforme seu imóvel em um espaço visualmente irresistível com home staging profissional. Venda até 50% mais rápido.",
  openGraph: {
    title: "Home Staging Profissional | Later Nobilis",
    description: "Transforme seu imóvel em um espaço visualmente irresistível com home staging profissional.",
  },
};

export default function HomeStagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
