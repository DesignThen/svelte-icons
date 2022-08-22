#!/bin/sh

FOLDER="${PWD}/import/brand"
REPO="simple-icons/simple-icons"
REPO_FOLDER="icons"
REPO_branch="develop"

echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch/$REPO_FOLDER"
echo "🚧 cloning to :: $FOLDER"

mkdir -p $FOLDER

echo "✅ added folders :: $FOLDER"

cd $FOLDER && degit github:$REPO/$REPO_FOLDER --force

echo "✅ done :: "

ls $FOLDER