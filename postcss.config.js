/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // all HTML files in root
    "./**/*.html",    // all HTML files in subfolders
    "./**/*.js"       // all JS files
  ],
  theme: { extend: {} },
  plugins: [],
};