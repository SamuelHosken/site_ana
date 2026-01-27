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
      const headerHeight = 56;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setIsMobileMenuOpen(false);
  };

  const [isInovacaoOpen, setIsInovacaoOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/quem-somos" },
    {
      label: "Inovação Imobiliária",
      href: "#servicos",
      hasDropdown: true,
      dropdownItems: [
        { label: "Home Staging", href: "/home-staging" },
        { label: "Open House", href: "/open-house" },
      ]
    },
    { label: "Internacionalização", href: "/international-flip" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2.5"
            : "bg-transparent py-3"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="group relative"
          >
            <img
              src="/Logo horizontal com cor.svg?v=2"
              alt="Later Nobilis"
              className="h-4 md:h-5 w-auto transition-all duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsInovacaoOpen(true)}
                  onMouseLeave={() => setIsInovacaoOpen(false)}
                >
                  <button
                    className="relative text-xs tracking-wide transition-colors duration-300 group/link text-gray-600 hover:text-primary flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${isInovacaoOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover/link:w-full transition-all duration-300 bg-primary" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-stone-100 py-2 min-w-[160px] transition-all duration-200 ${
                      isInovacaoOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.dropdownItems?.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        onClick={() => setIsInovacaoOpen(false)}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-primary hover:bg-stone-50 transition-colors"
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      scrollToSection(e, item.href);
                    }
                  }}
                  className="relative text-xs tracking-wide transition-colors duration-300 group/link text-gray-600 hover:text-primary"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover/link:w-full transition-all duration-300 bg-primary" />
                </a>
              )
            ))}

            {/* CTA Button */}
            <a
              href="/#contato"
              className="relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-md overflow-hidden transition-all duration-300 group/btn border-2 border-primary text-primary hover:text-white"
            >
              {/* Background fill on hover */}
              <span className="absolute inset-0 w-0 group-hover/btn:w-full transition-all duration-300 ease-out bg-primary" />
              <span className="relative flex items-center gap-1.5">
                Agendar
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1"
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
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1"
            aria-label="Menu"
          >
            <span
              className={`w-4.5 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-4.5 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-4.5 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
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
          className={`absolute top-0 right-0 h-full w-64 max-w-[80vw] bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-16 pb-5 px-5">
            {/* Nav Items */}
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.label} className="border-b border-stone-100">
                    <button
                      onClick={() => setIsInovacaoOpen(!isInovacaoOpen)}
                      className="w-full py-2.5 transition-all duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center justify-between text-gray-800 text-sm">
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 text-primary transition-transform duration-300 ${isInovacaoOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isInovacaoOpen ? 'max-h-40' : 'max-h-0'}`}>
                      {item.dropdownItems?.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 pl-4 text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        scrollToSection(e, item.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="group py-2.5 border-b border-stone-100 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center justify-between text-gray-800 text-sm">
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                )
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="/#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:bg-primary/90 text-xs"
              >
                Agendar Avaliação
                <svg
                  className="w-3.5 h-3.5"
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
              <div className="mt-5 pt-3 border-t border-stone-100 text-center">
                <img
                  src="/Tipografia Logo.svg"
                  alt="Later Nobilis"
                  className="h-3.5 w-auto mx-auto brightness-0 opacity-40"
                />
                <p className="text-gray-400 text-[10px] mt-1">
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
