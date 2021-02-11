#!/bin/sh
set -e

# 記事追加スクリプト

TIMESTAMP=`date '+%Y-%m-%d'`

echo "filename?"
read INPUT_FILENAME
FILENAME="${INPUT_FILENAME:-`date '+%Y-%m-%d'`}"

echo "post id?"
read INPUT_POSTID
POSTID="${INPUT_POSTID:-`date '+%Y%m%d'`}"

echo "title?"
read TITLE

touch src/markdown/$FILENAME.md
cat <<EOF >> src/articles/$FILENAME.json
{
  "id": "$POSTID",
  "title": "$TITLE",
  "created_at": "${TIMESTAMP}T00:00:00.000Z",
  "updated_at": "${TIMESTAMP}T00:00:00.000Z",
  "draft": false,
  "tags": "",
  "bodyContent": "",
  "bodyHtml": [
  ],
  "dir": "src/articles",
  "base": "${FILENAME}.json",
  "ext": ".json",
  "sourceBase": "${FILENAME}.md",
  "sourceExt": ".md"
}
EOF
