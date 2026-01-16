import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Later Nobilis | Imobiliária Boutique de Brasília",
  description: "Conheça a melhor imobiliária boutique de Brasília. Estratégias exclusivas para vender seu imóvel com o melhor valor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
