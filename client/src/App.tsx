import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAdminStore } from './store/adminStore';

// Import components
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Research } from './sections/Research';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';

// Import admin pages
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { Skills as SkillsAdmin } from './pages/admin/Skills';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAdminStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

function App() {
  const { isAuthenticated } = useAdminStore();

  return (
    <Router>
      <Routes>
        {/* Public Portfolio Routes */}
        <Route path="/" element={
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
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={
          isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Login />
        } />
        
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/admin/skills" element={
          <ProtectedRoute>
            <SkillsAdmin />
          </ProtectedRoute>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
