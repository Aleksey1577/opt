export default {
  css: ["~/assets/styles/main.scss", "~/assets/styles/fonts.scss"],
  build: {
    transpile: ["@nuxtjs/composition-api"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
