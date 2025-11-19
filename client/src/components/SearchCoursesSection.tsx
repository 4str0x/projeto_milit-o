import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchCoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Search Courses
        </h2>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-16">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for over 50+ courses"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3">
            Search
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Grid */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Grid of 4 images placeholder */}
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👩‍🎓</span>
                </div>
                <div className="bg-gradient-to-br from-orange-300 to-yellow-300 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <div className="bg-gradient-to-br from-yellow-300 to-orange-300 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <div className="bg-gradient-to-br from-blue-300 to-purple-300 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👨‍🎨</span>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-purple-300 rounded-3xl opacity-30 -m-2"></div>
            </div>
          </div>

          {/* Right - Benefits List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                <span className="text-purple-500">Benefits</span> From Our Online Learning
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "🎓",
                  title: "Online Degrees",
                  description:
                    "Earn accredited degrees from the comfort of your home, spending more time on your learning and elevate your expertise in unique ways.",
                },
                {
                  icon: "📚",
                  title: "Short Courses",
                  description:
                    "Enhance your skills with our concise and focused short courses designed for busy professionals.",
                },
                {
                  icon: "👨‍🏫",
                  title: "Training From Experts",
                  description:
                    "Immerse yourself in knowledge with industry experts guiding you through hands-on experience.",
                },
                {
                  icon: "🎬",
                  title: "1.5k+ Video Courses",
                  description:
                    "Explore our extensive library of video courses covering diverse topics and skill levels.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
