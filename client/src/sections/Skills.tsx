import { useMemo } from 'react';
import { Wrench, Users } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';

export function Skills() {
  const { skills } = usePortfolioStore();

  const categoryCards = useMemo(
    () =>
      skills.map((category) => ({
        ...category,
        icon: category.category.toLowerCase().includes('technical') ? 'technical' : 'professional',
      })),
    [skills]
  );

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
          {categoryCards.map((category) => {
            const isTechnical = category.icon === 'technical';
            return (
              <div
                key={category.category}
                className={`rounded-[28px] border p-8 shadow-xl transition-transform hover:-translate-y-1 ${
                  isTechnical
                    ? 'border-[#6BCFCB]/15 bg-gradient-to-br from-[#F5FFFC] via-[#E8FCF8] to-[#EAF7F5]'
                    : 'border-[#FE580B]/15 bg-gradient-to-br from-[#FFF5E8] via-[#FFF1E3] to-[#FFF7EE]'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`rounded-3xl p-3 ${isTechnical ? 'bg-[#6BCFCB]/10' : 'bg-[#FE580B]/10'}`}>
                    {isTechnical ? (
                      <Wrench className="text-[#084A48]" size={28} />
                    ) : (
                      <Users className="text-[#FE580B]" size={28} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#084A48]/70">{category.category}</p>
                    <h3 className="text-2xl font-semibold text-[#001722]">
                      {isTechnical ? 'Engineering Technologies' : 'Leadership & Collaboration'}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {category.items?.map((skill, index) => (
                    <span
                      key={`${category.category}-${skill}-${index}`}
                      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                        isTechnical
                          ? 'border border-[#6BCFCB]/30 bg-[#F5FEFC] text-[#084A48] hover:bg-[#E8FCF8]'
                          : 'border border-[#FE580B]/30 bg-[#FFF4EA] text-[#BE4A02] hover:bg-[#FFE6D3]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
