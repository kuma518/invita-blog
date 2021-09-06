#!/bin/bash
# WARNING: run from project root only.
# Make a manual deploy from the local dev environment.

# We deploy to the serverless "Firebase" cloud platform "Hosting" CDN service.
# About Firebase: https://firebase.google.com/products-build
# About Firebase Hosting: https://firebase.google.com/products/hosting


defaultProjectID='invita-blog'
defaultChannelID='testing'
# note: `live` is the name of the production Firebase Hosting site channel

echo "== Deploying build using the Firebase CLI =="


echo -e "\nIs everything cool?"
# node_modules/ with `firebase` bin is installed.
# the CLI is signed in.
# a dist/ got build.
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
