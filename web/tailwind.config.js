/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: {
          50: "#F9FAFA",
          100: "#F3F4F5",
          200: "#E7EAEB",
          300: "#D6DADB",
          400: "#B8BECA",
          500: "#949BAB",
          600: "#808591",
          700: "#1B253A",
          800: "#2C2D2E",
          900: "#1C1D1E",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        dropdown: {
          DEFAULT: "hsl(var(--dropdown))",
          foreground: "hsl(var(--dropdown-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#F5F5FF",
          100: "#EAEFFE",
          200: "#96B0F9",
          300: "#4270F4",
          400: "#2D60F3",
          500: "#2956DB",
          600: "#1F43AA",
          700: "#17307A",
          800: "#0D1D49",
          900: "#040A18",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#FFF7FE",
          100: "#F5E9FD",
          200: "#E0BCF9",
          300: "#B862F1",
          400: "#991FEB",
          500: "#7A19BC",
          600: "#5C138D",
          700: "#3D0C5E",
          800: "#2E0946",
          900: "#0F0317",
        },
        shade: {
          light: "#E7E8EB",
          dark: "#01050E",
        },
        system: {
          red: "#FF3B30",
          green: "#34C759",
          blue: "#007AFF",
          danger: "#4b2426",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        primaryBorder: "#CCCCCC14",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "left top" },
          "100%": { backgroundPosition: "right bottom" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
