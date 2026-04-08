import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';
import type { About, Contact, PortfolioData } from '../../types/portfolio';

const sectionConfig: Record<
  string,
  {
    title: string;
    subtitle: string;
    emptyMessage: string;
    path: string;
  }
> = {
  about: {
    title: 'About Information',
    subtitle: 'Update the profile details shown on the public portfolio.',
    emptyMessage: 'About information is not set yet.',
    path: '/admin/about',
  },
  contact: {
    title: 'Contact Information',
    subtitle: 'Update the contact details displayed on the site.',
    emptyMessage: 'Contact details are not set yet.',
    path: '/admin/contact',
  },
  skills: {
    title: 'Skills Categories',
    subtitle: 'View and manage skill categories for the portfolio.',
    emptyMessage: 'No skill categories have been added yet.',
    path: '/admin/skills',
  },
  experience: {
    title: 'Experience',
    subtitle: 'Manage your experience entries and timeline.',
    emptyMessage: 'No experience items have been added yet.',
    path: '/admin/experience',
  },
  education: {
    title: 'Education',
    subtitle: 'Manage your education and certifications.',
    emptyMessage: 'No education items have been added yet.',
    path: '/admin/education',
  },
  research: {
    title: 'Research',
    subtitle: 'Manage your research publications and work.',
    emptyMessage: 'No research items have been added yet.',
    path: '/admin/research',
  },
  achievements: {
    title: 'Achievements',
    subtitle: 'Manage awards, recognitions and accomplishments.',
    emptyMessage: 'No achievements have been added yet.',
    path: '/admin/achievements',
  },
};

