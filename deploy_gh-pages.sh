rm -rf !(.git|.gitignore|dist|node-modules|site)
mv dist/* .
rm -rf dist
