import { GraduationCap, Building, Users } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: GraduationCap,
      title: "University Lecturer in Engineering",
      organization: "Salale University",
      location: "Fiche, Ethiopia",
      period: "Sep 2025 - Present",
      achievements: [
        "Course Preparation: Designing course syllabi, creating lecture plans, and developing teaching materials such as presentations, handouts, and case studies",
        "Lecturing: Delivering lectures to students in structural analysis, Engineering Mechanics, Strength of materials, Theory of structure, Reinforced concrete, structural design, Steel and timber, bridge courses",
        "Assessment: Designing, administering, and grading exams, essays, and assignments to evaluate student learning with constructive feedback",
        "Conducting Research: Planning and executing research projects, collecting and analyzing data, and interpreting results in structural engineering",
        "Publishing: Writing and submitting research papers to academic journals and presenting findings at conferences",
        "Mentorship: Mentoring junior staff and new lecturers, providing guidance and support",
        "Outreach: Representing the university at external events and engaging with the wider community",
        "Professional Development: Attending conferences, workshops, and training sessions to stay current in the field"
      ]
    },
    {
      icon: Building,
      title: "Construction Design Engineer",
      organization: "Oda Bultum University Project Office",
      location: "Chiro, Ethiopia",
      period: "Sep 2021 - Aug 2025",
      achievements: [
        "Contract administration and bid process: Acting as evaluation committee member in construction project office, involved in all phases including bid document preparation, bid flotation, evaluation, and final contract award",
        "On-site construction support: Providing direct assistance for on-site construction work, specifically with landscaping site work and monitoring progress against construction schedules",
        "Property valuation and compensation: Working as confirmatory and re-evaluation property valuation specialist with committee for compensation payments",
        "Construction completion verification: Coordinating and ensuring successful completion of all required final inspections (building code, fire marshal) and commissioning tests for systems",
        "Project coordination: Formalizing facility completion dates and ensuring readiness for intended use"
      ]
    },
    {
      icon: Users,
      title: "Head of Academic Department",
      organization: "Oda Bultum University",
      location: "Chiro, Ethiopia",
      period: "Jun 2021 - Sep 2025",
      achievements: [
        "Strategic Planning: Setting department goals and objectives in line with institutional mission",
        "Curriculum Development: Overseeing creation, revision, and assessment of academic programs and courses",
        "Faculty Development: Fostering professional growth among faculty members through teaching, research, and service activities support",
        "Mentoring: Providing guidance and support to junior faculty and staff",
        "Personnel Management: Handling faculty and staff hiring, evaluations, and promotions",
        "Scheduling: Creating course schedules and assigning faculty teaching loads",
        "Technical Direction: Setting long-term technical direction aligning projects with organizational priorities",
        "Technology Integration: Introducing new technologies (BIM, automation, sustainable design) and handling design challenges"
      ]
    },
    {
      icon: GraduationCap,
      title: "University Engineering Lecturer",
      organization: "Oda Bultum University",
      location: "Chiro, Ethiopia",
      period: "Feb 2020 - Jun 2021",
      achievements: [
        "Delivering lectures in structural analysis, Engineering Mechanics, Strength of materials, Theory of structure, Reinforced concrete, structural design, Steel and timber, bridge courses",
        "Breaking down complex engineering concepts into practical applications students can use, not just memorize",
        "Designing lesson plans, course outlines, and learning objectives",
        "Creating lecture notes, slides, assignments, and lab manuals",
        "Holding office hours and answering questions, guiding students on projects, internships, and career paths",
        "Conducting research in structural systems, materials, transportation, and publishing papers in journals",
        "Applying for grants and funding to support research initiatives"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational Researcher",
      organization: "Jimma University",
      location: "Jimma, Ethiopia",
      period: "Oct 2017 - Jan 2020",
      achievements: [
        "Conducting research in structural engineering field to broaden knowledge of education processes and systems",
        "Studying how educational processes, systems, and individuals (teachers and learners) work in engineering education",
        "Identifying areas of improvement and developing plans for implementation of innovations in engineering education",
        "Contributing to advancement of structural engineering education methodologies and practices"
      ]
    },
    {
      icon: GraduationCap,
      title: "University Engineering Lecturer",
      organization: "Oda Bultum University",
      location: "Chiro, Ethiopia",
      period: "Oct 2016 - Oct 2017",
      achievements: [
        "Instruction: Leading tutorials, discussion sessions, and laboratory classes as assistant lecturer",
        "Course Delivery: Teaching structural analysis, Engineering Mechanics, Strength of materials, Theory of structure, Reinforced concrete, structural design, Steel and timber, bridge courses",
        "Assessment: Assisting in creating, administering, and grading assignments, quizzes, and exams",
        "Material Development: Creating lecture notes, slides, assignments, and lab manuals",
        "Mentorship: Serving as primary point of contact for students, offering academic advice and guidance on course materials",
        "Concept Simplification: Breaking down complex engineering concepts into practical applications for student understanding"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-center text-[#001722]">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6BCFCB] to-[#FE580B] mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BCFCB] via-[#084A48] to-[#6BCFCB] hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-[#6BCFCB] to-[#084A48] rounded-full hidden md:flex items-center justify-center -translate-x-[19px] shadow-lg">
                    <exp.icon className="text-white" size={18} />
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl border-2 border-[#6BCFCB]/20 hover:border-[#6BCFCB] hover:shadow-xl transition-all">
                    <div className="mb-4">
                      <h3 className="text-[#001722] mb-2">{exp.title}</h3>
                      <p className="text-[#FE580B] font-semibold mb-1">{exp.organization}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <span className="text-[#6BCFCB] mt-1.5 flex-shrink-0 text-xl">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

