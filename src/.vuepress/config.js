// ref: https://vuepress.vuejs.org/config
// awesome: https://github.com/vuepress/awesome-vuepress
module.exports = {
  // Local Settings
  // ==============

  // Build output directory
  dest: "dist/",

  // Dev server config
  cache: false,
  host: "0.0.0.0",
  port: "8080",

  // App configuration
  // =================

  // These also become the corresponding document `<head>` elements.
  title: "Invita Blog",
  description: "Tutorials and Documentation",

  // The vuepress "default theme"
  // A theme is a really sweet vue component, with look, feel and layout already done.
  themeConfig: {
    // Builtin: Site Home
    // Builtin: Search box
    // Site navbar
    nav: [{ text: "Noobs", link: "/noobs/" }],

    // Quick links to GitHub
    repo: "https://github.com/junaga/invita-blog",
    docsBranch: "main",
    docsDir: "src",
    repoLabel: "Code",
    editLinks: "Edit on GitHub",

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
  },

  plugins: {
    // Ability to zoom in (click) on images
    "@vuepress/plugin-medium-zoom": {
      selector: "img",
      options: { background: "#444" }
    }
  }
}
