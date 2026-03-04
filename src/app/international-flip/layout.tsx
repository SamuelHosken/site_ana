import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Flip | Later Nobilis",
  description: "Transforme seu capital em uma oportunidade global. Investimentos imobiliários em Dubai e EUA com a Later Nobilis.",
  openGraph: {
    title: "International Flip | Later Nobilis",
    description: "Transforme seu capital em uma oportunidade global. Investimentos imobiliários internacionais.",
  },
};

export default function InternationalFlipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
