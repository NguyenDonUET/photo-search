/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                backgroundColor: "#f8fafc",
                textColor: "#0f172a",
                darkModeBgColor: "#333",
                darkModeTextColor: "#f0f0f0",
                titleColor: "#645cff",
                blueColor: "#2F80ED",
            },
        },
    },
    plugins: [],
};
