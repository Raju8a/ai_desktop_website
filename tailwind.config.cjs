/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#050509",
        "bg-dark-soft": "#050814",
        "accent": "#38bdf8", // soft cyan
        "accent-soft": "#0f172a",
      },
      boxShadow: {
        "soft-glow": "0 0 60px rgba(56, 189, 248, 0.25)",
      },
    },
  },
  plugins: [],
};
