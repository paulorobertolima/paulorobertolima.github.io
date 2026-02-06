const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["layouts/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        dark1: "#0f172a",
        dark2: "#1e293b",
        dark3: "#334155",
        accent: "#06b6d4",
      }),
      colors: {
        accent: "#06b6d4",
        primary: "#0ea5e9",
        secondary: "#8b5cf6",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gradient-accent": "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme(`colors.blue.600`),
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                color: theme(`colors.blue.800`),
                textDecoration: "underline",
              },
            },
            p: {
              marginBottom: "0em",
              lineHeight: "1.6em",
              marginTop: "0.25em",
            },
            h2: {
              marginBottom: "1em",
              marginTop: "0",
            },
          },
        },
        dark: {
          css: {
            color: theme(`colors.slate.100`),
            p: { color: theme(`colors.slate.200`) },
            h1: { color: theme(`colors.cyan.300`) },
            h2: { color: theme(`colors.cyan.300`) },
            h3: { color: theme(`colors.cyan.300`) },
            h4: { color: theme(`colors.slate.100`) },
            h5: { color: theme(`colors.slate.100`) },
            h6: { color: theme(`colors.slate.100`) },
            code: { color: theme(`colors.cyan.300`) },
            strong: { color: theme(`colors.slate.100`) },
            td: { color: theme(`colors.slate.200`) },
            blockquote: { color: theme(`colors.slate.300`) },
            a: {
              color: theme(`colors.cyan.400`),
              transition: "all 0.3s ease",
              "&:hover": { 
                color: theme(`colors.cyan.300`),
                textDecoration: "underline",
              },
            },
          },
        },
      }),
    },
  },
  variants: { typography: ["dark"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
