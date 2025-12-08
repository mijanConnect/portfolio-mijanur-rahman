import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProjectDetails from "./components/ProjectDetails";
import SocialLink from "./components/SocialLink";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Removed unused location variable

  return (
    <>
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        } min-h-screen flex flex-col transition-colors`}
      >
        {/* Theme Toggle Switch - Desktop only */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="hidden md:block fixed top-6 right-6 z-50 focus:outline-none group"
        >
          <div
            className={`relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-300 ${
              isDark
                ? "bg-linear-to-r from-gray-700 to-gray-800"
                : "bg-linear-to-r from-blue-300 to-blue-400"
            } shadow-lg`}
          >
            {/* Sliding Circle */}
            <span
              className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-md transition-all duration-300 ${
                isDark ? "translate-x-1" : "translate-x-11"
              } group-hover:shadow-xl`}
            />
            {/* Moon Icon */}
            <span
              className={`absolute left-2 transition-all duration-300 ${
                isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <i className="fa-solid fa-moon text-lg text-blue-900"></i>
            </span>
            {/* Sun Icon */}
            <span
              className={`absolute right-2 transition-all duration-300 ${
                isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            >
              <i className="fa-solid fa-sun text-lg text-yellow-400"></i>
            </span>
          </div>
        </button>

        <div
          className={`min-h-screen flex flex-col ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } transition-colors`}
        >
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-gray-100"
            } py-2 md:py-16 transition-colors`}
          >
            <div className="container mx-auto max-w-5xl px-4">
              {/* <Logo /> */}
              <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
              <div className="hidden md:block">
                <SocialLink isDark={isDark} />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col py-10 md:py-12">
            <div className="container mx-auto max-w-[1100px] px-4 space-y-6 flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<About isDark={isDark} />} />
                <Route
                  path="/portfolio"
                  element={<Portfolio isDark={isDark} />}
                />
                <Route
                  path="/portfolio/:id"
                  element={<ProjectDetails isDark={isDark} />}
                />
                <Route path="/contact" element={<Contact isDark={isDark} />} />
                <Route path="/blog" element={<Blog isDark={isDark} />} />
                <Route
                  path="/blog/:id"
                  element={<BlogPost isDark={isDark} />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer isDark={isDark} />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up text-xl"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
