import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alicia Rodriguez",
      role: "Student",
      content:
        "Investing in courses at this e-learning platform gave a great change in my career. I am now a professional developer.",
    },
    {
      name: "Emily Chen",
      role: "Professional",
      content:
        "Experienced educators! The practical insights from the courses have been invaluable to my professional growth.",
    },
    {
      name: "James Jefferson",
      role: "Entrepreneur",
      content:
        "Highly recommended! The personalized guidance and comprehensive curriculum have transformed my business.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Student's Testimonials
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto">
            Hear from our students about their transformative learning experiences and success stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white flex items-center justify-center transition-all duration-200">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white flex items-center justify-center transition-all duration-200">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
