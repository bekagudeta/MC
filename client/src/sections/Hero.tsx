import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';
import profileImage from '../assets/b9e8e4d79f6ab232976643d9caf4297745488717.png';

export function Hero() {
  const { about, loading } = usePortfolioStore();

  if (loading || !about) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6BCFCB] mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading...</p>
        </div>
      </section>
    );
  }
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mulgeta-mersha-cheru.pdf';
    link.download = 'Mulgeta_Mersha_Cheru_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QkNGQ0IiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJjMC0uMy4xLS43LjMtMSAuMi0uMy41LS42LjgtLjloMS43Yy40LS4zLjgtLjcgMS0xLjIuMy0uNS40LTEgLjQtMS42IDAtLjYtLjEtMS4yLS40LTEuNy0uMi0uNS0uNi0uOS0xLTEuMi0uNC0uNC0uOS0uNi0xLjUtLjgtLjUtLjEtMS4xLS4yLTEuNy0uMkgyNnYyaDEwYy40IDAgLjcuMSAxIC4zLjMuMi41LjQuNi43LjIuMy4yLjYuMi45IDAgLjMtLjEuNi0uMi45LS4xLjMtLjMuNS0uNi43LS4zLjItLjYuMy0xIC4zSDM0Yy0uNiAwLTEuMS4yLTEuNS42LS40LjQtLjYuOS0uNiAxLjV2MnptMCA0VjQwaC0ydjJoMnYtMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#6BCFCB] shadow-2xl ring-4 ring-[#6BCFCB]/20">
              <img
                src={profileImage}
                alt={about.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="mb-4 text-5xl md:text-7xl tracking-tight animate-fade-in">
            {about.name}
          </h1>

          <p className="text-xl md:text-2xl text-[#6BCFCB] mb-6 font-medium">
            {about.title}
          </p>

          <div className="mb-10">
            <p className="text-3xl md:text-5xl italic text-[#FE580B] font-semibold">
              "{about.motto}"
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {about.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#6BCFCB] hover:bg-[#5bbfbb] text-[#001722] rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Download size={22} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-2 hover:text-[#6BCFCB] transition-colors"
            >
              <Mail size={20} />
              <span>{about.email}</span>
            </a>
            <a
              href={`tel:${about.phone}`}
              className="flex items-center gap-2 hover:text-[#6BCFCB] transition-colors"
            >
              <Phone size={20} />
              <span>{about.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{about.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
