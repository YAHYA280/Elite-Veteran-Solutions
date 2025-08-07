import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Enhanced color palette for dark theme
        navy: {
          50: "#f0f4ff",
          100: "#e0eafe",
          200: "#c7d6fe",
          300: "#a5b8fc",
          400: "#8090f8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        // Dark theme specific colors
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          850: "#1a202c", // Custom intermediate shade
          900: "#111827",
          950: "#0d1117", // Custom darker shade
        },
        // Theme colors for shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        // Enhanced typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        // Additional spacing values
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        // Custom max widths
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        // Enhanced animations
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.6)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        // Loading animations
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Text animations
        "type-writer": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        // Button animations
        "button-press": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        // Enhanced animation utilities
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-down": "fade-in-down 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        spinner: "spinner 1s linear infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "type-writer": "type-writer 3.5s steps(40, end)",
        "button-press": "button-press 0.15s ease-in-out",
      },
      boxShadow: {
        // Enhanced shadows for dark theme
        "glow-sm": "0 0 10px rgba(249, 115, 22, 0.3)",
        glow: "0 0 20px rgba(249, 115, 22, 0.4)",
        "glow-lg": "0 0 30px rgba(249, 115, 22, 0.5)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.4)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
        "inner-glow": "inset 0 0 10px rgba(249, 115, 22, 0.3)",
        // Dark theme shadows
        "dark-sm": "0 1px 2px rgba(0, 0, 0, 0.3)",
        dark: "0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
        "dark-lg":
          "0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)",
        "dark-xl":
          "0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.2)",
        "dark-2xl": "0 25px 50px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        // Custom gradient backgrounds
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange": "linear-gradient(135deg, #f97316, #ea580c)",
        "gradient-blue": "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        "gradient-purple": "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        "gradient-dark": "linear-gradient(135deg, #111827, #1f2937, #374151)",
        "hero-pattern":
          "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
      },
      screens: {
        // Additional breakpoints
        xs: "475px",
        "3xl": "1600px",
      },
      aspectRatio: {
        // Additional aspect ratios
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      transitionTimingFunction: {
        // Custom easing functions
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      zIndex: {
        // Additional z-index values
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // Add custom utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Glass morphism utilities
        ".glass": {
          background: "rgba(17, 24, 39, 0.8)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(75, 85, 99, 0.3)",
        },
        ".glass-light": {
          background: "rgba(31, 41, 55, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(107, 114, 128, 0.2)",
        },
        // Text gradient utilities
        ".text-gradient": {
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-blue": {
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        // Custom scroll utilities
        ".scroll-smooth": {
          scrollBehavior: "smooth",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        // Animation delay utilities
        ".animation-delay-100": { "animation-delay": "100ms" },
        ".animation-delay-200": { "animation-delay": "200ms" },
        ".animation-delay-300": { "animation-delay": "300ms" },
        ".animation-delay-500": { "animation-delay": "500ms" },
        ".animation-delay-700": { "animation-delay": "700ms" },
        ".animation-delay-1000": { "animation-delay": "1000ms" },
      };
      addUtilities(newUtilities);
    },
  ],
};
