export default function About({ isDark }) {
  return (
    <div className="flex items-center justify-center flex-1">
      <h1
        className={`text-center text-3xl md:text-[55px] px-4 transition-colors leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Hi, I'm{" "}
        <span className={`${isDark ? "text-yellow-400" : "text-blue-600"}`}>
          Mijanur Rahman
        </span>
        , a Software Engineer passionate about building scalable and
        high-quality digital solutions.
      </h1>
    </div>
  );
}
