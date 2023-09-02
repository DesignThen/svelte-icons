#!/bin/sh

source $PWD/scripts/clone.sh

FOLDER="${PWD}/import"
name="boxicons"
REPO="atisawd/boxicons"
REPO_FOLDER="svg"
REPO_branch="master"


clone_and_move $name $REPO $REPO_FOLDER $REPO_branch

ASSETS="$FOLDER/$name"

 echo "🚧 fixing folders..."

 MV_FROM="$ASSETS/logos"
 MV_TO="$FOLDER/boxicons-logos"
 mv $MV_FROM $MV_TO
 echo "✅ moved :: $MV_FROM to $MV_TO..."

 MV_FROM="$ASSETS/regular"
 MV_TO="$FOLDER/boxicons-regular"
 mv $MV_FROM $MV_TO
 echo "✅ moved :: $MV_FROM to $MV_TO..."

 MV_FROM="$ASSETS/solid"
 MV_TO="$FOLDER/boxicons-solid"
 mv $MV_FROM $MV_TO
 echo "✅ moved :: $MV_FROM to $MV_TO..."

 rm -rf $ASSETS
 echo "✅ ...deleted empty folders."
#
# echo "✅ done :: "

ls $FOLDER