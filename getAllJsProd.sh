#!/bin/bash

for entry in js/*.js
do
  npx browserify -p tinyify $entry -t babelify -o build/$entry
done

