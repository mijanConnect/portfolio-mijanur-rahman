export default function SocialLink({ isDark }) {
  return (
    <>
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-6 md:pt-8">
          <li>
            <a
              href="https://www.linkedin.com/in/mijanConnect"
              target="_blank"
              aria-label="LinkedIn"
              className={`text-2xl md:text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-black hover:text-accent-light"
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
              className={`text-2xl md:text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-black hover:text-accent-light"
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
              className={`text-2xl md:text-3xl transition-all ${
                isDark
                  ? "text-white hover:text-accent-dark"
                  : "text-black hover:text-accent-light"
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
