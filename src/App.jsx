import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import DashboardLayout from './layouts/DashboardLayout';
import CollegeDashboard from './pages/CollegeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CollegePassport from './pages/CollegePassport';
import AdminPlatforms from './pages/AdminPlatforms';
import AdminModeration from './pages/AdminModeration';
import AdminColleges from './pages/AdminColleges';
import CollegePrograms from './pages/CollegePrograms';
import CollegeStats from './pages/CollegeStats';
import Logo from './components/Logo/Logo';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Route change effect: Scroll to top and re-init animations
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Wait a bit for React to render the new route content
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="app-layout">
      {isLoading && (
        <div className="global-preloader">
          <div className="preloader-logo">
            <Logo />
          </div>
          <div className="preloader-text">TALAP</div>
        </div>
      )}
      
      <div className={`app-container ${isLoading ? 'hidden' : ''}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Home />
                </main>
                <Footer />
              </>
            }
          />

          {/* College Cabinet Routes */}
          <Route path="/college" element={<DashboardLayout role="college" />}>
            <Route index element={<CollegeDashboard />} />
            <Route path="passport" element={<CollegePassport />} />
            <Route path="programs" element={<CollegePrograms />} />
            <Route path="stats" element={<CollegeStats />} />
            {/* Additional routes can be added here */}
          </Route>

          {/* Admin Cabinet Routes */}
          <Route path="/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="platforms" element={<AdminPlatforms />} />
            <Route path="moderation" element={<AdminModeration />} />
            <Route path="colleges" element={<AdminColleges />} />
            {/* Additional routes can be added here */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
