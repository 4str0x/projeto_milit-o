import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function TeacherSection() {
  const perks = [
    "Global Respect",
    "Elevate Your Experience",
    "Creative Freedom",
    "Innovative Teaching Tools",
    "Professional Development",
    "Recognition And Reputation",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              If You Are A Certified Teacher Then Become
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              This is an opportunity to inspire and educate by joining our team of instructors. If you're a certified teacher, you can share your expertise with students worldwide and share your expertise with students.
            </p>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{perk}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 mt-6">
              Become an Instructor
            </Button>
          </div>

          {/* Right - Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Circular image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-7xl mb-2">👩‍🏫</div>
                  <p className="text-sm font-semibold">Teacher Image</p>
                </div>
              </div>

              {/* Decorative dashed border */}
              <div className="absolute inset-0 border-4 border-dashed border-purple-300 rounded-full -m-4 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
