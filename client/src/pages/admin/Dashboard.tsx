import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Code,
  LogOut,
} from 'lucide-react';
import { useAdminStore } from '../../store/adminStore';
import { usePortfolioStore } from '../../store/portfolioStore';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAdminStore();
  const {
    about,
    skills,
    experience,
    education,
    research,
    achievements,
    contact,
    loading,
    fetchPortfolioData,
  } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const stats = [
    {
      title: 'Skills Categories',
      count: skills?.length || 0,
      icon: Code,
      color: 'bg-blue-500',
      path: '/admin/skills',
    },
    {
      title: 'Experience',
      count: experience?.length || 0,
      icon: Briefcase,
      color: 'bg-green-500',
      path: '/admin/experience',
    },
    {
      title: 'Education',
      count: education?.length || 0,
      icon: GraduationCap,
      color: 'bg-purple-500',
      path: '/admin/education',
    },
    {
      title: 'Research',
      count: research?.length || 0,
      icon: BookOpen,
      color: 'bg-orange-500',
      path: '/admin/research',
    },
    {
      title: 'Achievements',
      count: achievements?.length || 0,
      icon: Award,
      color: 'bg-pink-500',
      path: '/admin/achievements',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#14213D] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-[#FCA311] mx-auto" />
          <p className="mt-4 text-[#E5E5E5]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14213D] text-white">
      <header className="bg-black/95 border-b border-[#FCA311] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between h-24">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#FCA311] mb-1">Admin Panel</p>
              <h1 className="text-3xl font-black tracking-tight">Portfolio CMS</h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[#E5E5E5]">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/10">
                <User className="w-5 h-5 text-[#FCA311]" />
                <span>{user?.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-[#FCA311] bg-[#FCA311] px-4 py-2 text-sm font-semibold text-[#14213D] transition hover:bg-[#e69b04]"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#FCA311] mb-2">Welcome back</p>
              <h2 className="text-4xl font-extrabold text-white">Hello, {user?.username}.</h2>
              <p className="mt-3 max-w-2xl text-[#E5E5E5]">
                This dashboard shows your portfolio content counts and quick links into the CMS sections.
              </p>
            </div>
            <div className="rounded-3xl bg-[#E5E5E5]/10 px-6 py-5 text-right text-[#FCA311] border border-white/10">
              <p className="text-sm uppercase tracking-[0.35em]">Current Platform</p>
              <p className="mt-3 text-2xl font-semibold">Admin CMS</p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.title}
                to={stat.path}
                className="group rounded-3xl border border-white/10 bg-[#E5E5E5] p-6 text-[#14213D] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#FCA311]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14213D] text-[#FCA311] shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-extrabold">{stat.count}</span>
                </div>
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="mt-2 text-sm text-[#475569]">Manage {stat.title.toLowerCase()} and update content.</p>
              </Link>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="group rounded-[32px] border border-white/10 bg-gradient-to-br from-white via-[#F9FAFB] to-white p-6 text-[#14213D] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_75px_rgba(0,0,0,0.16)]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#475569]">
                  About profile
                </span>
                <h3 className="mt-4 text-2xl font-bold">About</h3>
                <p className="mt-2 text-sm text-[#475569]">Overview of your personal profile details.</p>
              </div>
              <Link
                to="/admin/about"
                className="rounded-full bg-[#FCA311] px-4 py-2 text-sm font-semibold text-[#14213D] shadow-sm transition hover:bg-[#e69b04]"
              >
                Edit
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <p><span className="font-semibold text-slate-700">Name:</span> <span className="text-slate-600">{about?.name || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Title:</span> <span className="text-slate-600">{about?.title || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Email:</span> <span className="text-slate-600">{about?.email || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Location:</span> <span className="text-slate-600">{about?.location || 'Not set'}</span></p>
            </div>
          </div>

          <div className="group rounded-[32px] border border-white/10 bg-gradient-to-br from-white via-[#F9FAFB] to-white p-6 text-[#14213D] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_75px_rgba(0,0,0,0.16)]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#475569]">
                  Contact info
                </span>
                <h3 className="mt-4 text-2xl font-bold">Contact</h3>
                <p className="mt-2 text-sm text-[#475569]">Quick access to your contact information.</p>
              </div>
              <Link
                to="/admin/contact"
                className="rounded-full bg-[#FCA311] px-4 py-2 text-sm font-semibold text-[#14213D] shadow-sm transition hover:bg-[#e69b04]"
              >
                Edit
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <p><span className="font-semibold text-slate-700">Email:</span> <span className="text-slate-600">{contact?.email || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Phone:</span> <span className="text-slate-600">{contact?.phone || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Location:</span> <span className="text-slate-600">{contact?.location || 'Not set'}</span></p>
              <p><span className="font-semibold text-slate-700">Additional:</span> <span className="text-slate-600">{contact?.additionalInfo || 'No extra details'}</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
