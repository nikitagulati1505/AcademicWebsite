// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Certificates from './pages/Certificates';
import Blank from './pages/Blank';
import MtechtoPhd from './pages/MtechtoPhd';
import Travel from './pages/Travel';
import Graduation from './pages/Graduation';
import Examination from './pages/Examination';
import Ugfaqs from './pages/Ugfaqs';
import Faq from './pages/Faq';
import AcademicTeam from './pages/AcademicTeam';
import BeforeYouArrive from './pages/BeforeYouArrive';
import BTechToPhD from './pages/Btechtophd';

// Import new components
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/mtechtoPhd" element={<MtechtoPhd />} /> 
          <Route path="/travel" element={<Travel />} /> 
          <Route path="/graduation" element={<Graduation />} /> 
          <Route path="/examination" element={<Examination />} /> 
          <Route path="/ugfaqs" element={<Ugfaqs />} />
          <Route path="/academic-team" element={<AcademicTeam />} /> 
          <Route path="/pgfaqs" element={<Faq />}/>
          <Route path="/certificates" element={<Certificates />}/>
          <Route path="/beforeYouArrive" element={<BeforeYouArrive/>}/>
          <Route path="/btechtophd" element={<BTechToPhD/>}/>
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
