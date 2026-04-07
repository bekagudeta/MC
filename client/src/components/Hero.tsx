import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#6BCFCB] to-white bg-clip-text text-transparent">
          Mulgeta Mersha Cheru
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Software Developer | Data Scientist | Researcher
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-[#6BCFCB] text-[#6BCFCB] hover:bg-[#6BCFCB] hover:text-[#001722] rounded-lg font-medium transition-all duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-[#6BCFCB]" />
      </div>
    </section>
  );
}
