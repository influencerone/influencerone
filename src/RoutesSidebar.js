import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/side_bar/SideBar.js'; // Adjust the path based on your file structure
import DashboardPage from './pages/Dashbord/InfluencerDashboard';
import DeshNavbar from './components/NavBar/DeshNav.js';
import Request from './pages/Dashbord/Request.js';
import Brand from './pages/Dashbord/Brand.js';
import PortfolioBar from './pages/Dashbord/PortfolioBar.js';
import Membership from './pages/Dashbord/InfluencerMembership.js';
import About from './pages/Dashbord/About.js';
import UploadWork from './pages/Dashbord/UploadWork.js';
function SideBarRoute() {
  return (
    <Router>
      <div className="flex h-screen"> {/* Added h-screen */}
        <Sidebar />
        <div className="flex-grow flex flex-col overflow-auto"> {/* Added flex and flex-col */}
          <DeshNavbar />
          <div className="flex-grow p-4 overflow-auto" > {/* Added p-4 for padding and flex-grow for full height */}
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/request" element={<Request />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/portfolio" element={<PortfolioBar />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/about" element={<About />} />
              <Route path="/uploadwork" element={<UploadWork />} />
             

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default SideBarRoute;
