#!/bin/sh
if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi
npm run build
git add dist -f && git commit -m "deploy"
npm run deploy
