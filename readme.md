Source code of [invita.blog](https://invita.blog), the domain was registered by [junaga](mailto:hermann-stanew@invita.gmbh?subject=invita.blog). It is hosted serverless on the [Firebase Hosting](https://firebase.google.com/products/hosting) Google CDN/internet, and build using the [Vuepress](https://vuepress.vuejs.org/) framework, a _Static Site Generator_ which takes markdown `.md` files.

## Help out with the code

See `contributing.md` for a normal dev setup.

Website pages are in `src/` (source), with German translations in `src/de/`. Go ahead and edit these right here on GitHub, all you need is an Account. A GitHub bot will then comment on your _Pull request_ with a preview URL, showcasing the changes. Whatever you edit or create, please make sure to [format your code](https://invita.link/prettier-playground) with prettier.

### Why vuepress

It has the best of both worlds, it's simple **and** powerfull.

- **Vue components** can be consumed in markdown, or turned into layouts/themes.
- **Includes styling**. A couple really sweet vue components make up the mobile first and completely responsive "default theme".
- There exist a few offical (maintained by the [vue community](https://github.com/vuejs)) and lots of community made, [plugins and themes](https://github.com/vuepress/awesome-vuepress#plugins).
- It **creates an SPA.** During buildtime every route is visited using SSR. Creating SEO friendly html pages. Once a page is loaded, the client-side router takes over and all SPA fake links work.

### Why GitHub and Firebase Hosting

[GitHub](http://github.com/) from Microsoft, and [Firebase](https://firebase.google.com) from Google are **insane** products, that just value your time. GitHub works as platform for development, and Firebase as our serverless cloud.