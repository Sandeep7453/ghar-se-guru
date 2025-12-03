import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CoachingListPage from './pages/CoachingListPage';
import CoachingDetailPage from './pages/CoachingDetailPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import InstituteAdminDashboard from './pages/InstituteAdminDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        
        <div className="main-content flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coaching" element={<CoachingListPage />} />
            <Route path="/coaching/:id" element={<CoachingDetailPage />} />
            <Route path="/login" element={<LoginPage onAuth={handleAuth} userType="student" />} />
            <Route path="/signup" element={<SignupPage onAuth={handleAuth} userType="student" />} />
            <Route path="/institute/login" element={<LoginPage onAuth={handleAuth} userType="institute" />} />
            <Route path="/institute/signup" element={<SignupPage onAuth={handleAuth} userType="institute" />} />
            <Route path="/student/dashboard" element={<StudentDashboard user={user} onLogout={handleLogout} />} />
            <Route path="/institute/dashboard" element={<InstituteAdminDashboard user={user} onLogout={handleLogout} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
