import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePortfolioStore } from '../../store/portfolioStore';
import type { PortfolioData } from '../../types/portfolio';

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
        <div className="grid gap-4">
          {store.skills.map((skill) => (
            <div key={skill._id} className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-4 text-[#14213D] shadow-sm">
              <p className="font-semibold">{skill.category}</p>
              <p className="mt-2 text-sm text-[#475569]">{skill.items.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#475569]">No skill categories found yet.</p>
      );
    case 'experience':
      return store.experience.length ? (
        <div className="space-y-4">
          {store.experience.map((item) => (
            <div key={item._id} className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-4 text-[#14213D] shadow-sm">
              <p className="font-semibold">{item.role} • {item.company}</p>
              <p className="text-sm text-[#475569]">{item.startDate} {item.endDate ? `- ${item.endDate}` : '(Current)'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#475569]">No experience items found yet.</p>
      );
    case 'education':
      return store.education.length ? (
        <div className="space-y-4">
          {store.education.map((item) => (
            <div key={item._id} className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-4 text-[#14213D] shadow-sm">
              <p className="font-semibold">{item.degree} • {item.institution}</p>
              <p className="text-sm text-[#475569]">{item.year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#475569]">No education items found yet.</p>
      );
    case 'research':
      return store.research.length ? (
        <div className="space-y-4">
          {store.research.map((item) => (
            <div key={item._id} className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-4 text-[#14213D] shadow-sm">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-[#475569]">{item.year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#475569]">No research items found yet.</p>
      );
    case 'achievements':
      return store.achievements.length ? (
        <div className="space-y-4">
          {store.achievements.map((item) => (
            <div key={item._id} className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-4 text-[#14213D] shadow-sm">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-[#475569]">{item.year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#475569]">No achievements found yet.</p>
      );
    case 'about':
      return store.about ? (
        <div className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-6 text-[#14213D] shadow-sm">
          <p className="font-semibold">{store.about.name || 'Name not set'}</p>
          <p className="mt-2 text-sm text-[#475569]">{store.about.title || 'Title not set'}</p>
          <p className="mt-2 text-sm text-[#475569]">{store.about.email || 'Email not set'}</p>
        </div>
      ) : (
        <p className="text-[#475569]">About section has not been configured yet.</p>
      );
    case 'contact':
      return store.contact ? (
        <div className="rounded-3xl border border-[#E5E5E5]/30 bg-white p-6 text-[#14213D] shadow-sm">
          <p className="font-semibold">Email</p>
          <p className="mt-1 text-sm text-[#475569]">{store.contact.email || 'Not set'}</p>
          <p className="mt-3 font-semibold">Phone</p>
          <p className="text-sm text-[#475569]">{store.contact.phone || 'Not set'}</p>
          <p className="mt-3 font-semibold">Location</p>
          <p className="text-sm text-[#475569]">{store.contact.location || 'Not set'}</p>
        </div>
      ) : (
        <p className="text-[#475569]">Contact section has not been configured yet.</p>
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
    loading,
  } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

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
    <div className="min-h-screen bg-[#14213D] text-white px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[32px] border border-[#FCA311] bg-black/60 p-8 shadow-2xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#FCA311] mb-2">Admin Section</p>
            <h1 className="text-4xl font-black">{config.title}</h1>
            <p className="mt-3 max-w-2xl text-[#E5E5E5]">{config.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin/dashboard"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              Back to Dashboard
            </Link>
            <button
              onClick={() => fetchPortfolioData()}
              className="rounded-full bg-[#FCA311] px-5 py-3 text-sm font-semibold text-[#14213D] transition hover:bg-[#e69b04]"
            >
              Refresh Data
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-[32px] border border-[#E5E5E5]/20 bg-white p-8 text-[#14213D] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#FCA311]">{config.title}</p>
                <h2 className="mt-2 text-3xl font-bold">{itemCounts} {itemCounts === 1 ? 'item' : 'items'}</h2>
              </div>
            </div>
            {loading ? (
              <p className="text-[#475569]">Refreshing content…</p>
            ) : (
              <div className="space-y-6">
                {renderSectionDetails(sectionKey, { skills, experience, education, research, achievements, about, contact }) ?? (
                  <p className="text-[#475569]">{config.emptyMessage}</p>
                )}
              </div>
            )}
          </div>

          <aside className="rounded-[32px] border border-[#E5E5E5]/20 bg-black/60 p-8 text-[#E5E5E5] shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            <div className="mb-6 rounded-3xl bg-[#14213D] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FCA311]">Quick Tip</p>
              <p className="mt-3 text-sm leading-7">
                Use the dashboard cards to move between sections. This page shows your current stored values and keeps data synced with the portfolio store.
              </p>
            </div>
            <div className="space-y-4 text-sm text-[#E5E5E5]/90">
              <p className="font-semibold text-white">Navigation</p>
              <ul className="space-y-2">
                {Object.entries(sectionConfig).map(([key, value]) => (
                  <li key={key}>
                    <Link
                      to={value.path}
                      className="text-sm text-[#FCA311] hover:text-white"
                    >
                      {value.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
