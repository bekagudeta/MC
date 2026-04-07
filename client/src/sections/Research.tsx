import { FileText, Award, ExternalLink } from 'lucide-react';

export function Research() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-center text-[#001722]">Research & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6BCFCB] to-[#FE580B] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#6BCFCB]/20 hover:border-[#6BCFCB] hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#6BCFCB]/20 rounded-lg flex-shrink-0">
                  <Award className="text-[#084A48]" size={28} />
                </div>
                <div>
                  <h3 className="text-[#001722] mb-2">Master's Thesis</h3>
                  <p className="text-sm text-gray-600 mb-4">Jimma University, 2022</p>
                </div>
              </div>

              <h4 className="mb-4 text-[#084A48] font-semibold">
                Performance of Encased Composite Columns Under Cyclic Loads
              </h4>

              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Research Method:</span>
                  <p>Finite Element Simulation using advanced computational modeling</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Tools & Software:</span>
                  <p>Abaqus FEA, Advanced Nonlinear Analysis</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Key Findings:</span>
                  <p>
                    Demonstrated that cross-sectional configuration and slenderness ratio
                    significantly influence the structural performance of encased composite columns
                    under seismic loading conditions. The research provides critical design
                    insights for earthquake-resistant composite structural systems.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#6BCFCB]/30">
                  <span className="text-sm text-[#FE580B] font-semibold">Engineering Significance:</span>
                  <p className="text-sm">
                    Results inform design guidelines for composite column systems in
                    seismically active regions, optimizing material efficiency while
                    enhancing structural resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FE580B]/20 hover:border-[#FE580B] hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#FE580B]/20 rounded-lg flex-shrink-0">
                  <FileText className="text-[#FE580B]" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#001722] mb-2">Peer-Reviewed Publication</h3>
                  <p className="text-sm text-gray-600 mb-4">Elsevier - Results in Engineering, 2024</p>
                </div>
              </div>

              <h4 className="mb-4 text-[#084A48] font-semibold">
                The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads
              </h4>

              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Authors:</span>
                  <p>Regasa Yadeta Sembeta, Kefiyalew Zerfu, Mulgeta Mersha, Elmer C Agon</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Journal:</span>
                  <p>Results in Engineering (Elsevier)</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Volume & Pages:</span>
                  <p>Vol 4, Issue 2, Pages 103510</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Publication Year:</span>
                  <p>2024</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">DOI:</span>
                  <p>https://doi.org/10.1016/j.rineng.2024.103510</p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Research Focus:</span>
                  <p>
                    The goal of this paper is to present the behavior and performance of a fully encased composite column 
                    subjected to a horizontal cyclic load using finite element simulation. A parametric study was conducted 
                    to investigate the influences of geometric properties of fully encased composite (FEC) columns.
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[#FE580B] font-semibold">Key Findings:</span>
                  <ul className="space-y-2 mt-2">
                    <li className="flex gap-2">
                      <span className="text-[#6BCFCB] flex-shrink-0 text-xl">-</span>
                      <span>Encased Tube Section (ETS) columns had better performance than Encased Circular Section (ECS) and Encased H-Section (EHS)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#6BCFCB] flex-shrink-0 text-xl">-</span>
                      <span>Increasing slenderness ratio from 7.5 to 11.25 and 15 reduces lateral resisting capacity by 6.74% and 15.83%</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#6BCFCB] flex-shrink-0 text-xl">-</span>
                      <span>Tie spacing significantly affects lateral resistance capacity and buckling behavior</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#6BCFCB]/30">
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

          <div className="mt-12 p-8 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/10 rounded-xl border-2 border-[#6BCFCB]/30">
            <h3 className="text-[#001722] mb-6 text-center">Research Impact</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-[#FE580B] mb-2">1</p>
                <p className="text-gray-700 font-medium">International Publication</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#6BCFCB] mb-2">FEA</p>
                <p className="text-gray-700 font-medium">Advanced Simulation Methods</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#084A48] mb-2">3.91</p>
                <p className="text-gray-700 font-medium">MSc GPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
