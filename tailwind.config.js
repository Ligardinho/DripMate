/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust based on your project
    theme: {
      extend: {
        boxShadow: {
          'br': '5px 5px 10px rgba(0, 0, 0, 0.25)', // bottom-right shadow
        },
      },
    },
    plugins: [],
  }
  