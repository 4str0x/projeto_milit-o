import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Treino de Basquete - Técnica de Arremesso",
      description: "Aprenda as técnicas fundamentais de arremesso no basquete",
      src: "/optimized_WhatsApp Video 2025-11-18 at 21.45.02 (1).mp4",
      thumbnail: "🏀",
    },
    {
      id: 2,
      title: "Treino de Futebol - Controle de Bola",
      description: "Domine o controle de bola com exercícios práticos",
      src: "/optimized_WhatsApp Video 2025-11-18 at 21.45.02 (2).mp4",
      thumbnail: "⚽",
    },
    {
      id: 3,
      title: "Treino de Vôlei - Saque Flutuante",
      description: "Técnica avançada de saque flutuante no vôlei",
      src: "/optimized_WhatsApp Video 2025-11-18 at 21.45.02.mp4",
      thumbnail: "🏐",
    },
    {
      id: 4,
      title: "Corrida - Técnica de Respiração",
      description: "Melhore sua resistência com técnicas de respiração",
      src: "/optimized_WhatsApp Video 2025-11-18 at 21.45.03.mp4",
      thumbnail: "🏃",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vídeos de Treino
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Assista a vídeos de treino profissionais para aprimorar suas habilidades em diferentes esportes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Video Player */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-8">
            <div className="relative w-full aspect-video bg-gray-900 flex items-center justify-center group">
              {isPlaying === currentIndex ? (
                <video
                  key={currentIndex}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setIsPlaying(null)}
                >
                  <source src={currentVideo.src} type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              ) : (
                <>
                  {/* Thumbnail Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-8xl">
                    {currentVideo.thumbnail}
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(currentIndex)}
                    className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                </>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Video Info */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentVideo.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {currentVideo.description}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 aspect-video group ${
                  index === currentIndex
                    ? "ring-4 ring-red-600 scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* Thumbnail Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-4xl">
                  {video.thumbnail}
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                  <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <p className="text-white text-xs font-semibold line-clamp-1">
                    {video.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
