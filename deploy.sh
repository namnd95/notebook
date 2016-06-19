#!/bin/sh

python generate_script.py
cat script.sh
sh script.sh
python generate_json.py

git clone --depth=2 --branch=gh-pages https://github.com/namnd95/notebook.git namnd95/notebook
rm -r namnd95/notebook/content
mv content namnd95/notebook/
message=$(git log -1 --pretty=%B)
git show --pretty="format:" --name-only HEAD

GH_REF=github.com/namnd95/notebook.git
cd namnd95/notebook
git config user.email "net12k44@gmail.com"
git config user.name "Nguyen Duc Nam"
git add --all
git commit -m "$message"
git push -u "https://${GH_TOKEN}@${GH_REF}" gh-pages > /dev/null 2>&1
