#!/bin/sh

FOLDER="${PWD}/import/simple-icons"
REPO="simple-icons/simple-icons"
REPO_FOLDER="icons"
REPO_branch="develop"

echo "🚧 deleting previous files..."

rm -rf "$FOLDER/simple-icons"

echo "✅ ...ready!"

echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch/$REPO_FOLDER"
echo "🚧 cloning to :: $FOLDER"

mkdir -p $FOLDER

echo "✅ added folders :: $FOLDER"

cd $FOLDER && degit github:$REPO/$REPO_FOLDER --force

echo "✅ done :: "

ls $FOLDER