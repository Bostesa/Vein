module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3b82f6',
        'accent-green': '#22c55e',
        'accent-red': '#ef4444',
        'base-dark': '#000000', // Pure black background
        'base-light': '#111111', // Lighter background for cards
        'border-color': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#E2E8F0', // Brighter primary text (slate-200)
        'text-secondary': '#94A3B8', // Softer secondary text (slate-400)
      }
    },
  },
  plugins: [],
}