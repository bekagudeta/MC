import { Wrench, Users } from 'lucide-react';

export function Skills() {
  const technicalSkills = [
    "AutoCAD",
    "Abaqus", 
    "ETABS",
    "SAP2000",
    "Building Information Modeling (BIM)",
    "Structural Analysis",
    "Engineering Mechanics",
    "Structural Design",
    "Finite Element Analysis",
    "Open Source Software Operation"
  ];

  const professionalSkills = [
    "Engineering Principles",
    "Project Management",
    "Education Administration",
    "Supervise Educational Staff",
    "Performance Management",
    "Project Management",
    "Curriculum Standards",
    "Working with Others",
    "Teaching and Training",
    "Assist Students in Learning"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-center text-[#001722]">Core Competencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6BCFCB] to-[#FE580B] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#6BCFCB]/20 rounded-lg">
                  <Wrench className="text-[#084A48]" size={28} />
                </div>
                <h3 className="text-[#001722]">Technical Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#6BCFCB]/10 text-[#084A48] rounded-full text-sm font-medium border border-[#6BCFCB]/30 hover:bg-[#6BCFCB]/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FE580B]/20 hover:border-[#FE580B] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FE580B]/20 rounded-lg">
                  <Users className="text-[#FE580B]" size={28} />
                </div>
                <h3 className="text-[#001722]">Professional Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {professionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#FE580B]/10 text-[#FE580B] rounded-full text-sm font-medium border border-[#FE580B]/30 hover:bg-[#FE580B]/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
