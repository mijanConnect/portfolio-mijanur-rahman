import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Portfolio({ isDark }) {
  const [activeSection, setActiveSection] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace("section-", "");
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = [
      "overview",
      "experience",
      "projects",
      "education",
      "skills",
      "certifications",
    ];
    sections.forEach((section) => {
      const element = document.getElementById(`section-${section}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(`section-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="w-full">
        {/* Header */}
        <div className="mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Portfolio
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            A showcase of my professional journey, projects, and expertise
          </p>
        </div>

        {/* Navigation Tabs */}
        {/* Sticky Navigation Tabs */}
        <div
          className={`sticky top-0 z-50 flex flex-wrap gap-3 pb-6 pt-4 border-b ${
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"
          }`}
        >
          {[
            "overview",
            "experience",
            "projects",
            "education",
            "skills",
            "certifications",
          ].map((section) => (
            <button
              key={section}
              onClick={() => handleTabClick(section)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                activeSection === section
                  ? isDark
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-blue-600 text-white"
                  : isDark
                  ? "bg-gray-800 text-gray-400 hover:text-white"
                  : "bg-gray-200 text-gray-600 hover:text-gray-900"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Content Sections */}

        {/* Overview Section */}
        <div id="section-overview" className="mb-16 scroll-mt-28">
          <div className="animate-fadeIn">
            <p
              className={`text-lg leading-relaxed mt-4 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {portfolioData.overview.content}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Projects Completed", value: "15+" },
                { label: "Happy Clients", value: "10+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg text-center ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-2 ${
                      isDark ? "text-yellow-400" : "text-blue-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="section-experience" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="animate-fadeIn space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-l-4 ${
                  isDark
                    ? "bg-gray-800 border-yellow-400"
                    : "bg-gray-50 border-blue-600"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      isDark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div id="section-projects" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-750 hover:shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100 hover:shadow-lg"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? "bg-gray-700 text-yellow-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/portfolio/${project.id}`);
                    }}
                    className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                      isDark
                        ? "text-yellow-400 hover:text-yellow-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    View Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl transition-colors ${
                          isDark
                            ? "text-gray-400 hover:text-yellow-400"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                        title="View on GitHub"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl transition-colors ${
                          isDark
                            ? "text-gray-400 hover:text-yellow-400"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                        title="View Live Demo"
                      >
                        <i className="fa-solid fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="section-education" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>
          <div className="animate-fadeIn space-y-6">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-l-4 ${
                  isDark
                    ? "bg-gray-800 border-yellow-400"
                    : "bg-gray-50 border-blue-600"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-semibold block mb-1 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {edu.year}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? "bg-gray-700 text-yellow-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div id="section-skills" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h2>
          <div className="animate-fadeIn space-y-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3
                  className={`text-lg font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        isDark
                          ? "bg-gray-800 text-yellow-400 border border-yellow-400/30"
                          : "bg-blue-100 text-blue-600 border border-blue-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div id="section-certifications" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Certifications
          </h2>
          <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg flex items-start gap-4 ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDark
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold ${
                      isDark ? "text-yellow-400" : "text-blue-600"
                    }`}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}
