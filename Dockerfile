FROM node:21

WORKDIR /tg-bot-js-yokross.v3
COPY package*.json ./

RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
