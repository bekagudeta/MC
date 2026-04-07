import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, this would send to a backend or email service)
    try {
      // Create mailto link as fallback
      const mailtoLink = `mailto:mulgeta_mersha@slu.edu.et?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#001722] via-[#084A48] to-[#001722] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Open to opportunities in structural engineering research, academic leadership positions,
              and infrastructure development consultancy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6BCFCB]">Contact Information</h3>
              </div>

              <a
                href="mailto:mulgeta_mersha@slu.edu.et"
                className="bg-[#084A48]/50 p-6 rounded-lg border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6BCFCB]/20 rounded-lg group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Mail className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white">mulgeta_mersha@slu.edu.et</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+251910074638"
                className="bg-[#084A48]/50 p-6 rounded-lg border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6BCFCB]/20 rounded-lg group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Phone className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white">+251 910 074 638</p>
                  </div>
                </div>
              </a>

              <div className="bg-[#084A48]/50 p-6 rounded-lg border border-[#6BCFCB]/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6BCFCB]/20 rounded-lg">
                    <MapPin className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">Fiche, Ethiopia</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/mulgeta123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#084A48]/50 p-6 rounded-lg border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6BCFCB]/20 rounded-lg group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Linkedin className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                    <p className="text-white flex items-center gap-2">
                      Connect with me
                      <ExternalLink size={16} />
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-[#084A48]/50 p-8 rounded-lg border border-[#6BCFCB]/20">
              <h3 className="text-2xl font-semibold mb-6 text-[#6BCFCB]">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#001722]/50 border border-[#6BCFCB]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BCFCB] focus:ring-2 focus:ring-[#6BCFCB]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#001722]/50 border border-[#6BCFCB]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BCFCB] focus:ring-2 focus:ring-[#6BCFCB]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#001722]/50 border border-[#6BCFCB]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BCFCB] focus:ring-2 focus:ring-[#6BCFCB]/20 transition-all"
                    placeholder="Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#001722]/50 border border-[#6BCFCB]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BCFCB] focus:ring-2 focus:ring-[#6BCFCB]/20 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 flex items-center gap-3 text-green-300">
                    <CheckCircle size={20} />
                    <span>Your email client will open to send the message!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-300">
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#FE580B] hover:bg-[#ff6d28] text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="pt-16 mt-16 border-t border-[#6BCFCB]/20 text-center">
            <p className="text-[#6BCFCB] text-xl mb-4 italic">
              "Challenge. Change. Impact!"
            </p>
            <p className="text-sm text-gray-400">
              © 2026 Mulgeta Mersha Cheru. Structural Engineer | Academic Leader | Researcher
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
