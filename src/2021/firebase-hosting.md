# Firebase Hosting

note: about cloud buckets

## Serverless CDN/Internet by Google etc.

## Put stuff publicly on the internet:

`firebase init hosting` or `firebase init` and then select Hosting using the arrow keys and enter.
Enter `.` as public, because we don't build a website. Do N on Automatic deploys with GitHub.

## The simplest site

You can add `"cleanUrls": true` to your `firebase.json` configuration file, to allow links without the `.html` extension. This works, because Firebase renames the files on upload, `/hello.html` becomes `/hello`. Additionally it performs a redirect (301) on any link requesting a `.html` file. This means that when you have `cleanUrls` set to `true`. You can still open `/hello.html` in the Browser, however the link redirects too `/hello` without the Extension.
