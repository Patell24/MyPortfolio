module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }
        
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        "shape-change-shake": "shapeChange 10s infinite, shake 0.5s infinite",
      },
      keyframes: {
        shapeChange: {
          "0%": { borderRadius: "50% 50% 50% 50%" }, // Circle
          "25%": { borderRadius: "60% 30% 40% 20%" }, // Rounded top
          "50%": { borderRadius: "20% 40% 50% 70%" }, // Rounded left and right
          "75%": { borderRadius: "50% 40% 20% 70%" }, // Rounded bottom
          "100%": { borderRadius: "50% 50% 50% 50%" }, // Back to Circle
        },
        shake: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
        },
      },
    },
  },
  plugins: [],
};
