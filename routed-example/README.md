
Build an image and run it, connected to our app.

docker run -it --rm -v .:/usr/src/app:rw react-example bash
npm install
npm audit fix
npm run start
