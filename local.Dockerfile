FROM node:10.24.1

WORKDIR /usr/src/app

RUN npm install -g nodemon

RUN npm install -g typescript

EXPOSE 4040 5550