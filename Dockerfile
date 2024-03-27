FROM node:12.13-alpine

WORKDIR /app

COPY *.json ./
RUN npm install

COPY server.js ./

CMD ["npm", "run", "start"]