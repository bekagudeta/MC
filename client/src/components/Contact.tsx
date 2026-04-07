import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#6BCFCB]">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and research. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#FE580B]" size={20} />
                  <span>mulgeta.mersha@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#FE580B]" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#FE580B]" size={20} />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-[#6BCFCB] hover:bg-[#5ab8b4] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Github size={20} className="text-[#001722]" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#6BCFCB] hover:bg-[#5ab8b4] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Linkedin size={20} className="text-[#001722]" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#6BCFCB] hover:bg-[#5ab8b4] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Twitter size={20} className="text-[#001722]" />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-[#6BCFCB]">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#6BCFCB] text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#6BCFCB] text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#6BCFCB] text-white placeholder-gray-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
