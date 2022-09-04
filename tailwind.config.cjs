/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            display: ["Inter", "system-ui", "sans-serif"],
            body: ["Inter", "system-ui", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
