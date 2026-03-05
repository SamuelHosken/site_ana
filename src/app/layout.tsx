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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
