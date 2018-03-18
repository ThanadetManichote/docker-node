FROM node:8

# replace this with your application's default port
EXPOSE 8123

WORKDIR /app

ENV NODE_PATH=/usr/local/lib/node_modules/
ENV NODE_ENV=developer
ENV NODE_PORT=8123

RUN npm config set cache /node_modules/ --global


CMD "/bin/bash" 