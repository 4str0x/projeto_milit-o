import { Button } from "@/components/ui/button";

export default function SportsSection() {
  const sports = [
    {
      name: "Basquete",
      emoji: "🏀",
      color: "from-orange-400 to-red-500",
      description: "Técnica, velocidade e precisão",
    },
    {
      name: "Futebol",
      emoji: "⚽",
      color: "from-green-400 to-emerald-500",
      description: "Passes, dribles e chutes",
    },
    {
      name: "Vôlei",
      emoji: "🏐",
      color: "from-yellow-400 to-orange-500",
      description: "Saques, bloqueios e ataques",
    },
    {
      name: "Corrida",
      emoji: "🏃",
      color: "from-blue-400 to-cyan-500",
      description: "Resistência e velocidade",
    },
    {
      name: "Natação",
      emoji: "🏊",
      color: "from-cyan-400 to-blue-500",
      description: "Técnicas e respiração",
    },
    {
      name: "Tênis",
      emoji: "🎾",
      color: "from-lime-400 to-green-500",
      description: "Saques e movimentação",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Esportes Disponíveis
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Escolha seu esporte favorito e comece a treinar com programas personalizados.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${sport.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{sport.emoji}</div>

              </div>

              <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
              <p className="text-white text-opacity-90 mb-6">{sport.description}</p>

              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 group-hover:scale-105 transition-transform">
                Explorar Treinos
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
