export function Research() {
  const researchPapers = [
    {
      title: "Machine Learning Applications in Healthcare",
      journal: "International Journal of AI",
      year: "2023",
      description: "Research on applying deep learning models for medical diagnosis and treatment recommendations."
    },
    {
      title: "Scalable Web Architecture Patterns",
      conference: "Web Development Conference",
      year: "2022",
      description: "Analysis of modern architectural patterns for building scalable web applications."
    },
    {
      title: "Data Privacy in Cloud Computing",
      journal: "Journal of Cloud Computing",
      year: "2021",
      description: "Study on privacy-preserving techniques for cloud-based data storage and processing."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">Research Publications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-[#001722] mb-2">{paper.title}</h3>
                <p className="text-sm text-[#084A48] mb-2">
                  {paper.journal || paper.conference} • {paper.year}
                </p>
                <p className="text-gray-700 text-sm">{paper.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-[#084A48] hover:bg-[#0A5C5A] text-white rounded-lg font-medium transition-colors duration-200">
              View All Publications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
