import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function BlogPost({ isDark }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div
        className={`w-full py-12 text-center ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            isDark ? "btn-solid-dark" : "btn-solid-light"
          }`}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="w-full max-w-[1000px] mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/blog")}
        className={`mb-6 flex items-center gap-2 ${
          isDark
            ? "text-accent-dark hover:text-accent-dark opacity-80 hover:opacity-100"
            : "text-accent-light hover:text-accent-light opacity-90 hover:opacity-100"
        } font-semibold transition-colors`}
      >
        <i className="fa-solid fa-arrow-left"></i>
        Back to Blog
      </button>

      {/* Featured Image */}
      <div className="rounded-lg overflow-hidden mb-8 h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span
            className={`text-xs md:text-sm px-3 py-1 rounded-full font-semibold ${
              isDark
                ? "bg-accent-dark text-gray-900"
                : "bg-accent-light text-white"
            }`}
          >
            {post.category}
          </span>
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {post.date}
          </span>
        </div>

        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {post.title}
        </h1>

        <div
          className={`flex items-center gap-2 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <i className="fa-solid fa-user-circle text-lg"></i>
          <span className="font-semibold">{post.author}</span>
        </div>
      </div>

      {/* Post Content */}
      <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none mb-12`}>
        <div
          className={`text-lg leading-relaxed space-y-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Author Section */}
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
        <h3
          className={`text-xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          About the Author
        </h3>
        <p className={isDark ? "text-gray-400" : "text-gray-600"}>
          {post.author} is a passionate web developer and technical writer with
          years of experience in building scalable web applications.
        </p>
      </div>

      {/* Related Posts or CTA */}
      <div className="text-center">
        <button
          onClick={() => navigate("/blog")}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors`}
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
          Read More Articles
        </button>
      </div>
    </article>
  );
}
