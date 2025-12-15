import { useState } from "react";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: "fa-phone",
      label: "Phone",
      value: "+880 1735 893941",
      link: "tel:+8801735893941",
    },
    {
      icon: "fa-envelope",
      label: "Email",
      value: "mijan.connect@gmail.com",
      link: "mailto:mijan.connect@gmail.com",
    },
    {
      icon: "fa-map-marker-alt",
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
    },
  ];

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
            Get In Touch
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
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
                    className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                      isDark
                        ? "bg-accent-dark text-gray-900"
                        : "bg-accent-light text-white"
                    }`}
                  >
                    <i className={`fa-solid ${info.icon}`}></i>
                  </div>
                  <div>
                    <h3
                      className={`font-semibold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.label}
                    </h3>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`mt-8 p-6 rounded-lg ${
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
              <h3
                className={`font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mijanConnect"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)",
                    color: isDark ? "white" : "var(--primary-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)";
                    e.currentTarget.style.color = isDark
                      ? "var(--primary-dark)"
                      : "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)";
                    e.currentTarget.style.color = isDark
                      ? "white"
                      : "var(--primary-color)";
                  }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mijanConnect"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)",
                    color: isDark ? "white" : "var(--primary-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)";
                    e.currentTarget.style.color = isDark
                      ? "var(--primary-dark)"
                      : "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)";
                    e.currentTarget.style.color = isDark
                      ? "white"
                      : "var(--primary-color)";
                  }}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="mailto:mijan.connect@gmail.com"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)",
                    color: isDark ? "white" : "var(--primary-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "var(--accent-color)"
                      : "var(--primary-color)";
                    e.currentTarget.style.color = isDark
                      ? "var(--primary-dark)"
                      : "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "rgb(55, 65, 81)"
                      : "rgb(229, 231, 235)";
                    e.currentTarget.style.color = isDark
                      ? "white"
                      : "var(--primary-color)";
                  }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`p-8 rounded-lg ${
                isDark ? "bg-gray-800/40" : "bg-white hover:bg-gray-50"
              }`}
              style={{
                border: `1px solid ${
                  isDark
                    ? "rgba(68, 255, 146, 0.1)"
                    : "rgba(209, 213, 219, 0.5)"
                }`,
              }}
            >
              {isSubmitted && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    isDark
                      ? "bg-green-900/30 border border-green-500/50"
                      : "bg-green-100 border border-green-500"
                  }`}
                >
                  <div className="flex items-center gap-2 text-green-500">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Please enter your full name"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(209, 213, 219, 0.05)"
                        : "white",
                      borderColor: isDark
                        ? "rgba(209, 213, 219, 0.1)"
                        : "rgb(209, 213, 219)",
                      color: isDark ? "white" : "rgb(17, 24, 39)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = isDark
                        ? "var(--accent-color)"
                        : "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isDark
                        ? "rgb(75, 85, 99)"
                        : "rgb(209, 213, 219)";
                    }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Please enter your email address"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(209, 213, 219, 0.05)"
                        : "white",
                      borderColor: isDark
                        ? "rgba(209, 213, 219, 0.1)"
                        : "rgb(209, 213, 219)",
                      color: isDark ? "white" : "rgb(17, 24, 39)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = isDark
                        ? "var(--accent-color)"
                        : "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isDark
                        ? "rgb(75, 85, 99)"
                        : "rgb(209, 213, 219)";
                    }}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Please enter your message or inquiry..."
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none resize-none`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(209, 213, 219, 0.05)"
                        : "white",
                      borderColor: isDark
                        ? "rgba(209, 213, 219, 0.1)"
                        : "rgb(209, 213, 219)",
                      color: isDark ? "white" : "rgb(17, 24, 39)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = isDark
                        ? "var(--accent-color)"
                        : "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isDark
                        ? "rgb(75, 85, 99)"
                        : "rgb(209, 213, 219)";
                    }}
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isDark ? "btn-solid-dark" : "btn-solid-light"
                  }`}
                >
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
