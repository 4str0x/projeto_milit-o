export default function SponsorsSection() {
  const sponsors = [
    { name: "duolingo", color: "bg-green-100" },
    { name: "magic leap", color: "bg-purple-100" },
    { name: "Microsoft", color: "bg-blue-100" },
    { name: "Codecov", color: "bg-red-100" },
    { name: "UX Testing", color: "bg-orange-100" },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={`${sponsor.color} px-4 md:px-6 py-3 rounded-lg flex items-center justify-center`}
            >
              <span className="font-semibold text-gray-700 text-sm md:text-base">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
