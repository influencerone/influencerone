import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import LoginInfluencer from "./pages/registration_page/Login";
import Sidebar from "./components/side_bar/SideBar";
import DeshBoard from "./pages/Dashbord/DeshBoard"; // Make sure this path is correct
// Import your other pages as needed
// import Request from './pages/Request';
// import Brand from './pages/Brand';
// import Portfolio from './pages/Portfolio';
// import Membership from './pages/Membership';
// import About from './pages/About';
// import Upload from './pages/Upload';
// import Settings from './pages/Settings';

export default function Rout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{ index: "/", element: <LandingPage /> }],
    },
    {
      path: "dashboard",
      element: (
        <div className="flex w-full w-full">
          <Sidebar />
          <DeshBoard />
        </div>
      ),
    },
    // { path: 'request', element: <Request /> },
    // { path: 'brand', element: <Brand /> },
    // { path: 'portfolio', element: <Portfolio /> },
    // { path: 'membership', element: <Membership /> },
    // { path: 'about', element: <About /> },
    // { path: 'upload', element: <Upload /> },
    // { path: 'settings', element: <Settings /> },
    { path: "/logout", element: <LoginInfluencer /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
