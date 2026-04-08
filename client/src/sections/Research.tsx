import { FileText, Award, ExternalLink } from 'lucide-react';

export function Research() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F4FFFB] via-[#F8FEFC] to-[#FFF7EE]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-4">Research</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Publication Highlights & Applied Research</h2>
          <p className="mt-4 text-[#084A48] max-w-3xl mx-auto">
            In-depth engineering research with practical insights for seismic design, composite column behavior, and resilient structural systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#6BCFCB]/15 bg-white/95 p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-3xl bg-[#6BCFCB]/10 p-4">
                <Award className="text-[#084A48]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-2">Master’s Thesis</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Performance of Encased Composite Columns</h3>
                <p className="mt-2 text-sm text-[#084A48]">Jimma University, 2022</p>
              </div>
            </div>

            <div className="space-y-5 text-[#084A48]">
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Research Method</p>
                <p>Finite element simulation and parametric modeling of composite columns under cyclic loads.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Tools & Software</p>
                <p>Abaqus FEA, advanced nonlinear analysis, and structural modeling techniques.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Key Findings</p>
                <p>Cross-section geometry and slenderness strongly affect strength and seismic resilience of encased composite columns.</p>
              </div>
              <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F8FFFC] p-5">
                <p className="text-sm font-semibold text-[#084A48]">Engineering Significance</p>
                <p className="mt-2 text-gray-700">Results inform design guidelines for earthquake-resistant composite column systems with better material efficiency and structural reliability.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#FE580B]/15 bg-white/95 p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-3xl bg-[#FE580B]/10 p-4">
                <FileText className="text-[#FE580B]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-2">Peer-Reviewed Paper</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Encased Composite Columns under Cyclic Loads</h3>
                <p className="mt-2 text-sm text-gray-600">Results in Engineering (Elsevier), 2024</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Authors</p>
                <p>Regasa Yadeta Sembeta, Kefiyalew Zerfu, Mulgeta Mersha, Elmer C Agon</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Focus</p>
                <p>The behavior of fully encased composite columns subject to horizontal cyclic loading and parametric section analysis.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#FE580B]/20 bg-[#FFF6EE] p-4">
                  <p className="text-sm font-semibold text-[#084A48]">Volume & Pages</p>
                  <p className="mt-2 text-[#084A48]">Vol 4, Issue 2, 103510</p>
                </div>
                <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F6FFFB] p-4">
                  <p className="text-sm font-semibold text-[#084A48]">Publication Year</p>
                  <p className="mt-2 text-[#084A48]">2024</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">DOI</p>
                <p className="text-gray-700 break-all">https://doi.org/10.1016/j.rineng.2024.103510</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FE580B]">Key Results</p>
                <ul className="space-y-2 mt-3 text-gray-700">
                  <li className="flex gap-2"><span className="text-[#6BCFCB]">-</span><span>ETS columns outperform ECS and EHS sections in lateral capacity.</span></li>
                  <li className="flex gap-2"><span className="text-[#6BCFCB]">-</span><span>Slenderness increases reduce lateral resistance significantly in cyclic load cases.</span></li>
                  <li className="flex gap-2"><span className="text-[#6BCFCB]">-</span><span>Tie spacing critically influences buckling behavior and resistance capacity.</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-[#6BCFCB]/20 pt-6">
              <a
                href="https://doi.org/10.1016/j.rineng.2024.103510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6BCFCB] hover:text-[#084A48] transition-colors font-semibold"
              >
                <ExternalLink size={16} />
                <span>View Publication</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-[#6BCFCB]/20 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/10 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-[#001722] mb-6 text-center">Research Impact</h3>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-bold text-[#FE580B] mb-2">1</p>
              <p className="text-gray-700 font-medium">International Publication</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-bold text-[#6BCFCB] mb-2">FEA</p>
              <p className="text-gray-700 font-medium">Advanced Simulation Methods</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-bold text-[#084A48] mb-2">3.91</p>
              <p className="text-gray-700 font-medium">MSc GPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
