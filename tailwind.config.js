module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    purple: "#5D5CD6",
                    yellow: "#FFB800",
                    green: "#0DBA67"
                }
            }
        }
    },
    plugins: []
};
