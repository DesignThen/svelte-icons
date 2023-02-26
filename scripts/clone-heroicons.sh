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

echo "🚧 fixing folders..."

MV_FROM="$FOLDER/20/solid"
MV_TO="$FOLDER/heroicon-20-solid"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

MV_FROM="$FOLDER/24/solid"
MV_TO="$FOLDER/heroicon-24-solid"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

MV_FROM="$FOLDER/24/outline"
MV_TO="$FOLDER/heroicon-24-outline"
mv $MV_FROM $MV_TO
echo "✅ moved :: $MV_FROM to $MV_TO..."

rm -rf $FOLDER/24
rm -rf $FOLDER/20
echo "✅ ...deleted empty folders."

echo "✅ done :: "

ls $FOLDER