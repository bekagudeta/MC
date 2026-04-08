import { Wrench, Users } from 'lucide-react';

const technicalSkills = [
  'AutoCAD',
  'Abaqus',
  'ETABS',
  'SAP2000',
  'Building Information Modeling (BIM)',
  'Structural Analysis',
  'Engineering Mechanics',
  'Structural Design',
  'Finite Element Analysis',
  'Open Source Software Operation',
];

const professionalSkills = [
  'Engineering Principles',
  'Project Management',
  'Education Administration',
  'Supervise Educational Staff',
  'Performance Management',
  'Curriculum Standards',
  'Working with Others',
  'Teaching and Training',
  'Student Mentorship',
  'Collaborative Problem Solving',
];

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F4FFFD] via-[#EDF8F4] to-[#FFF6EE]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Technical & Professional Strengths</h2>
          <p className="mt-4 text-[#084A48] max-w-3xl mx-auto">
            Practical engineering tools and leadership skills that power research, teaching, and project delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#6BCFCB]/15 bg-gradient-to-br from-[#F5FFFC] via-[#E8FCF8] to-[#EAF7F5] p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-3xl bg-[#6BCFCB]/10 p-3">
                <Wrench className="text-[#084A48]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Technical Skills</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Engineering Technologies</h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center rounded-full border border-[#6BCFCB]/30 bg-[#F5FEFC] px-4 py-2 text-sm font-medium text-[#084A48] transition hover:bg-[#E8FCF8]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#FE580B]/15 bg-gradient-to-br from-[#FFF5E8] via-[#FFF1E3] to-[#FFF7EE] p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-3xl bg-[#FE580B]/10 p-3">
                <Users className="text-[#FE580B]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Professional Skills</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Leadership & Collaboration</h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {professionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center rounded-full border border-[#FE580B]/30 bg-[#FFF4EA] px-4 py-2 text-sm font-medium text-[#BE4A02] transition hover:bg-[#FFE6D3]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
