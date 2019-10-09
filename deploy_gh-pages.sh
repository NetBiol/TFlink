rm -rf !(.git|.gitignore|dist|node_modules|site)
mv dist/* .
rm -rf dist
git push origin --delete gh-pages