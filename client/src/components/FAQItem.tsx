import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen = false,
  onToggle,
}: FAQItemProps) {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = () => {
    setOpen(!open);
    onToggle?.();
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      <button
        onClick={handleToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
            open ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
