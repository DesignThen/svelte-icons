#!/bin/sh

source $PWD/scripts/clone.sh

FOLDER="${PWD}/import"
name="heroicons"
REPO="tailwindlabs/heroicons"
REPO_FOLDER="optimized"
REPO_branch="master"

clone_and_move $name $REPO $REPO_FOLDER $REPO_branch

ASSETS="$FOLDER/$name"

echo "🚧 fixing folders..."

MV_FROM="$ASSETS/16/solid"
MV_TO="$FOLDER/heroicon-16-solid"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

MV_FROM="$ASSETS/20/solid"
MV_TO="$FOLDER/heroicon-20-solid"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

MV_FROM="$ASSETS/24/solid"
MV_TO="$FOLDER/heroicon-24-solid"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

MV_FROM="$ASSETS/24/outline"
MV_TO="$FOLDER/heroicon-24-outline"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

rm -rf $ASSETS
echo "✅ ...deleted empty folders."
#
# echo "✅ done :: "

ls $FOLDER
