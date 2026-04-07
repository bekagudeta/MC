import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleDownloadCV = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/cv-mulgeta-mersha-cheru.pdf';
    link.download = 'Mulgeta_Mersha_Cheru_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#001722]/95 backdrop-blur-md shadow-lg border-b border-[#084A48]/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white hover:text-[#6BCFCB] transition-colors"
            >
              MC
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-[#6BCFCB] text-[#001722]'
                      : 'text-gray-300 hover:text-white hover:bg-[#084A48]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="ml-4 px-5 py-2.5 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#6BCFCB] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-[#001722]/98 backdrop-blur-md border-t border-[#084A48]/30">
            <div className="container mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-[#6BCFCB] text-[#001722]'
                      : 'text-gray-300 hover:text-white hover:bg-[#084A48]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="w-full mt-3 px-5 py-3 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-0"></div>
    </>
  );
}
