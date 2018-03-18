#!/usr/bin/sh

COMPOSE_FILE=docker-compose.yml

touch ../node_modules/
docker rm -f $(docker ps -f name=docker-node-helloworld -q)

docker-compose build --force-rm dockernode
docker-compose up -d dockernode

docker exec -it docker-node-helloworld /usr/local/bin/npm install -g nodemon express request isomorphic-fetch moment connect-multiparty form-data

docker exec -it docker-node-helloworld nodemon index.js