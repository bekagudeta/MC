import { Award } from 'lucide-react';

const educationHistory = [
  {
    title: 'Master of Science in Structural Engineering',
    institution: 'Jimma University, Ethiopia',
    period: 'Oct 2017 - Feb 2020',
    gpa: '3.91 / 4.00',
    level: 'EQF Level 8',
    thesis: 'The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads',
    summary:
      'Advanced study in structural analysis, structural design, finite element modeling, and earthquake-resistant composite systems using Abaqus, ETABS, SAP2000, and BIM.',
    accent: 'from-[#6BCFCB]/10 to-[#084A48]/10',
  },
  {
    title: 'Bachelor of Science in Civil Engineering',
    institution: 'Jimma University, Ethiopia',
    period: 'Jun 2011 - Aug 2016',
    gpa: '3.74 / 4.00',
    level: 'EQF Level 8',
    thesis: 'Design and Analysis of basement plus ground plus six floor mixed use building',
    summary:
      'Comprehensive foundation in engineering mechanics, structural analysis, wind and earthquake load consideration, and sustainable design.',
    accent: 'from-[#6BCFCB]/10 to-[#084A48]/10',
  },
  {
    title: 'Higher Diploma Program in Teaching Education',
    institution: 'Haramaya University, Ethiopia',
    period: 'Oct 2020 - Oct 2021',
    level: 'EQF Level 7',
    summary:
      'Professional teaching qualification focused on instructional design, classroom leadership, and higher education pedagogy.',
    accent: 'from-[#FE580B]/10 to-[#084A48]/10',
  },
];

const certificationHighlights = [
  {
    title: 'Specification and BOQ Preparation Training',
    issuer: 'Ethiopian Association of Civil Engineers (EACE)',
    period: 'Dec 8-15, 2024',
    level: 'EQF 7',
    description:
      'Project documentation, quantity takeoff, specification writing, and cost estimation aligned with professional engineering standards.',
  },
  {
    title: 'Resilience Earthquake Safety and Design Training',
    issuer: 'Ethiopian Association of Civil Engineers (EACE)',
    period: 'Oct 8-15, 2024',
    level: 'EQF 7',
    description:
      'Structural safety, risk assessment, emergency planning, and sustainable retrofit design for earthquake-prone regions.',
  },
  {
    title: 'Civil and Hydraulics Laboratory Training',
    issuer: 'Arba-Minch University',
    period: 'Jun 8-21, 2021',
    level: 'EQF 7',
    description:
      'Experimental proficiency, data analysis, safety practices, and applied hydraulics laboratory techniques.',
  },
  {
    title: 'IELTS Training',
    issuer: 'Oda Bultum University',
    period: 'Oct 2024 - Jun 2025',
    level: 'EQF 7',
    description:
      'Focused language development to support international communication and scholarship opportunities.',
  },
];

export function Education() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F4FFFB] via-[#F9FEFD] to-[#FFF6ED]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-4">Education & Certification</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Academic Achievements Built for Leadership</h2>
          <p className="mt-4 text-[#084A48] max-w-3xl mx-auto">
            A curated record of graduate and undergraduate study, instructional qualifications, and professional trainings that support both engineering excellence and education leadership.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
          <div className="space-y-6">
            {educationHistory.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[28px] border border-[#6BCFCB]/15 shadow-xl transition-transform hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${item.accent} p-6`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/80">Academic milestone</p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#001722]">{item.title}</h3>
                    </div>
                    <div className="rounded-3xl bg-white/90 px-4 py-2 text-sm font-semibold text-[#084A48] shadow-sm">
                      {item.level}
                    </div>
                  </div>
                </div>
                <div className="space-y-5 bg-white/95 p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#084A48]">
                    <span className="rounded-full bg-[#6BCFCB]/10 px-3 py-1 text-[#084A48] font-medium">{item.institution}</span>
                    <span className="font-semibold text-[#FE580B]">{item.period}</span>
                  </div>
                  {item.gpa ? (
                    <div className="flex flex-wrap gap-3 text-sm text-[#084A48]">
                      <span className="rounded-full border border-[#6BCFCB]/20 px-3 py-2 bg-[#F5FEFC]">GPA: {item.gpa}</span>
                    </div>
                  ) : null}
                  {item.thesis ? (
                    <p className="text-[#084A48] leading-relaxed">
                      <strong>Thesis:</strong> {item.thesis}
                    </p>
                  ) : null}
                  <p className="text-[#084A48] leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#6BCFCB]/20 bg-[#F8FEFD] p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-3xl bg-[#6BCFCB]/10 p-3">
                  <Award className="text-[#084A48]" size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Certifications</p>
                  <h3 className="text-2xl font-semibold text-[#001722]">Professional training highlights</h3>
                </div>
              </div>

              <div className="space-y-5">
                {certificationHighlights.map((cert, index) => (
                  <div key={index} className="rounded-3xl border border-[#6BCFCB]/10 bg-white/95 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-[#001722] font-semibold">{cert.title}</h4>
                        <p className="text-sm text-[#084A48]">{cert.issuer}</p>
                      </div>
                      <span className="rounded-full bg-[#FE580B]/10 px-3 py-1 text-sm font-semibold text-[#FE580B]">{cert.level}</span>
                    </div>
                    <p className="mt-3 text-sm text-[#084A48]">{cert.description}</p>
                    <p className="mt-3 text-sm font-medium text-[#084A48]">{cert.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#084A48]/10 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/10 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-[#001722] mb-4">Key Learning Outcomes</h3>
              <ul className="space-y-3 text-[#084A48]">
                <li className="flex gap-3">
                  <span className="mt-1 text-[#FE580B]">•</span>
                  <span>Structural engineering techniques for seismic design, composite systems, and advanced modeling.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-[#FE580B]">•</span>
                  <span>Instructional design, curriculum development, and higher education leadership skills.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-[#FE580B]">•</span>
                  <span>Professional documentation, laboratory testing, and multidisciplinary collaboration.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
