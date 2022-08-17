FROM node:lts-buster-slim

RUN npm install npm@latest --location=global

WORKDIR /node/app

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev:server"]

