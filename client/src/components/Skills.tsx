export function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
    { category: "Frontend", items: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "Flask", "Spring Boot"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Google Cloud", "CI/CD"] }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-[#084A48]">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-[#6BCFCB]/20 text-[#001722] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
