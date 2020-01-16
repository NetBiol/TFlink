#!/bin/sh
if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi
npm run build
git push --delete origin gh-pages
git add dist -f && git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
