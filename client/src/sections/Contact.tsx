import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle, BookOpen, Globe } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { usePortfolioStore } from '../store/portfolioStore';

export function Contact() {
  const { contact } = usePortfolioStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_BASE_URL}/contact/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <p className="text-sm uppercase tracking-[0.35em] text-[#6BCFCB] mb-3">Contact</p>
            <h2 className="mb-4 text-4xl font-semibold text-white">Start the Conversation</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Open to structural engineering research opportunities, academic collaborations, and infrastructure consultancy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6BCFCB]">Contact Information</h3>
              </div>

              <a
                href={`mailto:${contact?.email ?? 'lalisamarsha@gmail.com'}`}
                className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Mail className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white">{contact?.email ?? 'lalisamarsha@gmail.com'}</p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contact?.phone ?? '+251910074638'}`}
                className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Phone className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white">{contact?.phone ?? '+251 910 074 638'}</p>
                  </div>
                </div>
              </a>

              <div className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/20 p-3">
                    <MapPin className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">{contact?.location ?? 'Fiche, Ethiopia'}</p>
                  </div>
                </div>
              </div>

              <a
                href={contact?.linkedin ?? 'https://www.linkedin.com/in/mulgeta123'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                    <Linkedin className="text-[#6BCFCB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                    <p className="text-white flex items-center gap-2">
                      Connect with me
                      <ExternalLink size={16} />
                    </p>
                  </div>
                </div>
              </a>

              {(contact?.researchGate || contact?.orcid || contact?.googleScholar) && (
                <div className="grid gap-6 sm:grid-cols-3">
                  {contact?.researchGate && (
                    <a
                      href={contact.researchGate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                          <BookOpen className="text-[#6BCFCB]" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">ResearchGate</p>
                          <p className="text-white flex items-center gap-2">
                            View profile
                            <ExternalLink size={16} />
                          </p>
                        </div>
                      </div>
                    </a>
                  )}

                  {contact?.orcid && (
                    <a
                      href={contact.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                          <Globe className="text-[#6BCFCB]" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">ORCID</p>
                          <p className="text-white flex items-center gap-2">
                            View researcher ID
                            <ExternalLink size={16} />
                          </p>
                        </div>
                      </div>
                    </a>
                  )}

                  {contact?.googleScholar && (
                    <a
                      href={contact.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#084A48]/50 p-6 rounded-3xl border border-[#6BCFCB]/20 hover:border-[#6BCFCB] transition-all hover:shadow-lg hover:shadow-[#6BCFCB]/20 group block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-[#6BCFCB]/20 p-3 group-hover:bg-[#6BCFCB]/30 transition-colors">
                          <ExternalLink className="text-[#6BCFCB]" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Google Scholar</p>
                          <p className="text-white flex items-center gap-2">
                            View citations
                            <ExternalLink size={16} />
                          </p>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="bg-[#084A48]/50 p-8 rounded-3xl border border-[#6BCFCB]/20 shadow-xl">
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
                    className="w-full rounded-2xl border border-[#6BCFCB]/30 bg-[#001722]/50 px-4 py-3 text-white placeholder-gray-500 transition focus:border-[#6BCFCB] focus:outline-none focus:ring-2 focus:ring-[#6BCFCB]/20"
                    placeholder="Full Name"
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
                    className="w-full rounded-2xl border border-[#6BCFCB]/30 bg-[#001722]/50 px-4 py-3 text-white placeholder-gray-500 transition focus:border-[#6BCFCB] focus:outline-none focus:ring-2 focus:ring-[#6BCFCB]/20"
                    placeholder="Email"
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
                    className="w-full rounded-2xl border border-[#6BCFCB]/30 bg-[#001722]/50 px-4 py-3 text-white placeholder-gray-500 transition focus:border-[#6BCFCB] focus:outline-none focus:ring-2 focus:ring-[#6BCFCB]/20"
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
                    className="w-full rounded-2xl border border-[#6BCFCB]/30 bg-[#001722]/50 px-4 py-3 text-white placeholder-gray-500 transition focus:border-[#6BCFCB] focus:outline-none focus:ring-2 focus:ring-[#6BCFCB]/20 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-2xl border border-green-500/50 bg-green-900/30 p-4 text-green-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-2xl border border-red-500/50 bg-red-900/30 p-4 text-red-300">
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FE580B] px-6 py-4 font-semibold text-white transition hover:bg-[#ff6d28] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : <><Send size={20} /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 border-t border-[#6BCFCB]/20 pt-12 text-center">
            <p className="text-[#6BCFCB] text-xl mb-4 italic">"Challenge. Change. Impact."</p>
            <p className="text-sm text-gray-400">© 2026 Mulgeta Mersha Cheru. Structural Engineer · Academic Leader · Researcher</p>
          </div>
        </div>
      </div>
    </section>
  );
}
