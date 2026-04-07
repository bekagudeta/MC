import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-center text-[#001722]">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6BCFCB] to-[#FE580B] mx-auto mb-16"></div>

          <div className="space-y-8 mb-16">
            <div className="bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/10 p-8 rounded-xl border-2 border-[#6BCFCB]/40 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6BCFCB]/30 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-[#084A48]" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#001722] mb-2">Master of Science in Structural Engineering</h3>
                  <p className="text-[#FE580B] font-semibold mb-3">Jimma University, Ethiopia</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="px-5 py-2 bg-white rounded-full border border-[#6BCFCB]/40 shadow-sm">
                      <span className="text-sm text-gray-600">Period: </span>
                      <span className="text-[#084A48] font-bold">Oct 2017 - Feb 2020</span>
                    </div>
                    <div className="px-5 py-2 bg-white rounded-full border border-[#6BCFCB]/40 shadow-sm">
                      <span className="text-sm text-gray-600">GPA: </span>
                      <span className="text-[#084A48] font-bold">3.91/4.00</span>
                    </div>
                    <div className="px-5 py-2 bg-[#FE580B] text-white rounded-full font-semibold shadow-sm">
                      <span className="text-sm">EQF Level 8</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Thesis:</strong> "The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads"
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced study in structural analysis, engineering mechanics, structural design, and finite element analysis. 
                    Expertise in CAD, Abaqus, ETABS, SAP2000, and BIM. Research focused on fully encased composite columns 
                    subjected to horizontal cyclic loads using finite element simulation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-[#6BCFCB]/40 transition-all shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-200 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-[#084A48]" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#001722] mb-2">Bachelor of Science in Civil Engineering</h3>
                  <p className="text-[#084A48] font-semibold mb-3">Jimma University, Ethiopia</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="px-5 py-2 bg-white rounded-full border border-gray-300 shadow-sm">
                      <span className="text-sm text-gray-600">Period: </span>
                      <span className="text-[#084A48] font-bold">Jun 2011 - Aug 2016</span>
                    </div>
                    <div className="px-5 py-2 bg-white rounded-full border border-gray-300 shadow-sm">
                      <span className="text-sm text-gray-600">GPA: </span>
                      <span className="text-[#084A48] font-bold">3.74/4.00</span>
                    </div>
                    <div className="px-5 py-2 bg-[#6BCFCB] text-[#001722] rounded-full font-semibold shadow-sm">
                      <span className="text-sm">EQF Level 8</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Thesis:</strong> "Design and Analysis of basement plus ground plus six floor mixed use building"
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive foundation in problem-solving, project management, mathematics and physics, 
                    structural analysis and design, wind and earthquake load considerations, and load combinations.
                    Recognized as Best Pre-Engineering Student Award winner in 2012.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-[#6BCFCB]/40 transition-all shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-200 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-[#084A48]" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#001722] mb-2">Higher Diploma Program in Teaching Education</h3>
                  <p className="text-[#084A48] font-semibold mb-3">Haramaya University, Ethiopia</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="px-5 py-2 bg-white rounded-full border border-gray-300 shadow-sm">
                      <span className="text-sm text-gray-600">Period: </span>
                      <span className="text-[#084A48] font-bold">Oct 2020 - Oct 2021</span>
                    </div>
                    <div className="px-5 py-2 bg-[#6BCFCB] text-[#001722] rounded-full font-semibold shadow-sm">
                      <span className="text-sm">EQF Level 7</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Professional teaching qualification focusing on instructional skills, professionalism and ethics, 
                    and educational leadership for higher education contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border-2 border-[#FE580B]/20 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#FE580B]" size={32} />
              <h3 className="text-[#001722]">Professional Certifications & Training</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">Specification and BOQ Preparation Training</h4>
                    <p className="text-sm text-[#FE580B] font-medium">Ethiopian Association of Civil Engineers (EACE)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Period:</strong> Dec 8-15, 2024 | <strong>Level:</strong> EQF 7
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Understanding project documentation, quantity takeoff, specification writing, 
                      cost estimation, and professional technical skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">Resilience Earthquake Safety and Design Training</h4>
                    <p className="text-sm text-[#FE580B] font-medium">Ethiopian Association of Civil Engineers (EACE)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Period:</strong> Oct 8-15, 2024 | <strong>Level:</strong> EQF 7
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Structural and non-structural safety, risk assessment, emergency planning, 
                      and design retrofitting techniques
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">Civil and Hydraulics Laboratory Training</h4>
                    <p className="text-sm text-[#FE580B] font-medium">Arba-Minch University</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Period:</strong> Jun 8-21, 2021 | <strong>Level:</strong> EQF 7
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Experimental proficiency, data analysis, safety management, 
                      and application of hydraulic principles
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">IELTS Training</h4>
                    <p className="text-sm text-[#FE580B] font-medium">Oda Bultum University</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Period:</strong> Oct 2024 - Jun 2025 | <strong>Level:</strong> EQF 7
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Enhancing classroom English proficiency and increasing scholarship opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">Language Proficiency</h4>
                    <p className="text-sm text-[#084A48] font-medium">Multi-lingual Capabilities</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Oromo:</strong> Mother tongue<br/>
                      <strong>English:</strong> C1 Proficient (Listening, Reading, Writing), B2 Independent (Speaking)<br/>
                      <strong>Amharic:</strong> C2 Proficient (Listening, Reading, Speaking), C1 Proficient (Writing)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BCFCB] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-[#001722] mb-1 font-semibold">Best Pre-Engineering Student Award</h4>
                    <p className="text-sm text-[#FE580B] font-medium">Jimma University</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Date:</strong> July 12, 2012<br/>
                      Recognition for outstanding performance in pre-engineering program
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
