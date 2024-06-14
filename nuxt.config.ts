import { Base } from "#build/components";

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
  target: "static",
  router: {
    base: "/opt",
    mode: "hash",
  },
  publicPath: "/opt",
  generate: {
    fallback: true,
  },
};


