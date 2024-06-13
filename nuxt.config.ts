// import { Base } from "#build/components";

// export default {
//   css: ["~/assets/styles/main.scss", "~/assets/styles/fonts.scss"],
//   build: {
//     transpile: ["@nuxtjs/composition-api"],
//   },
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
//   target: "static",
//   router: {
//     base: "/opt/",
//     mode: "hash",
//   },
//   publicPath: "/opt/",
//   generate: {
//     fallback: true,
//   },
//   vite: {
//     build: {
//       rollupOptions: {
//         external: ["vue", "vue-router"],
//       },
//     },
//   },
// };


import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
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
    base: "/opt/",
    mode: "hash",
  },
  generate: {
    fallback: true,
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["vue", "vue-router"],
      },
    },
  },
});
