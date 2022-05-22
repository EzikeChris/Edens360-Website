const colors = require("tailwindcss/colors")
module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        colors: {
            ...colors,
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'jungle-green': '#002026',
            'eden-green': '#102E34',
            'eden-mint': '#92CCBF',
            'eerie-black': '#222222',
            'light-grey': '#C0C0C0',
            'cadet-grey': '#99A6A8',
            'platinum': '#E9E9E9',
            'blue-green': '#1BC1BF',
            'inch-worm': '#A5E557',
            'vanilla-ice': '#EF92AE',
            'lavender-floral': '#A282DD',
            'good-green': '#38C16F',
            'true-blue': '#2168D1',
            'yellow': '#E9C300',
            'bad-red': '#EF4A54',
            'black': '#000000',
            "EM-10": "rgba(146, 204, 191, 0.1)",
            "DJ-10": "rgba(0, 32, 38, 0.1)",
            "DJ-11": "rgba(255, 255, 255, 0.6)",
            "misty-background": "#E5E5E5"
        },
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'dm-sans': ['DM Sans', 'sans-serif'],
                'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
                'gilroy': ['Gilroy', 'Roboto', 'Questrial', ]
            },
        },
    },
    plugins: [],
}