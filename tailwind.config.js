/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          lobster: 'Lobster',
          inter:'Inter'
        },
        textColor: {
          primaryColor:"#FF3811"
        }
        
        },
    },
    plugins: [require("daisyui")],
};
