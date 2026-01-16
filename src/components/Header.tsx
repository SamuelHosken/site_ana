"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-[100rem] mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="group relative"
          >
            <img
              src="/Logo horizontal com cor.svg?v=2"
              alt="Later Nobilis"
              className="h-6 md:h-7 w-auto transition-all duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative text-sm tracking-wide transition-colors duration-300 group/link text-gray-600 hover:text-primary"
              >
                {item.label}
                {/* Linha animada no hover */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover/link:w-full transition-all duration-300 bg-primary" />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, "#contato")}
              className="relative px-5 py-2.5 text-sm font-medium tracking-wide rounded-lg overflow-hidden transition-all duration-300 group/btn border-2 border-primary text-primary hover:text-white"
            >
              {/* Background fill on hover */}
              <span className="absolute inset-0 w-0 group-hover/btn:w-full transition-all duration-300 ease-out bg-primary" />
              <span className="relative flex items-center gap-2">
                Agendar
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Nav Items */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group py-4 border-b border-stone-100 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center justify-between text-gray-800 text-lg">
                    {item.label}
                    <svg
                      className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="#contato"
                onClick={(e) => scrollToSection(e, "#contato")}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-medium transition-all duration-300 hover:bg-primary/90"
              >
                Agendar Avaliação
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Brand footer */}
              <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                <img
                  src="/Tipografia Logo.svg"
                  alt="Later Nobilis"
                  className="h-5 w-auto mx-auto brightness-0 opacity-40"
                />
                <p className="text-gray-400 text-xs mt-2">
                  Imobiliária Boutique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
