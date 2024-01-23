FROM node:14

MAINTAINER Kamaev Anton <kamaeff2@gmail.com>
ENV TZ=Europe/Moscow

WORKDIR /tg-bot-js-yokross.v3
COPY package*.json ./

RUN npm install
COPY . .
CMD ["npm", "run", "dev"]