function renderSectionDetails(section: string, store: PortfolioData) {
  switch (section) {
    case 'skills':
      return store.skills.length ? (
        <div className="grid gap-5">
          {store.skills.map((skill) => (
            <div
              key={skill._id || skill.category}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900">{skill.category}</p>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                  {skill.items.length} skills
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No skill categories found yet.</p>
      );
    case 'experience':
      return store.experience.length ? (
        <div className="grid gap-5">
          {store.experience.map((item) => (
            <div
              key={item._id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">{item.role}</p>
              <p className="mt-1 text-sm text-slate-500">{item.company}</p>
              <p className="mt-3 text-sm text-slate-500">
                {item.startDate} {item.endDate ? `– ${item.endDate}` : '– Current'}
              </p>
              {item.description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No experience items found yet.</p>
      );
    case 'education':
      return store.education.length ? (
        <div className="grid gap-5">
          {store.education.map((item) => (
            <div
              key={item._id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">{item.degree}</p>
              <p className="mt-1 text-sm text-slate-500">{item.institution}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{item.year}</span>
                {item.gpa && <span>GPA: {item.gpa}</span>}
              </div>
              {item.description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No education items found yet.</p>
      );
    case 'research':
      return store.research.length ? (
        <div className="grid gap-5">
          {store.research.map((item) => (
            <div
              key={item._id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{item.year}</span>
                {item.journal && <span>{item.journal}</span>}
                {item.status && <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{item.status}</span>}
              </div>
              {item.description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No research items found yet.</p>
      );
    case 'achievements':
      return store.achievements.length ? (
        <div className="grid gap-5">
          {store.achievements.map((item) => (
            <div
              key={item._id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{item.year}</span>
                {item.issuer && <span>{item.issuer}</span>}
                {item.type && <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{item.type}</span>}
              </div>
              {item.description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No achievements found yet.</p>
      );
    case 'about':
      return store.about ? (
        <div className="grid gap-4">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-slate-900">{store.about.name || 'Name not set'}</p>
                <p className="mt-1 text-sm text-slate-500">{store.about.title || 'Title not set'}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">About section</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{store.about.bio || store.about.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-700">Email</p>
                <p className="mt-1 text-sm text-slate-500">{store.about.email || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Location</p>
                <p className="mt-1 text-sm text-slate-500">{store.about.location || 'Not set'}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-slate-500">About section has not been configured yet.</p>
      );
    case 'contact':
      return store.contact ? (
        <div className="grid gap-4">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xl font-semibold text-slate-900">Contact details</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-700">Email</p>
                <p className="mt-1 text-sm text-slate-500">{store.contact.email || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Phone</p>
                <p className="mt-1 text-sm text-slate-500">{store.contact.phone || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Location</p>
                <p className="mt-1 text-sm text-slate-500">{store.contact.location || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Additional</p>
                <p className="mt-1 text-sm text-slate-500">{store.contact.additionalInfo || 'No extra details'}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-slate-500">Contact section has not been configured yet.</p>
      );
    default:
      return null;
  }
}

export function AdminSection() {
  const { section } = useParams();
  const navigate = useNavigate();
  const {
    skills,
    experience,
    education,
    research,
    achievements,
    about,
    contact,
    fetchPortfolioData,
    setAbout,
    setContact,
    loading,
  } = usePortfolioStore();

  const [aboutForm, setAboutForm] = useState<Partial<About>>({
    name: '',
    title: '',
    bio: '',
    description: '',
    motto: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
  });

  const [contactForm, setContactForm] = useState<Partial<Contact>>({
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    additionalInfo: '',
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  useEffect(() => {
    if (about) {
      setAboutForm({
        name: about.name,
        title: about.title,
        bio: about.bio,
        description: about.description,
        motto: about.motto,
        email: about.email,
        phone: about.phone,
        location: about.location,
        linkedin: about.linkedin,
        github: about.github,
      });
    }
  }, [about]);

  useEffect(() => {
    if (contact) {
      setContactForm({
        email: contact.email,
        phone: contact.phone,
        location: contact.location,
        linkedin: contact.linkedin,
        github: contact.github,
        additionalInfo: contact.additionalInfo,
      });
    }
  }, [contact]);

  const handleAboutInput = (field: keyof About, value: string) => {
    setAboutForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactInput = (field: keyof Contact, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveAbout = async () => {
    setSaveStatus('saving');
    setSaveMessage('Saving about section...');

    try {
      const response = await portfolioApi.updateAbout(aboutForm);
      setAbout(response.data);
      setSaveStatus('success');
      setSaveMessage('About section updated successfully.');
    } catch (error) {
      setSaveStatus('error');
      setSaveMessage('Failed to save about section. Please try again.');
    }
  };

  const saveContact = async () => {
    setSaveStatus('saving');
    setSaveMessage('Saving contact details...');

    try {
      const response = await portfolioApi.updateContact(contactForm);
      setContact(response.data);
      setSaveStatus('success');
      setSaveMessage('Contact details updated successfully.');
    } catch (error) {
      setSaveStatus('error');
      setSaveMessage('Failed to save contact details. Please try again.');
    }
  };

  const renderAboutEditor = () => (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Profile details</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">About section content</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
            <input
              value={aboutForm.name || ''}
              onChange={(e) => handleAboutInput('name', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
            <input
              value={aboutForm.title || ''}
              onChange={(e) => handleAboutInput('title', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Motto</label>
            <input
              value={aboutForm.motto || ''}
              onChange={(e) => handleAboutInput('motto', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Bio summary</label>
            <textarea
              value={aboutForm.bio || ''}
              onChange={(e) => handleAboutInput('bio', e.target.value)}
              rows={4}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none resize-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Extended description</label>
            <textarea
              value={aboutForm.description || ''}
              onChange={(e) => handleAboutInput('description', e.target.value)}
              rows={4}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Contact details</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">How visitors can reach you</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              value={aboutForm.email || ''}
              onChange={(e) => handleAboutInput('email', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
            <input
              value={aboutForm.phone || ''}
              onChange={(e) => handleAboutInput('phone', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
            <input
              value={aboutForm.location || ''}
              onChange={(e) => handleAboutInput('location', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">LinkedIn</label>
            <input
              value={aboutForm.linkedin || ''}
              onChange={(e) => handleAboutInput('linkedin', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">GitHub</label>
            <input
              value={aboutForm.github || ''}
              onChange={(e) => handleAboutInput('github', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-900">Save changes</p>
          <p className="mt-2 text-sm text-slate-500">Your updates will be reflected on the public portfolio About section.</p>
          {saveStatus !== 'idle' && (
            <p className={`mt-3 text-sm ${saveStatus === 'success' ? 'text-emerald-600' : saveStatus === 'error' ? 'text-rose-600' : 'text-slate-600'}`}>
              {saveMessage}
            </p>
          )}
        </div>
        <button
          onClick={saveAbout}
          disabled={saveStatus === 'saving'}
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saveStatus === 'saving' ? 'Saving…' : 'Save About'}
        </button>
      </div>
    </div>
  );

  const renderContactEditor = () => (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Contact form</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">Contact details</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              value={contactForm.email || ''}
              onChange={(e) => handleContactInput('email', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
            <input
              value={contactForm.phone || ''}
              onChange={(e) => handleContactInput('phone', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
            <input
              value={contactForm.location || ''}
              onChange={(e) => handleContactInput('location', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">LinkedIn</label>
            <input
              value={contactForm.linkedin || ''}
              onChange={(e) => handleContactInput('linkedin', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">GitHub</label>
            <input
              value={contactForm.github || ''}
              onChange={(e) => handleContactInput('github', e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Additional info</label>
            <textarea
              value={contactForm.additionalInfo || ''}
              onChange={(e) => handleContactInput('additionalInfo', e.target.value)}
              rows={4}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-900">Save contact details</p>
          <p className="mt-2 text-sm text-slate-500">These details appear in the public Contact section.</p>
          {saveStatus !== 'idle' && (
            <p className={`mt-3 text-sm ${saveStatus === 'success' ? 'text-emerald-600' : saveStatus === 'error' ? 'text-rose-600' : 'text-slate-600'}`}>
              {saveMessage}
            </p>
          )}
        </div>
        <button
          onClick={saveContact}
          disabled={saveStatus === 'saving'}
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saveStatus === 'saving' ? 'Saving…' : 'Save Contact'}
        </button>
      </div>
    </div>
  );

  const sectionKey = section?.toLowerCase() || '';
  const config = sectionConfig[sectionKey];

  if (!config) {
    return (
      <div className="min-h-screen bg-[#14213D] text-white px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#FCA311] bg-black/70 p-10 shadow-2xl">
          <h1 className="text-3xl font-bold text-[#FCA311]">Section not found</h1>
          <p className="mt-4 text-[#E5E5E5]">That admin section does not exist.</p>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="mt-6 rounded-full bg-[#FCA311] px-6 py-3 font-semibold text-[#14213D] transition hover:bg-[#e69b04]"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const itemCounts = useMemo(() => {
    switch (sectionKey) {
      case 'skills':
        return skills.length;
      case 'experience':
        return experience.length;
      case 'education':
        return education.length;
      case 'research':
        return research.length;
      case 'achievements':
        return achievements.length;
      case 'about':
        return about ? 1 : 0;
      case 'contact':
        return contact ? 1 : 0;
      default:
        return 0;
    }
  }, [sectionKey, skills, experience, education, research, achievements, about, contact]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600 mb-2">Admin section</p>
              <h1 className="text-4xl font-black text-slate-950">{config.title}</h1>
              <p className="mt-3 max-w-2xl text-slate-600">{config.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admin/dashboard"
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Back to Dashboard
              </Link>
              <button
                onClick={() => fetchPortfolioData()}
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Refresh data
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Section overview</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-950">{itemCounts} {itemCounts === 1 ? 'item' : 'items'}</h2>
              </div>
            </div>
            {loading ? (
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-500 shadow-sm">
                Refreshing content…
              </div>
            ) : (
              <div className="space-y-6">
                {sectionKey === 'about' ? (
                  renderAboutEditor()
                ) : sectionKey === 'contact' ? (
                  renderContactEditor()
                ) : (
                  renderSectionDetails(sectionKey, { skills, experience, education, research, achievements, about, contact }) ?? (
                    <div className="rounded-[28px] border border-dashed border-slate-200 bg-slate-50 p-6 text-slate-500 shadow-sm">
                      {config.emptyMessage}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <aside className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="mb-6 rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Quick tip</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use the dashboard and admin section navigation to keep your portfolio content consistent across the public site.
              </p>
            </div>
            <div className="space-y-5 text-sm text-slate-700">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">Editing quick links</p>
                <p className="mt-2 text-slate-500">Jump between sections to review and update the content shown on the portfolio landing page.</p>
              </div>
              <div>
                <p className="mb-3 font-semibold text-slate-900">Sections</p>
                <ul className="space-y-3">
                  {Object.entries(sectionConfig).map(([key, value]) => (
                    <li key={key}>
                      <Link
                        to={value.path}
                        className="text-sky-600 transition hover:text-sky-800"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
