import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top helper component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

// Layout wrapper that provides Sticky Navbar, Footer, and Floating WhatsApp
function StudioLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Visual Intro Reel Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Main Website Pages within Studio Layout */}
        <Route
          path="/home"
          element={
            <StudioLayout>
              <Home />
            </StudioLayout>
          }
        />
        <Route
          path="/about"
          element={
            <StudioLayout>
              <About />
            </StudioLayout>
          }
        />
        <Route
          path="/services"
          element={
            <StudioLayout>
              <Services />
            </StudioLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <StudioLayout>
              <Gallery />
            </StudioLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <StudioLayout>
              <Contact />
            </StudioLayout>
          }
        />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}
