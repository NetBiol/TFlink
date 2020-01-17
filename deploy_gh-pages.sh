#!/bin/sh
if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi
npm run build
npm run deploy
