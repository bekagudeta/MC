import { Award, Users, Languages } from 'lucide-react';

export function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5FFFB] via-[#FFF6EE] to-[#FFF2E8]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-4">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001722]">Awards, Memberships & Language Strength</h2>
          <p className="mt-4 text-[#084A48] max-w-3xl mx-auto">
            Professional associations, academic honors, and multilingual capabilities that support collaboration, research, and teaching.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-10">
          <div className="rounded-[28px] border border-[#6BCFCB]/15 bg-white/95 p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-3xl bg-[#6BCFCB]/10 p-4">
                <Users className="text-[#084A48]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Membership</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Professional Association</h3>
              </div>
            </div>

            <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F7FFFC] p-6">
              <h4 className="text-[#084A48] mb-3 font-semibold">Ethiopian Association of Civil Engineers (EACE)</h4>
              <p className="text-sm text-[#6BCFCB] font-medium mb-4">Mar 2021 - Present</p>
              <p className="text-[#084A48] text-sm leading-relaxed">
                Actively engaged in the national community of civil engineers, contributing to knowledge sharing, technical standards, and professional development.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#FE580B]/15 bg-white/95 p-8 shadow-xl transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-3xl bg-[#FE580B]/10 p-4">
                <Award className="text-[#FE580B]" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Recognition</p>
                <h3 className="text-2xl font-semibold text-[#001722]">Academic Award</h3>
              </div>
            </div>

            <div className="rounded-3xl border border-[#FE580B]/20 bg-[#FFF5EE] p-6">
              <h4 className="text-[#084A48] mb-3 font-semibold">Best Pre-Engineering Student Award</h4>
              <p className="text-sm text-[#FE580B] font-medium mb-4">Jimma University · Jul 12, 2012</p>
              <p className="text-[#084A48] text-sm leading-relaxed">
                A distinction awarded for outstanding academic performance, leadership, and technical promise in the pre-engineering program.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#6BCFCB]/15 bg-white/95 p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-3xl bg-[#6BCFCB]/10 p-4">
              <Languages className="text-[#084A48]" size={28} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">Languages</p>
              <h3 className="text-2xl font-semibold text-[#001722]">Multilingual Proficiency</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F8FFFC] p-6">
              <h4 className="text-[#001722] mb-2 font-semibold">Oromo</h4>
              <p className="text-sm text-[#FE580B] mb-4 font-medium">Native</p>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-[#6BCFCB] to-[#084A48]"></div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F8FFFC] p-6">
              <h4 className="text-[#001722] mb-2 font-semibold">Amharic</h4>
              <p className="text-sm text-[#FE580B] mb-4 font-medium">Fluent</p>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2.5 w-[95%] rounded-full bg-gradient-to-r from-[#6BCFCB] to-[#084A48]"></div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#6BCFCB]/20 bg-[#F8FFFC] p-6">
              <h4 className="text-[#001722] mb-2 font-semibold">English</h4>
              <p className="text-sm text-[#FE580B] mb-4 font-medium">Advanced (C1)</p>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2.5 w-[90%] rounded-full bg-gradient-to-r from-[#6BCFCB] to-[#084A48]"></div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-[#084A48] text-sm leading-relaxed">
            Multilingual communication enables effective teaching, research collaboration, and professional engagement across domestic and international audiences.
          </p>
        </div>
      </div>
    </section>
  );
}
