#!/bin/bash

echo "getOneJs started"

ENTRY=$1
echo $ENTRY

FILE=$(echo $ENTRY | awk -F/ '{print $NF}')
echo $FILE

npx browserify $ENTRY -t babelify -o build/js/$FILE

echo "getOneJs ended"
