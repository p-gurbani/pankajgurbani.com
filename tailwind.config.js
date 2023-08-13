/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F8F8F8",
          150: "#EBEBEB",
          200: "#E0E0E0",
          300: "#C8C8C8",
          400: "#888888",
          500: "#707070",
          600: "#505050",
          700: "#383838",
          800: "#282828",
          900: "#101010",
        },
        heading: "#292929",
        "heading-highlight": "#13907D",
        body: "#1f1f1f",
        "body-bg": "#ffffff",
        "cta-gradient-start": "#3FA3E4",
        "cta-gradient-end": "#E55D87",
        "card-bg": "#F8F8F8",
        "card-bg-1": "#E1E8F2",
        "card-bg-2": "#E1F1F3",
        "card-bg-3": "#D1E1F3",
        "ebook-section-bg": "#E1F1F3",
        "testimonial-section-bg": "#334b6d",
        // night mode colors
        "night-heading": "#E2E5E8",
        "night-heading-highlight": "#1BCEA5",
        "night-body": "#C1C1C1",
        "night-body-bg": "#050505",
        "night-cta-gradient-start": "#2A61C6",
        "night-cta-gradient-end": "#834B6D",
        "night-card-bg": "#191919",
        "night-card-bg-1": "#2D3748",
        "night-card-bg-2": "#134b5d",
        "night-card-bg-3": "#334b6d",
        "night-ebook-section-bg": "#134b5d",
        "night-testimonial-section-bg": "#123553",
      },
      backgroundImage: (theme) => ({
        "cta-gradient": `linear-gradient(to right, ${theme(
          "colors.cta-gradient-start"
        )} 0%, ${theme("colors.cta-gradient-end")} 100%)`,
        "night-cta-gradient": `linear-gradient(to right, ${theme(
          "colors.night-cta-gradient-start"
        )} 0%, ${theme("colors.night-cta-gradient-end")} 100%)`,
      }),
      animation: {
        border: "border 3s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
