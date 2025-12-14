import { useState } from "react";
import { NavLink } from "react-router-dom";
import resumePdf from "../assets/Resume.pdf";

export default function Navbar({ isDark, onToggleDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const base = "text-lg md:text-2xl font-semibold transition-all";
  const inactive = isDark
    ? "text-white hover:text-gray-300"
    : "text-gray-900 hover:text-gray-600";
  const activeCls = isDark
    ? "text-accent-dark border-b-2 border-accent-dark pb-1"
    : "text-accent-light border-b-2 border-accent-light pb-1";

  const linkClass = ({ isActive }) =>
    `${base} ${isActive ? activeCls : inactive}`;

  const links = [
    { to: "/", label: "About Me", end: true },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Resume_of_Mijanur_Rahman.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="w-full">
      <div className="relative">
        {/* Mobile header with toggle, social links, and hamburger */}
        <div
          className={`md:hidden flex items-center justify-between py-4 ${
            isOpen ? "mb-4" : ""
          }`}
        >
          {/* Theme Toggle - Left side */}
          <button
            onClick={onToggleDark}
            className="inline-flex items-center justify-center focus:outline-none group"
            aria-label="Toggle dark mode"
          >
            <div
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 shadow-lg`}
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(to right, rgb(55, 65, 81), rgb(31, 41, 55))"
                  : `linear-gradient(to right, var(--primary-color), var(--primary-color))`,
              }}
            >
              {/* Sliding Circle */}
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-all duration-300 ${
                  isDark ? "translate-x-1" : "translate-x-9"
                } group-hover:shadow-xl`}
              />
              {/* Moon Icon */}
              <span
                className={`absolute left-2 transition-all duration-300 ${
                  isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <i
                  className="fa-solid fa-moon text-xs"
                  style={{ color: "var(--primary-dark)" }}
                ></i>
              </span>
              {/* Sun Icon */}
              <span
                className={`absolute right-2 transition-all duration-300 ${
                  isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              >
                <i
                  className="fa-solid fa-sun text-xs"
                  style={{ color: "var(--primary-color)" }}
                ></i>
              </span>
            </div>
          </button>

          {/* Social Links - Center (always show) */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/mijanConnect"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-gray-900 hover:text-accent-light"
              }`}
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/mijanConnect"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-gray-900 hover:text-accent-light"
              }`}
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="mailto:mijan.connect@gmail.com"
              aria-label="Email"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-gray-900 hover:text-accent-light"
              }`}
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </div>

          {/* Hamburger button - Right side */}
          <button
            onClick={handleToggle}
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${
              isDark
                ? "text-white hover:bg-gray-800"
                : "text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-3xl" />
            ) : (
              <i className="fa-solid fa-bars text-3xl" />
            )}
          </button>
        </div>

        {/* Navigation menu */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12 py-4 md:py-0 items-center ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {links.map((link) => (
            <li key={link.to} onClick={handleClose}>
              <NavLink to={link.to} end={link.end} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li onClick={handleClose}>
            <button
              onClick={handleResumeDownload}
              className={`${base} inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isDark ? "btn-solid-dark" : "btn-solid-light"
              }`}
            >
              Resume
              <i className="fa-solid fa-download text-sm"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
