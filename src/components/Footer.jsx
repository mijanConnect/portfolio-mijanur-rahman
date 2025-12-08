export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors`}
    >
      <div className="container mx-auto max-w-[1100px] px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              About Me
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A passionate Software Engineer dedicated to building scalable and
              high-quality digital solutions using modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Me", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
                { label: "Blogs", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-yellow-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mijanConnect"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`text-2xl transition-all ${
                  isDark
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://github.com/mijanConnect"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`text-2xl transition-all ${
                  isDark
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="mailto:mijan.connect@gmail.com"
                aria-label="Email"
                className={`text-2xl transition-all ${
                  isDark
                    ? "text-gray-400 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            isDark ? "border-gray-700" : "border-gray-300"
          } my-8`}
        ></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            &copy; {currentYear} Mijanur Rahman. All rights reserved.
          </p>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Designed & Developed <span className="text-red-500"></span> by Mijan
          </p>
        </div>
      </div>
    </footer>
  );
}
