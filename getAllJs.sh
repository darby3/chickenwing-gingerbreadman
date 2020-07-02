#!/bin/bash

for entry in js/*.js
do
  npx browserify $entry -t babelify -o build/$entry
done
