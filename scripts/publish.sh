#!/bin/bash

rm -rf ./lib

node ./scripts/update-version.js

git add ./package.json

git commit -m "update version"

git push

./node_modules/.bin/babel ./src --out-dir ./lib --ignore '**/stories.js','**/types.js','**/*.markdown.md'

cp -rf ./src/flow-typed ./lib

cp ./package.json ./lib
cp ./README.md ./lib

npm publish ./lib
