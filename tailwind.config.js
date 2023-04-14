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
        "cta-gradient-start": "#4FB3E4",
        "cta-gradient-end": "#E55D87",
        "card-bg": "#F8F8F8",
        "card-bg-1": "#E1E8F2",
        "card-bg-2": "#E1F1F3",
        "card-bg-3": "#F4EFDA",
        "ebook-section-bg": "#DCF0FA",
        "testimonial-section-bg": "#224563",
        // night mode colors
        "night-heading": "#E2E5E8",
        "night-heading-highlight": "#2BDE95",
        "night-body": "#D1D1D1",
        "night-body-bg": "#171717",
        "night-cta-gradient-start": "#3a6186",
        "night-cta-gradient-end": "#734b6d",
        "night-card-bg": "#232323",
        "night-card-bg-1": "#2D3748",
        "night-card-bg-2": "#3D446f",
        "night-card-bg-3": "#334b6d",
        "night-ebook-section-bg": "#334b6d",
        "night-testimonial-section-bg": "#2A3548",
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
