import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚽</span>
              </div>
              <span className="font-bold text-lg">SportIA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sua plataforma completa de esportes com IA. Treine como um profissional, conecte-se com atletas e domine qualquer esporte.
            </p>
          </div>

          {/* Esportes */}
          <div>
            <h4 className="font-bold mb-4">Esportes</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#sports" className="hover:text-red-500 transition-colors">
                  Basquete
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-red-500 transition-colors">
                  Futebol
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-red-500 transition-colors">
                  Vôlei
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-red-500 transition-colors">
                  Corrida
                </a>
              </li>
            </ul>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-red-500 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-red-500 transition-colors">
                  Treinos
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-red-500 transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-red-500 transition-colors">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:erick.souza.efg@gmail.com" className="hover:text-red-500 transition-colors">
                  erick.souza.efg@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-400">Disponível 24/7 para suporte</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 SportIA. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
