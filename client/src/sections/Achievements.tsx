import { Award, Users, Languages } from 'lucide-react';

export function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-center text-[#001722]">Memberships & Recognition</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6BCFCB] to-[#FE580B] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#6BCFCB]/20 rounded-lg flex-shrink-0">
                  <Users className="text-[#084A48]" size={28} />
                </div>
                <div>
                  <h3 className="text-[#001722] mb-2">Professional Membership</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-[#6BCFCB] pl-4">
                  <h4 className="text-[#084A48] mb-1 font-semibold">Ethiopian Association of Civil Engineers (EACA)</h4>
                  <p className="text-sm text-[#6BCFCB] mb-2 font-medium">Mar 2021 - Current</p>
                  <p className="text-gray-700 text-sm">
                    The Ethiopian Association of Civil Engineers (EACE) is a professional organization 
                    that serves as a central hub for civil engineers in Ethiopia. The EACE aims to advance 
                    the civil engineering profession, disseminate knowledge, and contribute to the country's 
                    development and infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FE580B]/20 hover:border-[#FE580B] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#FE580B]/20 rounded-lg flex-shrink-0">
                  <Award className="text-[#FE580B]" size={28} />
                </div>
                <div>
                  <h3 className="text-[#001722] mb-2">Academic Recognition</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-[#FE580B] pl-4">
                  <h4 className="text-[#084A48] mb-1 font-semibold">Best Pre-Engineering Student Award</h4>
                  <p className="text-sm text-[#6BCFCB] mb-2 font-medium">Jimma University - Jul 12, 2012</p>
                  <p className="text-gray-700 text-sm">
                    The "Best Pre-engineering Student Award" is a recognition given to an outstanding student 
                    enrolled in a pre-engineering program. It's not a single, standardized award but rather a general 
                    term for various honors, scholarships, and prizes offered by the university.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#6BCFCB]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#6BCFCB]/20 rounded-lg">
                <Languages className="text-[#084A48]" size={28} />
              </div>
              <h3 className="text-[#001722]">Language Proficiency</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/5 rounded-lg border-2 border-[#6BCFCB]/30 hover:border-[#6BCFCB] transition-all">
                <h4 className="text-[#001722] mb-2 font-semibold">Oromo</h4>
                <p className="text-sm text-[#FE580B] mb-3 font-medium">Native</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#6BCFCB] to-[#084A48] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/5 rounded-lg border-2 border-[#6BCFCB]/30 hover:border-[#6BCFCB] transition-all">
                <h4 className="text-[#001722] mb-2 font-semibold">Amharic</h4>
                <p className="text-sm text-[#FE580B] mb-3 font-medium">Fluent</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#6BCFCB] to-[#084A48] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#6BCFCB]/10 to-[#084A48]/5 rounded-lg border-2 border-[#6BCFCB]/30 hover:border-[#6BCFCB] transition-all">
                <h4 className="text-[#001722] mb-2 font-semibold">English</h4>
                <p className="text-sm text-[#FE580B] mb-3 font-medium">Advanced (C1)</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#6BCFCB] to-[#084A48] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-6 text-center">
              Multilingual proficiency enables effective communication across diverse academic,
              professional, and research contexts within Ethiopia and internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
