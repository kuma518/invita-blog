// ref: https://vuepress.vuejs.org/config
module.exports = {
  // Local Settings
  // ==============

  // Build output directory
  dest: "dist/",

  // Dev server config
  cache: false,
  host: "0.0.0.0",
  port: "8080",

  // App config
  // ==========

  title: "Invita Blog", // becomes HTML `document.title` aswell
  description: "Tutorials and Documentation",

  // The with vuepress shipped default "theme".
  // The theme is a really sweet vue component, with style and layout already done.
  themeConfig: {
    // The site header navbar
    nav: [{ text: "Noobs", link: "/noobs/" }],

    // Sidebars for individual site sections
    sidebar: [
      {
        path: "/noobs/",

        title: "Noobs",
        collapsable: false,
        children: ["/noobs/git"]
      }
    ],

    // Opt out, of some features //
    // No links in the page footers, to `next` and `prev` pages.
    nextLinks: false,
    prevLinks: false
  }
}
