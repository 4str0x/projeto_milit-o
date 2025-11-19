import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚽</span>
            </div>
            <span className="font-bold text-lg text-gray-900">SportIA</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">
              Como funciona
            </a>
            <a href="#training" className="text-gray-700 hover:text-red-600 transition-colors">
              Treinamento
            </a>
            <a href="#sports" className="text-gray-700 hover:text-red-600 transition-colors">
              Esportes
            </a>
            <a href="#marketplace" className="text-gray-700 hover:text-red-600 transition-colors">
              Mercado
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
