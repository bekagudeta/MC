import { FileText, Award, ExternalLink } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';

export function Research() {
  const { research, contact } = usePortfolioStore();

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

        {research.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {research.map((item) => (
              <div
                key={item._id || item.title}
                className="rounded-[28px] border border-[#6BCFCB]/15 bg-white/95 p-8 shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="rounded-3xl bg-[#6BCFCB]/10 p-4">
                    <Award className="text-[#084A48]" size={28} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70 mb-2">
                      {item.status === 'published' ? 'Publication' : item.status === 'submitted' ? 'Submitted work' : 'Work in progress'}
                    </p>
                    <h3 className="text-2xl font-semibold text-[#001722]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#084A48]">{item.journal || 'Research project'}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.year}</p>
                  </div>
                </div>

                <div className="space-y-5 text-[#084A48]">
                  {item.description && (
                    <div>
                      <p className="text-sm font-semibold text-[#FE580B]">Overview</p>
                      <p>{item.description}</p>
                    </div>
                  )}

                  {item.coAuthors && item.coAuthors.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-[#FE580B]">Authors</p>
                      <p>{item.coAuthors.join(', ')}</p>
                    </div>
                  )}

                  {item.link && (
                    <div>
                      <p className="text-sm font-semibold text-[#FE580B]">Publication link</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-800 break-all"
                      >
                        {item.link}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-[#6BCFCB]/20 bg-white/95 p-8 shadow-xl text-center">
            <p className="text-xl font-semibold text-[#001722]">No research entries published yet.</p>
            <p className="mt-3 text-[#084A48]">Add your latest publications in the admin panel to show them here.</p>
          </div>
        )}

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

      {(contact?.researchGate || contact?.orcid || contact?.googleScholar) && (
        <div className="mt-12 rounded-[28px] border border-[#6BCFCB]/20 bg-gradient-to-br from-[#E9FEF9] to-[#F7FCFD] p-8 shadow-xl">
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/80 mb-2">Academic Profiles</p>
            <h3 className="text-2xl font-semibold text-[#001722]">Discover my scholarly presence</h3>
            <p className="mt-3 text-[#084A48] max-w-2xl mx-auto">
              Access peer-reviewed research, citation metrics, and verified researcher profiles.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {contact?.researchGate && (
              <a
                href={contact.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[#6BCFCB]/20 bg-white p-6 text-[#001722] shadow-sm transition hover:-translate-y-1 hover:border-[#084A48] hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/10 p-3">
                    <FileText size={24} className="text-[#084A48]" />
                  </div>
                  <ExternalLink size={18} />
                </div>
                <p className="mt-6 text-sm font-semibold">ResearchGate</p>
                <p className="mt-2 text-sm text-[#475569]">Research profile and collaboration network.</p>
              </a>
            )}
            {contact?.orcid && (
              <a
                href={contact.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[#6BCFCB]/20 bg-white p-6 text-[#001722] shadow-sm transition hover:-translate-y-1 hover:border-[#084A48] hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/10 p-3">
                    <Award size={24} className="text-[#084A48]" />
                  </div>
                  <ExternalLink size={18} />
                </div>
                <p className="mt-6 text-sm font-semibold">ORCID</p>
                <p className="mt-2 text-sm text-[#475569]">Verified researcher identifier and publication record.</p>
              </a>
            )}
            {contact?.googleScholar && (
              <a
                href={contact.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[#6BCFCB]/20 bg-white p-6 text-[#001722] shadow-sm transition hover:-translate-y-1 hover:border-[#084A48] hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/10 p-3">
                    <ExternalLink size={24} className="text-[#084A48]" />
                  </div>
                  <ExternalLink size={18} />
                </div>
                <p className="mt-6 text-sm font-semibold">Google Scholar</p>
                <p className="mt-2 text-sm text-[#475569]">Citation profile and academic influence metrics.</p>
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
