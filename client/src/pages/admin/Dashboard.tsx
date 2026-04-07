import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code, 
  LogOut 
} from 'lucide-react';
import { useAdminStore } from '../../store/adminStore';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';

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
    loading 
  } = usePortfolioStore();

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const response = await portfolioApi.getFullPortfolio();
        if (response.success) {
          // Update store with fetched data - this would need to be implemented in store
          console.log('Portfolio data loaded:', response.data);
        }
      } catch (error) {
        console.error('Failed to load portfolio data:', error);
      }
    };

    loadPortfolioData();
  }, []);

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6BCFCB] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#001722]">Portfolio CMS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{user?.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#001722] mb-2">
            Welcome back, {user?.username}!
          </h2>
          <p className="text-gray-600">
            Manage your portfolio content from this central dashboard
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.title}
                onClick={() => navigate(stat.path)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} rounded-lg p-3 text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{stat.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#6BCFCB] transition-colors">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Click to manage
                </p>
              </button>
            );
          })}
        </div>

        {/* Quick Edit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">About Information</h3>
              <button
                onClick={() => navigate('/admin/about')}
                className="text-[#6BCFCB] hover:text-[#5bbfbb] text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {about?.name || 'Not set'}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Title:</span> {about?.title || 'Not set'}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {about?.email || 'Not set'}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <button
                onClick={() => navigate('/admin/contact')}
                className="text-[#6BCFCB] hover:text-[#5bbfbb] text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {contact?.email || 'Not set'}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Phone:</span> {contact?.phone || 'Not set'}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Location:</span> {contact?.location || 'Not set'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
