#!/bin/sh

python generate_script.py
sh script.sh
python generate_json.py

git clone --depth=2 --branch=gh-pages https://github.com/namnd95/notebook.git namnd95/notebook
rm -r namnd95/notebook/content
mv content namnd95/notebook/
message=$(git log -1 --pretty=%B)

GH_REF=github.com/namnd95/notebook.git
cd namnd95/notebook
git status
rm test
git add .
git commit -m "Test"
git push -u "https://${GH_TOKEN}@${GH_REF}" gh-pages > /dev/null 2>&1
