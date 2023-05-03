
docker buildx build -t react-example .
docker run -it --rm -v .:/usr/src/app:rw react-example bash
npm run start
