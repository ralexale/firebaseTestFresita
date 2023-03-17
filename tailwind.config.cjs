/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bg-login": "url(src/assets/bg-strawberry.jpg)",
            },
        },
    },
    plugins: [],
};
