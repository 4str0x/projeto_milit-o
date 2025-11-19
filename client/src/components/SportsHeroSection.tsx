import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function SportsHeroSection() {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="inline w-4 h-4 mr-2" />
              Impulsionado por IA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu Guia Pessoal de Esportes
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Treine como um profissional, conecte-se com atletas do mundo todo e acesse os melhores equipamentos. SportIA é sua plataforma completa para dominar qualquer esporte.
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 text-base flex items-center justify-center gap-2">
                Começar Gratuitamente
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-8 text-base"
              >
                Assistir Demo
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Image with gradient overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-sports.jpg"
                  alt="Atleta jogando basquete"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                    🏀
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Basquete Pro</p>
                    <p className="text-sm text-gray-600">Treino com IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
