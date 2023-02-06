/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "#474E5B",
      },
      height: {
        header: "150px",
      },
      fontFamily: {
        "pre-mono-bold": ["Pretendard-Bold"],
        "pre-mono-regular": ["Pretendard-Regular"],
        "pre-mono-light": ["Pretendard-Light"],
      },
    },
  },
  plugins: [],
};
