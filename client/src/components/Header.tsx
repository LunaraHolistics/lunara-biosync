import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/manus-storage/lunara-logo_288528d1.png" 
            alt="Lunara" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-[#0F172A]">BioSync</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('localizacao')}
            className="text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium"
          >
            Localização
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-primary text-sm"
          >
            Agendar Análise
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-[#F0FDFA] rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-[#E2E8F0] py-4">
          <div className="container flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-left text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium py-2"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-left text-[#0F172A] hover:text-[#2DD4BF] transition-colors font-medium py-2"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-sm w-full"
            >
              Agendar Análise
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
