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
        // Primary Color Scheme: Black to Red
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#FF0000", // Bright Red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#950101", // Dark Red
          900: "#7f1d1d",
          950: "#3D0000", // Very Dark Red
        },
        // Black variations
        black: {
          DEFAULT: "#000000", // Pure Black
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#000000", // Pure Black
        },
        // Red color scheme based on your palette
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#FF0000", // Your bright red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#950101", // Your dark red
          900: "#7f1d1d",
          950: "#3D0000", // Your very dark red
        },
        // Custom palette based on your colors
        crimson: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#FF0000", // #FF0000
          600: "#dc2626",
          700: "#b91c1c",
          800: "#950101", // #950101
          900: "#7f1d1d",
          950: "#3D0000", // #3D0000
        },
        // Enhanced grays for dark theme
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
          850: "#1a202c",
          900: "#111827",
          950: "#000000", // Pure black
        },
        // Theme colors for shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
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
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 0, 0, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)" },
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
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "type-writer": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "button-press": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        // Red-themed animations
        "red-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 0, 0, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 0, 0, 0.8)" },
        },
        "red-glow": {
          "0%, 100%": { textShadow: "0 0 5px rgba(255, 0, 0, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(255, 0, 0, 1)" },
        },
      },
      animation: {
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
        "red-pulse": "red-pulse 2s ease-in-out infinite",
        "red-glow": "red-glow 2s ease-in-out infinite",
      },
      boxShadow: {
        // Red-themed shadows
        "glow-sm": "0 0 10px rgba(255, 0, 0, 0.3)",
        glow: "0 0 20px rgba(255, 0, 0, 0.4)",
        "glow-lg": "0 0 30px rgba(255, 0, 0, 0.5)",
        "glow-red": "0 0 20px rgba(255, 0, 0, 0.4)",
        "glow-crimson": "0 0 20px rgba(149, 1, 1, 0.4)",
        "glow-dark-red": "0 0 20px rgba(61, 0, 0, 0.4)",
        "inner-glow": "inset 0 0 10px rgba(255, 0, 0, 0.3)",
        // Dark theme shadows
        "dark-sm": "0 1px 2px rgba(0, 0, 0, 0.8)",
        dark: "0 1px 3px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.8)",
        "dark-md": "0 4px 6px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)",
        "dark-lg":
          "0 10px 15px rgba(0, 0, 0, 0.9), 0 4px 6px rgba(0, 0, 0, 0.8)",
        "dark-xl":
          "0 20px 25px rgba(0, 0, 0, 0.9), 0 10px 10px rgba(0, 0, 0, 0.6)",
        "dark-2xl": "0 25px 50px rgba(0, 0, 0, 0.95)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Red-themed gradients
        "gradient-red": "linear-gradient(135deg, #FF0000, #950101)",
        "gradient-crimson": "linear-gradient(135deg, #950101, #3D0000)",
        "gradient-dark-red": "linear-gradient(135deg, #3D0000, #000000)",
        "gradient-fire": "linear-gradient(135deg, #FF0000, #950101, #3D0000)",
        "gradient-dark": "linear-gradient(135deg, #000000, #3D0000, #950101)",
        "hero-pattern":
          "linear-gradient(135deg, #000000 0%, #3D0000 50%, #950101 100%)",
        // Pattern backgrounds
        "red-dots":
          "radial-gradient(circle, rgba(255, 0, 0, 0.1) 1px, transparent 1px)",
        "dark-pattern":
          "linear-gradient(135deg, #000000 25%, transparent 25%), linear-gradient(225deg, #000000 25%, transparent 25%), linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(315deg, #000000 25%, #3D0000 25%)",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      zIndex: {
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
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Glass morphism utilities with red theme
        ".glass": {
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(61, 0, 0, 0.3)",
        },
        ".glass-light": {
          background: "rgba(61, 0, 0, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(149, 1, 1, 0.2)",
        },
        ".glass-red": {
          background: "rgba(61, 0, 0, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 0, 0, 0.2)",
        },
        // Text gradient utilities with red theme
        ".text-gradient": {
          background: "linear-gradient(135deg, #FF0000, #950101)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-fire": {
          background: "linear-gradient(135deg, #FF0000, #950101, #3D0000)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-dark": {
          background: "linear-gradient(135deg, #950101, #3D0000)",
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
        // Red-themed utilities
        ".bg-dark-pattern": {
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(61, 0, 0, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(149, 1, 1, 0.1) 0%, transparent 50%)",
        },
        ".border-red-glow": {
          border: "1px solid rgba(255, 0, 0, 0.3)",
          boxShadow: "0 0 10px rgba(255, 0, 0, 0.1)",
        },
        ".border-red-glow:hover": {
          border: "1px solid rgba(255, 0, 0, 0.5)",
          boxShadow: "0 0 20px rgba(255, 0, 0, 0.2)",
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
