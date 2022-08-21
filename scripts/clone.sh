#!/bin/sh

FOLDER="${PWD}/import"
REPO="tailwindlabs/heroicons"
REPO_FOLDER="src"
REPO_branch="master"

echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch/$REPO_FOLDER"
echo "🚧 cloning to :: $FOLDER"

mkdir -p $FOLDER && cd $FOLDER && degit github:$REPO/$REPO_FOLDER --force

echo "✅ done"

ls $FOLDER