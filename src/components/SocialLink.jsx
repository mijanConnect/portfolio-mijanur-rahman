export default function SocialLink({ isDark }) {
  return (
    <>
      <div>
        <ul className="flex items-center justify-center gap-12 pt-8">
          <li>
            <a
              href="https://www.linkedin.com/in/mijanConnect"
              target="_blank"
              aria-label="LinkedIn"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-blue-600"
              }`}
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mijanConnect"
              target="_blank"
              aria-label="GitHub"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-blue-600"
              }`}
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a
              href="mailto:mijan.connect@gmail.com"
              target="_blank"
              aria-label="Email"
              className={`text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-blue-600"
              }`}
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
