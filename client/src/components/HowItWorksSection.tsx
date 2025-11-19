import { Brain, Users, Zap, MapPin } from "lucide-react";

export default function HowItWorksSection() {
  const features = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Treinos adaptados ao seu nível e objetivos com inteligência artificial avançada.",
    },
    {
      icon: Users,
      title: "Comunidade Global",
      description: "Conecte-se com atletas do mundo todo, compartilhe experiências e cresça junto.",
    },
    {
      icon: Zap,
      title: "Treinos Especializados",
      description: "Programas completos para vôlei, basquete, futebol e muito mais.",
    },
    {
      icon: MapPin,
      title: "Locais de Prática",
      description: "Encontre quadras, campos e pistas próximas a você em tempo real.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            SportIA oferece tudo que você precisa para evoluir no esporte, desde treinamento personalizado até uma comunidade vibrante.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
