import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Later Nobilis | Imobiliária Boutique de Brasília",
  description: "Conheça a melhor imobiliária boutique de Brasília. Estratégias exclusivas para vender seu imóvel com o melhor valor.",
  icons: {
    icon: "/flavicon.png",
    apple: "/flavicon.png",
  },
  metadataBase: new URL("https://laternobilis.com"),
  openGraph: {
    title: "Later Nobilis | Imobiliária Boutique de Brasília",
    description: "Conheça a melhor imobiliária boutique de Brasília. Estratégias exclusivas para vender seu imóvel com o melhor valor.",
    url: "https://laternobilis.com",
    siteName: "Later Nobilis",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Later Nobilis — Imobiliária Boutique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Later Nobilis | Imobiliária Boutique de Brasília",
    description: "Conheça a melhor imobiliária boutique de Brasília.",
    images: ["/hero.jpg"],
  },
  other: {
    "theme-color": "#B45309",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} overflow-x-clip`}>
      <body className="antialiased overflow-x-clip">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
