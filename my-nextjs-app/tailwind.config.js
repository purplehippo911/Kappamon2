/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'kappa-green': '#57A773',
        'light-green': '#70C38D',
        'dark-black': '#3F3736',
        'white': '#ffffff',
        'dark-red': '#DE2F1B',
        'light-red': '#57A773',
      },
      colors: {
        'kappa-green': '#57A773',
        'light-green': '#70C38D',
        'dark-black': '#3F3736',
        'white': '#ffffff',
        'dark-red': '#DE2F1B',
        'light-red': '#57A773',
      },
    },
  },
  plugins: [],
}
