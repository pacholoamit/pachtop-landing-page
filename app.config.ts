// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: "Pachtop",
    description: "Cross-platform (Linux, WIndows, MacOS) Desktop GUI system monitor, built with Rust & Tauri",
    image: "https://github.com/pacholoamit/pachtop/blob/master/public/logo-only.png?raw=true",
    socials: {
      github: "pacholoamit/pachtop",
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "docus",
      owner: "nuxt-themes",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: false,
      fluid: true,
    },
    footer: {
      credits: false,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
