/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],


  theme: {
    extend: {
      colors: {
        "primary-main": "#09528C",
        "primary-main-2": "#00008B",
        "primary-main-3": "#07332F",
        "secondary-main": "#E57373",
        "secondary-main-2": "#F7A582",
        "dark-1": "#021224",
        "dark-2": "#49658A",
        "dark-3": "#132B44",
        "dark-4": "#173250",
        "dark-5": "#07172B",
        "dark-6": "#112841",
        "dark-7": "#102642",
        "dark-8": "#244262",
        "dark-9": "#08192D",
        "dark-10": "#0D2B4F99",
        "dark-11": "#0A1F38",
        "dark-12": "#163255",
        "dark-13": "#05192E",
        "neutral-color": "#FFFCF4",
        "normal-desc": "#57769E",
        "primary-desc": "#b3b3b4",
        "success-desc": "#17BD8D",
        "danger-desc": "#FF4E3E",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
}
