#!/bin/sh

clone_and_move() {
  FOLDER="${PWD}/import"
  name=$1
  REPO=$2
  REPO_FOLDER=$3
  REPO_branch=$4

  echo "🚧 deleting previous files..."

  rm -rf "$FOLDER/$name"

  echo "✅ ...ready!"

  echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch"
  echo "🚧 cloning to :: $FOLDER"

  mkdir -p $FOLDER

  echo "✅ added folders :: $FOLDER"

  TEMP="$FOLDER/$name/temp"

  git clone --branch $REPO_branch https://github.com/$REPO.git $TEMP

  ASSETS_SRC="$TEMP/$REPO_FOLDER/*"
  ASSETS_DEST="$FOLDER/$name"

  echo "🚧 moving $ASSETS_SRC to $ASSETS_DEST"
  mv $ASSETS_SRC $ASSETS_DEST
  rm -rf $TEMP

  echo "✅ coned :: "

  ls $FOLDER
}
