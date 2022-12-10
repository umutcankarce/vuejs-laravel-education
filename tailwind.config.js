const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {

        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {500:"#1fb6ff"},
                pink: {500:'#ff49db'},
                orange: {500:"#ff7849"},
                green: {500: "#22c55e"},
                graydark: {500:"#273444"},
                gray: {500:"#8492a6"},
                graylight: {500:"#d3dce6"},
            },
        },

    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
