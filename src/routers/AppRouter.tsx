import React from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import Head from "../components/Head";
import Footer from "../components/Footer";
import ChatPage from "../pages/ChatPage";
import PunktyPage from "../pages/PunktyPage";

const AppRouter: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <Head />
                <HomePage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="content">
                <ServicesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/chat"
            element={
              <div className="content">
                <ChatPage />
              </div>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <div className="content">
                <ChatPage />
              </div>
            }
          />
          <Route
            path="/punkty"
            element={
              <div className="content">
                <PunktyPage />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppRouter;
