// ref: https://vuepress.vuejs.org/config
module.exports = {
  // Build output destination
  dest: "dist/",
  // Dev server config
  host: "0.0.0.0",
  port: "3000",

  // ==================
  // Site configuration
  // ==================

  title: "Invita Blog",
  description: "Updates, Tutorials und Dokumentation",

  plugins: {
    // Ability to zoom in (click) on images
    "@vuepress/plugin-medium-zoom": {
      selector: "img",
      options: { background: "#444" }
    }
  },

  // ===================
  // The "Default Theme"
  // ===================

  themeConfig: {
    // add links to GitHub
    repo: "https://github.com/junaga/invita-blog",
    docsBranch: "main",
    docsDir: "src",

    // == Navbar ==

    // BUILTIN: Site Home
    // BUILTIN: Search box
    // navigate through the site sections
    nav: [
      { text: "Posts", link: "/2021/" },
      {
        text: "Links",
        items: [
          { text: "invita.gmbh", link: "https://invita.gmbh" },
          { text: "invita.dev", link: "https://invita.dev" }
        ]
      }
    ],
    // BUILTIN: repo Link
    repoLabel: "Code",

    // == Page Footers ==

    // add a GitHub edit link in page footers
    editLinks: true,
    editLinkText: "Code bearbeiten",
    lastUpdated: "Letzte Aktualisierung"
  }
}
