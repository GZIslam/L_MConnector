FROM node:12.13-alpine

WORKDIR /app

COPY *.json ./
RUN npm install

COPY server.js ./
COPY localhost.pem ./
COPY localhost-key.pem ./


CMD ["npm", "run", "start"]