FROM ubuntu

WORKDIR /home/app

RUN apt update -y
RUN apt upgrade -y
RUN apt install npm -y

COPY package.* .

RUN npm install

COPY . .




