/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // break
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem"
            }
        },
        extend: {
            colors: {
                // custom color schemes here
                primary: {
                    purple: "#5D5CD6",
                    yellow: "#FFB800",
                    green: "#0DBF6A",
                    dark: "#151452",
                    light: "#D6D6F5",
                    "light-bg": "#F8F8FD",
                    "text-dark": "#2F2D2D",
                    "blue-dark": "#0D0C24"
                }
            },
            fontFamily: {
                // custom fonts here
                sora: ["Sora", "sans-serif"],
                rubik: ["Rubik", "sans-serif"]
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    primary: "#5D5CD6",
                    secondary: "#0DBA67",
                    accent: "#FFB800",
                    neutral: "#1B1B1B",
                    "base-100": "#F3F4F6",
                    info: "#67E8F9",
                    success: "#16a34a",
                    warning: "#FBBF24",
                    error: "#EF4444"
                }
            },
            "dark"
        ],
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    }
};
