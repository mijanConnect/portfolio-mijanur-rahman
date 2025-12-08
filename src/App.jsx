import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  const [isDark, setIsDark] = useState(true);
  // Removed unused location variable

  return (
    <>
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        } min-h-screen flex flex-col transition-colors`}
      >
        {/* Theme Toggle Switch */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 focus:outline-none group"
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
          className={`${
            isDark ? "bg-[#141414]" : "bg-gray-100"
          } py-16 transition-colors`}
        >
          {/* <Logo /> */}
          <Navbar isDark={isDark} />
          <SocialLink isDark={isDark} />
        </div>
        <div
          className={`flex-1 ${
            isDark ? "bg-black text-white" : "bg-white text-gray-900"
          } py-12 transition-colors`}
        >
          <div className="container mx-auto max-w-[1000px] space-y-6">
            <Routes>
              <Route path="/" element={<About isDark={isDark} />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact isDark={isDark} />} />
              <Route path="/blog" element={<Blog isDark={isDark} />} />
              <Route path="/blog/:id" element={<BlogPost isDark={isDark} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
