export function Achievements() {
  const achievements = [
    {
      title: "Best Research Paper Award",
      organization: "International AI Conference",
      year: "2023",
      description: "Awarded for outstanding research in machine learning applications."
    },
    {
      title: "Innovation Excellence Award",
      organization: "Tech Company",
      year: "2022",
      description: "Recognized for developing innovative solutions that improved system efficiency by 40%."
    },
    {
      title: "Academic Excellence Scholarship",
      organization: "University Name",
      year: "2018",
      description: "Full scholarship for outstanding academic performance in graduate studies."
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "Ongoing",
      description: "Active contributor to major open source projects with 1000+ stars."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">Achievements & Awards</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FE580B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🏆</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#001722] mb-1">{achievement.title}</h3>
                    <p className="text-sm text-[#084A48] mb-2">{achievement.organization} • {achievement.year}</p>
                    <p className="text-gray-700 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
