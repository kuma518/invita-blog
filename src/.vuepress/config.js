const sections = require("./sections.json")

// ref: https://vuepress.vuejs.org/config
module.exports = {
  // ==============
  // Local Settings
  // ==============

  // Build output destination
  dest: "dist/",

  // Dev server config
  cache: false,
  host: "0.0.0.0",
  port: "8080",

  // ==================
  // Site configuration
  // ==================

  // i18n
  locales: {
    "/": {
      // en-US has the stupid MM/DD/YYYY date format
      lang: "en-GB",
      title: "Invita Blog",
      description: "Updates, Tutorials and Documentation"
    },
    "/de/": {
      lang: "de-DE",
      title: "Invita Blog",
      description: "Updates, Tutorials und Dokumentation"
    }
  },

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
    repoLabel: "Code",

    // add a GitHub edit link in page footers
    editLinks: true,
    // remove links in the page footers to `next` and `prev` pages.
    nextLinks: false,
    prevLinks: false,

    locales: {
      "/": {
        // Builtin: Site Home

        // Builtin: Search box
        // navigate through the site sections
        nav: sections.map((section) => {
          return {
            text: section.title,
            link: section.path
          }
        }),
        // Switch language
        selectText: "Languages",
        label: "English",
        // Builtin: GitHub Link

        // Sidebars for individual site sections
        sidebar: sections,

        // page footers
        editLinkText: "Edit on GitHub",
        lastUpdated: "Last Updated"
      },

      "/de/": {
        // Builtin: Site Home

        // Builtin: Search box
        // navigate through the site sections
        nav: sections.map((section) => {
          return {
            text: section.title,
            link: "/de" + section.path
          }
        }),
        // Switch site language
        selectText: "Sprachen",
        label: "Deutsch",
        // Builtin: GitHub Link

        // Sidebars for individual site sections
        sidebar: sections.map((section) => {
          return {
            title: section.title,
            path: "/de" + section.path,

            collapsable: section.collapsable,
            children: section.children.map((link) => "/de" + link)
          }
        }),

        // page footers
        editLinkText: "Auf Github bearbeiten",
        lastUpdated: "Letzte Aktualisierung"
      }
    }
  }
}
