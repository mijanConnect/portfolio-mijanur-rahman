import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Portfolio({ isDark }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [displayedProjects, setDisplayedProjects] = useState(4);
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
      "competitive-programming",
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

  const handleLoadMore = () => {
    setDisplayedProjects(displayedProjects + 2);
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
          className={`sticky top-0 z-50 flex flex-wrap gap-3 pb-4 pt-4 border-b ${
            isDark
              ? "border-gray-700 bg-(--background-dark)"
              : "border-gray-300 bg-white"
          }`}
        >
          {[
            "overview",
            "experience",
            "projects",
            "education",
            "skills",
            "certifications",
            "competitive-programming",
          ].map((section) => (
            <button
              key={section}
              onClick={() => handleTabClick(section)}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all capitalize ${
                activeSection === section
                  ? isDark
                    ? "bg-accent-dark text-gray-900"
                    : "bg-accent-light text-white"
                  : isDark
                  ? "bg-gray-800/40 hover:bg-gray-800/60"
                  : "bg-white hover:bg-gray-50"
              }`}
              style={{
                border: `1px solid ${
                  isDark
                    ? "rgba(68, 255, 146, 0.1)"
                    : "rgba(209, 213, 219, 0.5)"
                }`,
              }}
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
                { label: "Years Experience", value: "1.5+" },
                { label: "Projects Completed", value: "10+" },
                { label: "Problems Solved", value: "100+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg text-center ${
                    isDark
                      ? "bg-gray-800/40 hover:bg-gray-800/60"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    border: `1px solid ${
                      isDark
                        ? "rgba(68, 255, 146, 0.1)"
                        : "rgba(209, 213, 219, 0.5)"
                    }`,
                  }}
                >
                  <div
                    className={`text-3xl font-bold mb-2 ${
                      isDark ? "text-accent-dark" : "text-accent-light"
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
            className={`text-3xl font-bold mb-10 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="flex gap-5">
                {/* Left: Logo + Timeline */}
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-md flex items-center justify-center border ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <i
                      className="fa-solid fa-briefcase text-xl"
                      style={{
                        color: isDark
                          ? "var(--accent-color)"
                          : "var(--primary-color)",
                      }}
                    />
                  </div>

                  {/* Vertical line (timeline) */}
                  {index !== portfolioData.experience.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-16 -translate-x-1/2 h-full w-px ${
                        isDark ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  {/* Role */}
                  <h3
                    className={`text-[20px] font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <a
                    href={exp.website}
                    className="inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p
                      className={`text-[16px] font-medium transition ${
                        isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {exp.company}
                    </p>
                  </a>

                  {/* Date */}
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.period}
                  </p>

                  {/* Description (LinkedIn-style bullets) */}
                  <ul
                    className={`list-disc pl-5 mt-3 space-y-2 text-[16px] leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, i) => <li key={i}>{item}</li>)
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>
                </div>
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
            {portfolioData.projects
              .slice(0, displayedProjects)
              .map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all flex flex-col h-full ${
                    isDark
                      ? "bg-gray-800/40 hover:bg-gray-800/60"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    border: `1px solid ${
                      isDark
                        ? "rgba(68, 255, 146, 0.1)"
                        : "rgba(209, 213, 219, 0.5)"
                    }`,
                  }}
                >
                  {/* Content */}
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-[12px] mb-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      (Associated with{" "}
                      <a
                        href={`https://${project.associationURL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {project.association}
                      </a>
                      )
                    </p>

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
                            isDark ? "bg-gray-700" : "bg-gray-100"
                          }`}
                          style={{
                            color: isDark
                              ? "var(--accent-color)"
                              : "var(--primary-color)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/portfolio/${project.id}`);
                      }}
                      className={`inline-flex items-center gap-2 font-semibold transition-colors`}
                      style={{
                        color: isDark
                          ? "var(--accent-color)"
                          : "var(--primary-color)",
                      }}
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
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                          onMouseEnter={(e) =>
                            (e.target.style.color = isDark
                              ? "var(--accent-color)"
                              : "var(--primary-color)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = isDark
                              ? "rgb(107, 114, 128)"
                              : "rgb(75, 85, 99)")
                          }
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
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                          onMouseEnter={(e) =>
                            (e.target.style.color = isDark
                              ? "var(--accent-color)"
                              : "var(--primary-color)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = isDark
                              ? "rgb(107, 114, 128)"
                              : "rgb(75, 85, 99)")
                          }
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

          {/* More Projects Button */}
          {displayedProjects < portfolioData.projects.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className={`px-8 py-3 font-bold rounded-full transition-colors duration-300 flex items-center gap-2 ${
                  isDark ? "btn-solid-dark" : "btn-solid-light"
                }`}
              >
                Load More Projects
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
        <div id="section-education" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>
          <div className="animate-fadeIn space-y-6">
            <div
              className={`rounded-lg`}
              style={{
                border: `1px solid ${
                  isDark
                    ? "rgba(68, 255, 146, 0.1)"
                    : "rgba(209, 213, 219, 0.5)"
                }`,
              }}
            >
              {portfolioData.education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-l-4 ${
                    isDark
                      ? "bg-gray-800/40 hover:bg-gray-800/60"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    borderLeftColor: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className={`text-sm font-semibold`}
                        style={{
                          color: isDark
                            ? "var(--accent-color)"
                            : "var(--primary-color)",
                        }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right text-nowrap">
                      <span
                        className={`text-sm font-semibold block mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.year}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          isDark ? "bg-gray-700" : "bg-gray-100"
                        }`}
                        style={{
                          color: isDark
                            ? "var(--accent-color)"
                            : "var(--primary-color)",
                        }}
                      >
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="section-skills" className="mb-16 scroll-mt-28">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-accent-color" : "text-gray-900"
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
                    <div key={i}>
                      {skill.image ? (
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-8"
                        />
                      ) : (
                        <span
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            isDark
                              ? "bg-gray-800/40 hover:bg-gray-800/60"
                              : "bg-white hover:bg-gray-50"
                          }`}
                          style={{
                            border: `1px solid ${
                              isDark
                                ? "rgba(68, 255, 146, 0.1)"
                                : "rgba(209, 213, 219, 0.5)"
                            }`,
                            color: isDark
                              ? "var(--accent-color)"
                              : "var(--primary-color)",
                          }}
                        >
                          {skill.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div
          id="section-competitive-programming"
          className="mb-16 scroll-mt-28"
        >
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Competitive Programming
          </h2>
          <div className="animate-fadeIn space-y-6">
            {portfolioData.competitiveProgramming.map((program) => (
              <div
                key={program.id}
                className={`p-6 rounded-lg flex items-start gap-4 ${
                  isDark
                    ? "bg-gray-800/40 hover:bg-gray-800/60"
                    : "bg-white hover:bg-gray-50"
                }`}
                style={{
                  border: `1px solid ${
                    isDark
                      ? "rgba(68, 255, 146, 0.1)"
                      : "rgba(209, 213, 219, 0.5)"
                  }`,
                }}
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center`}
                  style={{
                    backgroundColor: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                    color: isDark ? "var(--primary-dark)" : "white",
                  }}
                >
                  <i className={program.icon}></i>
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold mb-2 text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {program.platform}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {program.description}
                  </p>
                  <a
                    href={program.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold transition-colors px-4 py-2 rounded-lg ${
                      isDark
                        ? "bg-gray-700/50 hover:bg-gray-700"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    style={{
                      color: isDark
                        ? "var(--accent-color)"
                        : "var(--primary-color)",
                    }}
                  >
                    View Profile (Handle: {program.handle})
                    <i className="fa-solid fa-external-link-alt"></i>
                  </a>
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
                  isDark
                    ? "bg-gray-800/40 hover:bg-gray-800/60"
                    : "bg-white hover:bg-gray-50"
                }`}
                style={{
                  border: `1px solid ${
                    isDark
                      ? "rgba(68, 255, 146, 0.1)"
                      : "rgba(209, 213, 219, 0.5)"
                  }`,
                }}
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center`}
                  style={{
                    backgroundColor: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                    color: isDark ? "var(--primary-dark)" : "white",
                  }}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.issuer}
                      className="h-6 w-auto"
                    />
                  ) : (
                    <i className="fa-solid fa-certificate"></i>
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p
                        className={`text-sm font-semibold`}
                        style={{
                          color: isDark
                            ? "var(--accent-color)"
                            : "var(--primary-color)",
                        }}
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
                    {cert.certificateURL && (
                      <a
                        href={cert.certificateURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-semibold transition-colors px-3 py-1.5 rounded mt-3 text-sm ${
                          isDark
                            ? "bg-gray-700/50 hover:bg-gray-700"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        style={{
                          color: isDark
                            ? "var(--accent-color)"
                            : "var(--primary-color)",
                        }}
                      >
                        View Certificate
                        <i className="fa-solid fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
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
