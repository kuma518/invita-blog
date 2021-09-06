Please don't open gigantic pull requests with a bunch of unrelated changes, they will be closed without merging. That being said, as this is a javascript project there are not many requirements. You just need `git`, `node` and `npm` on your machine. I was using `node --version` 14, but 10 or above should be fine.

```sh
# change your directory
cd ~

# get the repository
git clone https://github.com/junaga/invita-blog.git
cd invita-blog/

# download dependencies, packages in `./node_modules/`
npm install

# Start a "dev server" (It has "Hot Reload")
npm run dev

# open `http://localhost:3000` in your Browser
```
