export function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E8F8F4] via-[#F5FCFA] to-[#FFF4EB]">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB]">About</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Engineering Leadership with Research-Driven Impact</h2>
            <p className="text-lg text-[#084A48] max-w-3xl leading-relaxed">
              I bring a rare combination of academic leadership, structural engineering expertise, and hands-on infrastructure delivery. My work spans university-level teaching, curriculum innovation, advanced research, and project execution across Ethiopia.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#6BCFCB]/20 bg-white/90 p-6 shadow-xl shadow-[#6BCFCB]/10">
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-2">Degree</p>
                <p className="text-xl font-semibold text-[#001722]">MSc Structural Engineering</p>
                <p className="mt-2 text-sm text-gray-600">Jimma University · GPA 3.91</p>
              </div>
              <div className="rounded-[24px] border border-[#FE580B]/20 bg-white/90 p-6 shadow-xl shadow-[#FE580B]/10">
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-2">Role</p>
                <p className="text-xl font-semibold text-[#001722]">Academic Department Head</p>
                <p className="mt-2 text-sm text-[#084A48]">Led curriculum strategy, faculty growth, and research programs.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#6BCFCB]/15 bg-[#FFFFFF]/90 p-10 shadow-[0_60px_120px_-70px_rgba(6,101,84,0.35)]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#6BCFCB]/15 bg-[#F8FFFC] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-3">Core expertise</p>
                <ul className="space-y-3 text-[#084A48]">
                  <li>Structural analysis, reinforced concrete design, and bridge engineering</li>
                  <li>Finite element modeling with Abaqus, ETABS, SAP2000, and BIM</li>
                  <li>Curriculum development, faculty mentorship, and academic leadership</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#FE580B]/15 bg-[#FFF7EE] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-3">Biggest impact</p>
                <p className="text-gray-700 leading-relaxed">
                  Published peer-reviewed research on encased composite columns, blending theoretical insight with practical design guidance for earthquake-resistant structures.
                </p>
              </div>

              <div className="rounded-3xl border border-[#6BCFCB]/15 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-3">Professional value</p>
                <p className="text-gray-700 leading-relaxed">
                  I help institutions and engineering teams convert academic excellence into real-world infrastructure performance and sustainable educational outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
