import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import resumePdf from "../assets/Resume.pdf";

export default function About({ isDark }) {
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

  return (
    // <div className="flex items-center justify-center flex-1">
    //   <h1
    //     className={`text-center text-3xl md:text-[55px] px-4 transition-colors leading-relaxed ${
    //       isDark ? "text-gray-300" : "text-gray-700"
    //     }`}
    //   >
    //     Hi, I'm{" "}
    //     <span className={`${isDark ? "text-accent-dark" : "text-accent-light"}`}>
    //       Mijanur Rahman
    //     </span>
    //     , a Software Engineer passionate about building scalable and
    //     high-quality digital solutions.
    //   </h1>
    // </div>
    // <section className="flex items-center justify-center flex-1">
    //   {/* Profile Image */}
    //   <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg bg-white">
    //     <img
    //       src="/assets/avatar.png"
    //       alt="Profile"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Text Content */}
    //   <div className="max-w-md">
    //     <p className="text-sm text-gray-500 mb-1">Software Engineer</p>
    //     <h1 className="text-3xl font-bold text-white mb-3">Mijanur Rahman</h1>

    //     <p className="text-gray-600 mb-6">
    //       Software Engineer passionate about building scalable and high-quality
    //       digital solutions.
    //     </p>

    //     {/* Buttons */}
    //     <div className="flex gap-4">
    //       <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
    //         Download CV
    //       </button>
    //       <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
    //         Portfolio
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 flex-1">
      <div className="order-2 md:order-1 w-full md:w-[420px] md:self-center">
        {/* Profile Image */}
        <div
          className={`w-full overflow-hidden shadow-md rounded-lg ${
            isDark
              ? "bg-gray-800/40 hover:bg-gray-800/60"
              : "bg-white hover:bg-gray-50"
          }`}
          style={{
            border: `1px solid ${
              isDark ? "rgba(68, 255, 146, 0.1)" : "rgba(209, 213, 219, 0.5)"
            }`,
          }}
        >
          <img
            src="/assets/avatar.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Description */}
      <div
        className={`order-1 md:order-2 rounded-lg p-6 md:p-8 shadow-md w-full md:w-[420px] ${
          isDark
            ? "bg-gray-800/40 hover:bg-gray-800/60"
            : "bg-white hover:bg-gray-50"
        }`}
        style={{
          border: `1px solid ${
            isDark ? "rgba(68, 255, 146, 0.1)" : "rgba(209, 213, 219, 0.5)"
          }`,
        }}
      >
        <p
          className={`text-xs md:text-sm mb-0 lg:mb-1 ${
            isDark ? "text-accent-dark" : "text-accent-light"
          }`}
        >
          Software Engineer
        </p>
        <h1
          className={`text-2xl md:text-4xl font-bold mb-1 lg:mb-3 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Mijanur Rahman
        </h1>
        <p
          className={`text-sm md:text-base mb-4 lg:mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {portfolioData.overview.content}
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <button
            onClick={handleResumeDownload}
            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition ${
              isDark ? "btn-primary-dark" : "btn-primary-light"
            }`}
          >
            Resume
            <i className="fa-solid fa-download text-sm"></i>
          </button>
          <button
            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition ${
              isDark ? "btn-solid-dark" : "btn-solid-light"
            }`}
          >
            <Link to="/portfolio">
              <a>Portfolio</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
