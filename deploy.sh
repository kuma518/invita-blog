#!/bin/bash
# WARNING: run from project root only.
# Make a manual deploy from the local dev environment.


# Manually deploy to the serverless "Firebase" cloud platform "Hosting" CDN service.
# There are no credentials used, you need a Google account with access to a Firebase project.
# After the deploy, you can remove the "Firebase CLI" from your account under
# https://myaccount.google.com/permissions which invalidates the local OAuth token (secret key).
# Check out the `readme.md` and it's links for more infos.

defaultProjectID='invita-blog'
defaultChannelID='testing'
# note: `live` is the name of the production Firebase Hosting site channel


echo "== Deploying build using the Firebase CLI =="

echo -e "\nIs everything cool?"
# node_modules/ with the `firebase-tools` CLI is installed.
# a dist/ got built (`npm run build`).
# the CLI is signed in:
npx firebase login --no-localhost
npx firebase projects:list


echo -e "\nEnter your targets"
# Prompt for conformation on all targets.
read -p "[Required] Project ID: " -ei "$defaultProjectID" projectID
read -p "[Required] Channel ID: " -ei "$defaultChannelID" channelID


echo -e "\nRunning"
npx firebase \
  --project $projectID \
  hosting:channel:deploy $channelID
