import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '900px',
  		xl: '1200px'
  	},
  	fontFamily: {
  		primary: 'var(--font-jetbrainsMono)'
  	},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
  			accent: {
  				DEFAULT: '#00ff99',
  				hover: '#00e187'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
