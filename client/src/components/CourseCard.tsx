import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  price: string;
  lessons: number;
  students: number;
  instructor: string;
  image?: string;
  badge?: string;
}

export default function CourseCard({
  title,
  price,
  lessons,
  students,
  instructor,
  image,
  badge,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl">💻</div>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-3 text-lg line-clamp-2">{title}</h3>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} Students</span>
          </div>
        </div>

        {/* Price and Instructor */}
        <div className="border-t border-gray-200 pt-4 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-gray-900">{price}</span>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {instructor.charAt(0)}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{instructor}</p>
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2">
            Manage
          </Button>
        </div>
      </div>
    </div>
  );
}
