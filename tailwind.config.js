// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom styles here
      colors: {
        // We'll define a custom primary color for the portfolio's branding
        'primary-accent': '#FF5733', // Example: a vibrant orange/red
        'dark-background': '#0A192F', // Deep navy for dark mode
        'light-foreground': '#CCD6F6', // Light gray/blue text for dark mode
      },
      // Adding a subtle custom animation for components that slide in
      animation: {
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
      },
      // Define the keyframes for the custom animation
      keyframes: {
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;