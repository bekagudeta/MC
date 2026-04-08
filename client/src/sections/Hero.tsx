import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SkillIcons } from '../components/SkillIcons';
import profileImage from '../assets/b9e8e4d79f6ab232976643d9caf4297745488717.png';

export function Hero() {
  const { about, loading, skills } = usePortfolioStore();
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -50]);
  
  // Get all technical skills for icons
  const allSkills = skills.reduce((acc: string[], category) => {
    return [...acc, ...category.items];
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

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
    <motion.section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QkNGQ0IiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJjMC0uMy4xLS43LjMtMSAuMi0uMy41LS42LjgtLjloMS43Yy40LS4zLjgtLjcgMS0xLjIuMy0uNS40LTEgLjQtMS42IDAtLjYtLjEtMS4yLS40LTEuNy0uMi0uNS0uNi0uOS0xLTEuMi0uNC0uNC0uOS0uNi0xLjUtLjgtLjUtLjEtMS4xLS4yLTEuNy0uMkgyNnYyaDEwYy40IDAgLjcuMSAxIC4zLjMuMi41LjQuNi43LjIuMy4yLjYuMi45IDAgLjMtLjEuNi0uMi45LS4xLjMtLjMuNS0uNi43LS4zLjItLjYuMy0xIC4zSDM0Yy0uNiAwLTEuMS4yLTEuNS42LS40LjQtLjYuOS0uNiAxLjV2MnptMCA0VjQwaC0ydjJoMnYtMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {/* Modern Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            
            {/* Left Column - Profile with Skill Icons */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Skill Icons Orbit */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  variants={itemVariants}
                >
                  <SkillIcons skills={allSkills} />
                </motion.div>
                
                {/* Profile Image */}
                <motion.div className="relative z-10" variants={profileVariants}>
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#6BCFCB] shadow-2xl ring-4 ring-[#6BCFCB]/20 bg-[#001722]">
                    <img
                      src={profileImage}
                      alt={about.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Right Column - Name and Title */}
            <div className="text-center lg:text-left space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                variants={itemVariants}
              >
                {about.name}
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-[#6BCFCB] font-medium"
                variants={itemVariants}
              >
                {about.title}
              </motion.p>

              <motion.div variants={itemVariants}>
                <p className="text-2xl md:text-3xl italic text-[#FE580B] font-semibold">
                  "{about.motto}"
                </p>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                {about.bio}
              </motion.p>
            </div>
          </div>

          {/* CTA Buttons - Full Width */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12 lg:mt-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#6BCFCB] hover:bg-[#5bbfbb] text-[#001722] rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={22} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Contact Info - Full Width */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-gray-300 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href={`mailto:${about.email}`}
              className="flex items-center gap-2 hover:text-[#6BCFCB] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={20} />
              <span>{about.email}</span>
            </motion.a>
            <motion.a
              href={`tel:${about.phone}`}
              className="flex items-center gap-2 hover:text-[#6BCFCB] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={20} />
              <span>{about.phone}</span>
            </motion.a>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={20} />
              <span>{about.location}</span>
            </motion.div>
          </motion.div>

                  </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </motion.section>
  );
}
