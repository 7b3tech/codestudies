FROM node:14.20-slim

RUN npm i -g  @nestjs/cli
RUN apt update && apt install -y procps

USER node

WORKDIR /home/node/app


#jCOPY package*.json ./ 
#RUN npm install

CMD ["/home/node/app/start.sh"]
