import { type Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
