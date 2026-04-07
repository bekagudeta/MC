export function Education() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Specialized in Machine Learning and Artificial Intelligence with focus on healthcare applications."
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      period: "2016 - 2018",
      description: "Concentrated in Software Engineering and Data Science."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2012 - 2016",
      description: "Graduated with honors. Focus on Software Development and Algorithms."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-[#001722]/5 to-[#084A48]/5 p-8 rounded-lg border-l-4 border-[#FE580B]">
                <h3 className="text-xl font-semibold text-[#001722] mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-[#084A48] mb-2">{edu.institution}</h4>
                <p className="text-sm text-[#FE580B] mb-3">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
