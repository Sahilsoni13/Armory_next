import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        gothic: ['gothic', 'sans-serif'],
        gothicMdbt: ['gothicMdbt', 'sans-serif'],
        gothiclight: ['gothiclight', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      colors: {
        body_text: "#C9C9C9"
      },
      dropShadow: {
        'custom': '0px 0px  15px #2972D7',
        'customcommas': '0px 0px  10px #2972D7',
        'custom_red': '0px 0px  15px #FF0000',
      },

      boxShadow: {
        'custom': "0px 0px 20px 5px #2972D7",
        'customdrops': "0px 0px 5px 1px #2972D7",

        'blue-glow-sm': '0 0 13.34px 0 #2972D7', // Small glow
        'blue-glow-md': '0 0 26.68px 0 #2972D7', // Medium glow
        'blue-glow-lg': '0 0 93.39px 0 #2972D7', // Large glow
        'blue-glow-xl': '0 0 186.77px 0 #2972D7', // Extra-large glow
        'blue-glow-2xl': '0 0 320.18px 0 #2972D7', // 2x large glow
        'blue-glow-3xl': '0 0 560.32px 0 #2972D7', // 3x large glow
      },


      textShadow: {
        'blue-glow-sm': '0 0 13px #2972D7',
        'blue-glow-md': '0 0 26px #2972D7',
        'blue-glow-lg': '0 0 93px #2972D7',
        'blue-glow-xl': '0 0 187px #2972D7',
        'blue-glow-2xl': '0 0 320px #2972D7',
        'blue-glow-3xl': '0 0 560px #2972D7',
      },
      
      animation: {
        'spin-clockwise': 'spinClockwise 20s linear infinite',
        'spin-anticlockwise': 'spinAnticlockwise 20s linear infinite',
        'clockwise': "rotateClockwise 20s linear infinite",
        'counterClockwise': "rotateCounterClockwise 20s linear infinite",
        'spin-sclaeUp': 'spinScaleUp 2s linear infinite alternate',
        'spin-scaleDown': 'spinScaleDown 2s linear infinite alternate',
        'flicker': 'flicker 2s infinite',
        flicker1: 'flicker1 1s infinite',
        flicker2: 'flicker2 1.3s infinite',
        flicker3: 'flicker3 1.5s infinite',
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // animation: zoom-in-zoom-out 2s ease-out infinite;

        spinAnticlockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },

        rotateClockwise: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rotateCounterClockwise: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        spinScaleUp: {
          '0%': { transform: 'scale(0.7) rotate(180deg)' },
          '100%': { transform: 'scale(1)  rotate(0deg)' },
        },
        spinScaleDown: {
          '0%': { transform: 'scale(1) rotate(180deg)' },
          '100%': { transform: 'scale(0.8) rotate(0deg)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: "1",
          },
          '20%, 24%, 55%': {
            opacity: "0.4",
          },
        },
        flicker1: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(1.2)', opacity: '0.7' },
        },
        flicker2: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(1.3)', opacity: '0.8' },
        },
        flicker3: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(1.1)', opacity: '0.6' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
