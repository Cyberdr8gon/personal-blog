hugo -t coolnix
git add .
git status
git commit -m "auto-deploy"
git push
cp -r public/* ../cyberdr8gon.github.io/
cd ../cyberdr8gon.github.io
git add .
git status
git commit -m "auto-deploy"
git push
