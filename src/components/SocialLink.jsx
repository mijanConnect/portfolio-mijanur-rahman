export default function SocialLink({ isDark }) {
  const getThemeColor = (colorName) => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue(colorName)
      .trim();
    return color || colorName === "--accent-color";
  };

  return (
    <>
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-6 md:pt-8">
          <li>
            <a
              href="https://www.linkedin.com/in/mijanConnect"
              target="_blank"
              aria-label="LinkedIn"
              className="text-2xl md:text-3xl transition-all"
              style={{
                color: isDark ? "white" : "black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? getThemeColor("--accent-color")
                  : getThemeColor("--primary-color");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? "white" : "black";
              }}
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mijanConnect"
              target="_blank"
              aria-label="GitHub"
              className="text-2xl md:text-3xl transition-all"
              style={{
                color: isDark ? "white" : "black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? getThemeColor("--accent-color")
                  : getThemeColor("--primary-color");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? "white" : "black";
              }}
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a
              href="mailto:mijan.connect@gmail.com"
              target="_blank"
              aria-label="Email"
              className="text-2xl md:text-3xl transition-all"
              style={{
                color: isDark ? "white" : "black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark
                  ? getThemeColor("--accent-color")
                  : getThemeColor("--primary-color");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? "white" : "black";
              }}
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
