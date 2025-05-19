import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                darkGreen: '#40725f',
                lightGreen: '#EEF6EB',
                green: '#D8E7D3',
                textGreen: '#417360',
                navBar: '#FBFFFB',
                border: '#E1EBE1',
                background: '#FBFFFB',
                dashedLine: '#BBCEC2',
            },
        },
    },
    plugins: [],
};
export default config;
