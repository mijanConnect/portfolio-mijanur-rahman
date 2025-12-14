import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function Blog({ isDark }) {
  const [postsToShow, setPostsToShow] = useState(4);

  const allBlogPosts = blogPosts;

  const visiblePosts = allBlogPosts.slice(0, postsToShow);
  const hasMorePosts = postsToShow < allBlogPosts.length;

  const handleLoadMore = () => {
    setPostsToShow((prev) => prev + 2);
  };

  return (
    <>
      <div className="w-full">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Blog
        </h1>
        <p
          className={`text-lg mb-12 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Insights and tutorials on web development, JavaScript, React, and
          more.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
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
              {/* Blog Image */}
              <div className="overflow-hidden h-48 md:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-4 mb-3">
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
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`text-xl md:text-2xl font-bold mb-3 hover:text-accent-dark transition-colors cursor-pointer ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`mb-4 line-clamp-3 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between pt-4 border-t ${
                    isDark ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className={`font-semibold transition-colors flex items-center gap-2 ${
                      isDark
                        ? "text-accent-dark hover:text-accent-dark opacity-80 hover:opacity-100"
                        : "text-accent-light hover:text-accent-light opacity-90 hover:opacity-100"
                    }`}
                  >
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className={`px-8 py-3 font-bold rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                isDark ? "btn-solid-dark" : "btn-solid-light"
              }`}
            >
              Load More Articles
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
