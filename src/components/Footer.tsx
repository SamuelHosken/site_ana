"use client";

import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Internacional", href: "/international-flip" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
            {/* Logo */}
            <ScrollReveal className="flex flex-col items-center md:items-start">
              <div className="mb-2">
                <img
                  src="/Logo 1 Horizontal.svg"
                  alt="Later Nobilis"
                  className="h-6 md:h-7 w-auto"
                />
              </div>
              <p className="text-gray-400 text-xs">Imobiliária Boutique</p>
              <p className="text-gray-500 text-[10px] md:text-xs mt-1 leading-relaxed">
                SGAN 601, Ed. Ion, Sala 2043 · Brasília
              </p>
            </ScrollReveal>

            {/* Links - grid on mobile */}
            <ScrollReveal delay={100} className="grid grid-cols-3 md:flex gap-3 md:gap-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-[11px] md:text-xs text-center md:text-right"
                >
                  {link.label}
                </a>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <p className="text-gray-500 text-[10px] md:text-xs">
            © {new Date().getFullYear()} Later Nobilis. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-[10px] md:text-xs hidden md:block">
            A excelência mora nos detalhes.
          </p>
        </div>
      </div>
    </footer>
  );
}
