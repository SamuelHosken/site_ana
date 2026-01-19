export default function Footer() {
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="py-12 sm:py-10 px-4 md:px-6 border-b border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg sm:text-lg md:text-xl font-light mb-3 sm:mb-3">
            Seu imóvel pode fazer parte da nossa <span className="font-bodoni text-primary">seleção exclusiva</span>?
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-5 max-w-lg mx-auto text-sm sm:text-sm">
            Descubra se seu imóvel se encaixa no nosso portfólio e como podemos vender mais rápido, por mais valor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center">
            <button className="group px-6 sm:px-8 py-3 sm:py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 overflow-hidden text-sm sm:text-sm">
              <span className="relative block overflow-hidden h-5">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Quero vender meu imóvel
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Quero vender meu imóvel
                </span>
              </span>
            </button>
            <button className="group px-6 sm:px-8 py-3 sm:py-3 bg-transparent border border-gray-600 text-white font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300 text-sm sm:text-sm">
              Avaliação gratuita
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-8 sm:py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-center text-center md:text-left">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-3">
                <img
                  src="/Logo 1 Horizontal.svg"
                  alt="Later Nobilis"
                  className="h-8 sm:h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">Imobiliária Boutique</p>
              <p className="text-gray-500 text-sm mt-1.5">Brasília, DF - Brasil</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social / Contact */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm mb-2">Siga-nos</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 sm:py-4 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-center">
          <p className="text-gray-500 text-xs sm:text-xs">
            © {new Date().getFullYear()} Later Nobilis. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            A excelência mora nos detalhes.
          </p>
        </div>
      </div>
    </footer>
  );
}
