import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Develop your skills in a new & unique way
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Explore a transformative and skill development course for online learning platform. Unique in a new realm of learning experiences and elevate your expertise in unique ways.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 text-base">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 text-base flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                What's there?
              </Button>
            </div>
          </div>

          {/* Right Hero Image Area */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            {/* Placeholder for hero image - would be replaced with actual image */}
            <div className="relative w-full h-full">
              {/* Decorative circles and elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Main circular background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>

                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl">👩‍💼</div>
                      <p className="text-sm mt-2">Hero Image</p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="text-center">
                      <p className="text-xs font-bold text-purple-600">50+</p>
                      <p className="text-xs text-gray-600">Online Courses</p>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -left-6 bg-white rounded-full p-3 shadow-lg">
                    <div className="text-center">
                      <p className="text-xs font-bold text-purple-600">1000+</p>
                      <p className="text-xs text-gray-600">Online Students</p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-1/4 -right-8 w-16 h-16 bg-pink-200 rounded-lg opacity-50 transform rotate-12"></div>
                  <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
