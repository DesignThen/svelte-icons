#!/bin/sh

source $PWD/scripts/clone.sh

FOLDER="${PWD}/import"
name="simple-icons"
REPO="simple-icons/simple-icons"
REPO_FOLDER="icons"
REPO_branch="develop"


clone_and_move $name $REPO $REPO_FOLDER $REPO_branch

#
# echo "🚧 deleting previous files..."
#
# rm -rf "$FOLDER/simple-icons"
#
# echo "✅ ...ready!"
#
# echo "🚧 cloning from :: https://github.com/$REPO/tree/$REPO_branch"
# echo "🚧 cloning to :: $FOLDER"
#
# mkdir -p $FOLDER
#
# echo "✅ added folders :: $FOLDER"
#
# cd $FOLDER
#
# TEMP="$FOLDER/$name/temp"
#
# git clone --branch $REPO_branch https://github.com/$REPO.git $TEMP
#
# ASSETS_SRC="$TEMP/$REPO_FOLDER/*"
# ASSETS_DEST="$FOLDER/$name"
#
# echo "🚧 moving $ASSETS_SRC to $ASSETS_DEST"
# mv $ASSETS_SRC $ASSETS_DEST
# rm -rf $TEMP
#
#
# echo "✅ done :: "
#
# ls $FOLDER