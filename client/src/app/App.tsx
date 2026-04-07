import { useEffect, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Research } from '../sections/Research';
import { Education } from '../sections/Education';
import { Achievements } from '../sections/Achievements';
import { Contact } from '../sections/Contact';
import { usePortfolioStore } from '../store/portfolioStore';
import { useAdminStore } from '../store/adminStore';
import { Login } from '../pages/admin/Login';
import { Dashboard } from '../pages/admin/Dashboard';
import { Skills as SkillsAdmin } from '../pages/admin/Skills';
import { AdminSection } from '../pages/admin/AdminSection';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAdminStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
};

export default function App() {
  const { fetchPortfolioData } = usePortfolioStore();
  const { isAuthenticated } = useAdminStore();

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  const portfolioPage = (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="research">
        <Research />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={portfolioPage} />
        <Route
          path="/admin/login"
          element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/skills"
          element={
            <ProtectedRoute>
              <SkillsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contact"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/experience"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/education"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/research"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/achievements"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/:section"
          element={
            <ProtectedRoute>
              <AdminSection />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
