FROM node:12.13-alpine

WORKDIR /app

COPY *.json ./
RUN npm install

CMD ["npm", "run", "start"]