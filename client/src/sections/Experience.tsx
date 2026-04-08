import { GraduationCap, Building, Users } from 'lucide-react';

const experiences = [
  {
    icon: GraduationCap,
    title: 'University Lecturer in Engineering',
    organization: 'Salale University',
    location: 'Fiche, Ethiopia',
    period: 'Sep 2025 - Present',
    achievements: [
      'Course preparation and curriculum development for structural analysis, reinforced concrete and steel design courses.',
      'Delivering lectures, guided projects, and mentoring students across engineering mechanics and construction topics.',
      'Designing assessments, feedback systems, and practical exercises to improve student outcomes.',
      'Planning research projects, analyzing data, and publishing engineering findings.',
      'Leading outreach initiatives and building academic partnerships with local institutions.',
    ],
  },
  {
    icon: Building,
    title: 'Construction Design Engineer',
    organization: 'Oda Bultum University Project Office',
    location: 'Chiro, Ethiopia',
    period: 'Sep 2021 - Aug 2025',
    achievements: [
      'Coordinated bid preparation, evaluation, contract awards, and construction documentation.',
      'Provided on-site construction support and monitored progress against project schedules.',
      'Managed property valuation and compensation review for university development projects.',
      'Verified completion inspections and ensured compliance with safety and commissioning standards.',
      'Maintained cross-functional communication with architects, contractors, and stakeholders.',
    ],
  },
  {
    icon: Users,
    title: 'Head of Academic Department',
    organization: 'Oda Bultum University',
    location: 'Chiro, Ethiopia',
    period: 'Jun 2021 - Sep 2025',
    achievements: [
      'Defined department goals, academic strategy, and faculty development priorities.',
      'Oversaw curriculum creation, program assessment, and accreditation processes.',
      'Mentored faculty and coordinated professional development opportunities.',
      'Managed staff recruitment, evaluations, schedules, and performance reviews.',
      'Introduced new technologies and frameworks for teaching and research.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'University Engineering Lecturer',
    organization: 'Oda Bultum University',
    location: 'Chiro, Ethiopia',
    period: 'Feb 2020 - Jun 2021',
    achievements: [
      'Delivered lectures in structural analysis, mechanics, reinforced concrete, and steel design.',
      'Designed lesson plans, course materials, and laboratory activities for engineering students.',
      'Provided student mentorship, grading, and constructive feedback for academic improvement.',
      'Conducted research and contributed to publications in structural systems and materials.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Researcher',
    organization: 'Jimma University',
    location: 'Jimma, Ethiopia',
    period: 'Oct 2017 - Jan 2020',
    achievements: [
      'Collected and analyzed data on engineering education methods and student outcomes.',
      'Explored improvements in teaching techniques, systems, and organizational processes.',
      'Developed evidence-based recommendations for academic innovation.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'University Engineering Lecturer',
    organization: 'Oda Bultum University',
    location: 'Chiro, Ethiopia',
    period: 'Oct 2016 - Oct 2017',
    achievements: [
      'Led tutorials, lab sessions, and discussion groups as an assistant lecturer.',
      'Prepared course materials, lecture notes, and assessment tools.',
      'Supported students through academic advising and concept clarification.',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FFFC] via-[#EFF6F4] to-[#FFF5EA]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Career Highlights & Leadership Roles</h2>
          <p className="mt-4 text-[#084A48] max-w-3xl mx-auto">
            A high-impact career timeline showcasing academic leadership, engineering design, and research-driven teaching experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BCFCB] via-[#084A48] to-[#6BCFCB] hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-12">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#6BCFCB] to-[#084A48] hidden md:flex items-center justify-center shadow-lg -translate-x-[19px]">
                  <exp.icon className="text-white" size={18} />
                </div>

                <div className="rounded-[28px] border border-[#6BCFCB]/15 bg-[#F9FEFC] p-8 shadow-xl transition-transform hover:-translate-y-1">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#001722]">{exp.title}</h3>
                      <p className="mt-2 text-sm text-[#084A48] font-medium">{exp.organization}</p>
                    </div>
                    <div className="text-sm text-[#084A48]">
                      <span>{exp.location}</span>
                      <span className="mx-2 text-[#6BCFCB]">•</span>
                      <span className="font-semibold text-[#FE580B]">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-[#084A48]">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1 text-[#FE580B]">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

