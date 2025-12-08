import { useState } from "react";

export default function Portfolio({ isDark }) {
  const [activeSection, setActiveSection] = useState("overview");

  const portfolioData = {
    overview: {
      title: "Overview",
      content: `I'm a passionate Software Engineer with a proven track record of building scalable and high-quality digital solutions. With expertise in modern web technologies and a commitment to continuous learning, I deliver exceptional results that drive business growth and user satisfaction.`,
    },
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description:
          "Leading frontend development team, architecting responsive web applications using React and Next.js",
      },
      {
        role: "Full Stack Developer",
        company: "Digital Innovations Ltd.",
        period: "2021 - 2023",
        description:
          "Developed full-stack web applications, optimized performance, and mentored junior developers",
      },
      {
        role: "Junior Web Developer",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description:
          "Built responsive websites using HTML, CSS, and JavaScript. Collaborated with design teams.",
      },
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Full-stack e-commerce solution with React frontend and Node.js backend",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        link: "#",
      },
      {
        title: "Task Management App",
        description:
          "Real-time task management application with drag-and-drop functionality",
        tags: ["Next.js", "Firebase", "React DnD"],
        link: "#",
      },
      {
        title: "Personal Blog Platform",
        description:
          "Blogging platform with markdown support and SEO optimization",
        tags: ["React", "Next.js", "Markdown", "PostgreSQL"],
        link: "#",
      },
      {
        title: "Portfolio Website",
        description:
          "Modern responsive portfolio with dark mode and smooth animations",
        tags: ["React", "Tailwind CSS", "React Router"],
        link: "#",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Daffodil International University",
        year: "2021",
        gpa: "3.8/4.0",
      },
    ],
    skills: [
      {
        category: "Frontend",
        skills: [
          "HTML",
          "CSS",
          "SCSS",
          "JavaScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
      },
      {
        category: "Tools & Others",
        skills: ["Git", "GitHub", "Docker", "REST APIs", "Responsive Design"],
      },
    ],
    certifications: [
      {
        title: "React Advanced Patterns",
        issuer: "Udemy",
        date: "2023",
      },
      {
        title: "Web Performance Optimization",
        issuer: "Google",
        date: "2023",
      },
      {
        title: "Full Stack JavaScript",
        issuer: "The Odin Project",
        date: "2022",
      },
    ],
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
        <div
          className={`flex flex-wrap gap-3 mb-12 pb-6 border-b ${
            isDark ? "border-gray-700" : "border-gray-300"
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
              onClick={() => setActiveSection(section)}
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
        {activeSection === "overview" && (
          <div className="animate-fadeIn">
            <p
              className={`text-lg leading-relaxed ${
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
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
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
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
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
                <a
                  href={project.link}
                  className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                    isDark
                      ? "text-yellow-400 hover:text-yellow-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  View Project
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
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
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
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
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
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
        )}
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
