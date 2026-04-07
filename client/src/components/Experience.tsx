export function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      title: "Data Scientist",
      company: "Analytics Firm",
      period: "2020 - 2022",
      description: "Developed machine learning models and data pipelines for predictive analytics."
    },
    {
      title: "Software Developer",
      company: "Startup Inc",
      period: "2018 - 2020",
      description: "Built full-stack applications and implemented CI/CD pipelines."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#084A48]"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className="absolute left-6 w-4 h-4 bg-[#FE580B] rounded-full border-4 border-white"></div>
                <div className="ml-16 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-[#001722]">{exp.title}</h3>
                  <h4 className="text-lg text-[#084A48] mb-2">{exp.company}</h4>
                  <p className="text-sm text-[#FE580B] mb-3">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
