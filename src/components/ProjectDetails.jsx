import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function ProjectDetails({ isDark }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div
        className={`w-full py-12 text-center ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => navigate("/portfolio")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            isDark ? "btn-solid-dark" : "btn-solid-light"
          }`}
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <article className="w-full mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/portfolio")}
        className={`mb-6 flex items-center gap-2 ${
          isDark
            ? "text-accent-dark hover:text-accent-dark opacity-80 hover:opacity-100"
            : "text-accent-light hover:text-accent-light opacity-90 hover:opacity-100"
        } font-semibold transition-colors`}
      >
        <i className="fa-solid fa-arrow-left"></i>
        Back to Portfolio
      </button>

      {/* Featured Image */}
      {project.image && (
        <div className="rounded-lg overflow-hidden mb-8 h-96">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs md:text-sm px-4 py-1 rounded-full font-semibold ${
                isDark
                  ? "bg-accent-dark text-gray-900"
                  : "bg-accent-light text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h1>

        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>
      </div>

      {/* Project Details */}
      {project.details && (
        <div
          className={`rounded-lg p-6 mb-8 ${
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
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Project Overview
          </h2>
          <div
            className={`space-y-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {project.details.overview && (
              <div>
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                  }}
                >
                  Overview
                </h3>
                <p>{project.details.overview}</p>
              </div>
            )}

            {project.details.challenge && (
              <div>
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                  }}
                >
                  Challenge
                </h3>
                <p>{project.details.challenge}</p>
              </div>
            )}

            {project.details.solution && (
              <div>
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                  }}
                >
                  Solution
                </h3>
                <p>{project.details.solution}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center gap-3 ${
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
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center`}
                  style={{
                    backgroundColor: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                    color: isDark ? "var(--primary-dark)" : "white",
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </div>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-5 py-2 rounded-full font-semibold border`}
                style={{
                  backgroundColor: isDark
                    ? "rgb(31, 41, 55)"
                    : "rgb(243, 244, 246)",
                  color: isDark
                    ? "var(--accent-color)"
                    : "var(--primary-color)",
                  borderColor: isDark
                    ? "var(--accent-color)"
                    : "var(--primary-color)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Results/Impact */}
      {project.results && project.results.length > 0 && (
        <div
          className={`rounded-lg p-6 mb-8 ${
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
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Results & Impact
          </h2>
          <ul className="space-y-3">
            {project.results.map((result, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <i
                  className={`fa-solid fa-chart-line mt-1`}
                  style={{
                    color: isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)",
                  }}
                ></i>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Live Demo & Source Code Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2`}
              style={{
                backgroundColor: isDark
                  ? "var(--accent-color)"
                  : "var(--primary-color)",
                color: isDark ? "var(--primary-dark)" : "white",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              <i className="fa-solid fa-external-link-alt"></i>
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              <i className="fa-brands fa-github"></i>
              View on GitHub
            </a>
          )}
        </div>
      )}

      {/* Back to Portfolio */}
      <div className="text-center">
        <button
          onClick={() => navigate("/portfolio")}
          className={`px-8 py-3 rounded-full font-semibold transition-colors`}
          style={{
            backgroundColor: isDark
              ? "var(--accent-color)"
              : "var(--primary-color)",
            color: isDark ? "var(--primary-dark)" : "white",
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
          }}
        >
          View More Projects
        </button>
      </div>
    </article>
  );
}
