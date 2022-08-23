#!/bin/sh

FOLDER="${PWD}/import"
REPO="tailwindlabs/heroicons"
REPO_FOLDER="src"
REPO_branch="master"


echo "🚧 deleting previous files..."

rm -rf "$FOLDER/small"
rm -rf "$FOLDER/solid"
rm -rf "$FOLDER/outline"

echo "✅ ...ready!"

echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch/$REPO_FOLDER"
echo "🚧 cloning to :: $FOLDER"

mkdir -p $FOLDER

echo "✅ added folders :: $FOLDER"

cd $FOLDER && degit github:$REPO/$REPO_FOLDER --force

echo "✅ done :: "

ls $FOLDER