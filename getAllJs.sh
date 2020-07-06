#!/bin/bash

echo "getAllJs"

for entry in js/*.js
do
  npx browserify $entry -t babelify -o tmp/$entry
done

mkdir -p build/js
mv tmp/js/* build/js/
