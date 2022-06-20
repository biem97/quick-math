#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

$COMMIT_SHA = git log --pretty=format:'%h' -n 1
$DATE = date

# navigate into the build output directory
cd dist

git init
git checkout -b deploy
git add -A
git commit -m "deploy ${COMMIT_SHA} @ ${DATE}"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:biem97/quick-math.git main:gh-pages

cd -