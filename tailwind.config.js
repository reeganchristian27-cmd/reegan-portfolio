/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(0.65 0.3 250)",
        secondary: "oklch(0.98 0.005 247)",
        muted: "oklch(0.97 0.005 247)",
        "muted-foreground": "oklch(0.55 0.035 257)",
        "primary-foreground": "oklch(1 0 0)",
        border: "oklch(0.92 0.015 255)",
      },
    },
  },
  plugins: [],
  darkMode: ["class", "class"],
}
