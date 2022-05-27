module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                beanie: ["Reenie Beanie"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
