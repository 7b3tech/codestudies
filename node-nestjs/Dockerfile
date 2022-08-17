FROM node:lts-buster-slim

RUN npm install npm@latest --location=global
RUN npm i -g @nestjs/cli

WORKDIR /node/app

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

#CMD ["tail","-f","/dev/null"]
CMD ["npm","run","start:dev"]

