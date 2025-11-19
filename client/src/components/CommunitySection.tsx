import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy } from "lucide-react";

export default function CommunitySection() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Conecte-se com Atletas",
      description: "Faça amizades com pessoas que compartilham sua paixão por esportes.",
    },
    {
      icon: MessageCircle,
      title: "Fóruns e Discussões",
      description: "Compartilhe dicas, técnicas e experiências com a comunidade.",
    },
    {
      icon: Trophy,
      title: "Desafios e Competições",
      description: "Participe de desafios e compita com atletas de todo o mundo.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comunidade Global de Atletas
            </h2>
            <p className="text-red-100 text-base md:text-lg mb-8 leading-relaxed">
              Faça parte de uma comunidade vibrante com mais de 50 mil atletas ativos. Compartilhe suas conquistas, aprenda com outros e cresça junto.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {communityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-red-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8">
              Junte-se à Comunidade
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}
