import CourseCard from "./CourseCard";

export default function PopularCoursesSection() {
  const courses = [
    {
      title: "Web Design & Development",
      price: "$560.00",
      lessons: 23,
      students: 900,
      instructor: "M Morgan",
      badge: "NEW",
    },
    {
      title: "Wireframing & Prototyping",
      price: "$160.00",
      lessons: 8,
      students: 400,
      instructor: "C Carolyn",
      badge: "HOT",
    },
    {
      title: "Python For Data Science",
      price: "$432.00",
      lessons: 16,
      students: 280,
      instructor: "A Alex",
      badge: "TRENDING",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Popular Courses
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto">
            Discover our most sought-after courses, carefully curated to inspire our community of learners. Explore diverse topics and skill levels.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
}
