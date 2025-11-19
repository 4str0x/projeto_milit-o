import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function MarketplaceSection() {
  const products = [
    {
      name: "Bola de Basquete Pro",
      price: "R$ 189,90",
      image: "🏀",
      category: "Basquete",
    },
    {
      name: "Chuteira Futebol Elite",
      price: "R$ 349,90",
      image: "⚽",
      category: "Futebol",
    },
    {
      name: "Rede Vôlei Profissional",
      price: "R$ 599,90",
      image: "🏐",
      category: "Vôlei",
    },
    {
      name: "Tênis Corrida Performance",
      price: "R$ 429,90",
      image: "👟",
      category: "Corrida",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Marketplace de Equipamentos
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Encontre os melhores equipamentos esportivos com os melhores preços.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <span className="inline-block text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded mb-2">
                  {product.category}
                </span>

                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg">
            Ver Todos os Produtos →
          </Button>
        </div>
      </div>
    </section>
  );
}
