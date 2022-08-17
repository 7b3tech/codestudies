FROM node:18.7-alpine

ARG BASE_PATH
ENV BASE_PATH ${BASE_PATH:-/}

# install backend-utils
RUN apk update && apk upgrade && apk add --no-cache \
  bash postgresql-client curl libmagic cairo-dev pango-dev gdk-pixbuf ttf-freefont
# install OS utils
RUN apk update && apk upgrade && apk add --no-cache \
  vim perl curl wget busybox-extras su-exec sudo


RUN apk add --no-cache shadow
RUN apk add bash
ARG UID
ARG GID

ENV USR=appuser
ENV GRP=appgroup
ENV PS1='`date "+%F %T"` \u@\h  \w \n\n  '
ENV PRODUCT_DIR="/home/api"
ENV GRP=appgroup
ENV EDITOR="vim"

VOLUME $PRODUCT_DIR

# Enable host to container edit of proj code on ubuntu and mac.
RUN test -z $(getent group $GID | cut -d: -f1) || \
  groupmod -g $((GID+1000)) $(getent group $GID | cut -d: -f1)

# create a group and user
RUN set -x ; addgroup -g "$GID" -S "$GRP" && \
  adduser \
  --disabled-password \
  -g "$GID" \
  -D \
  -s "/bin/bash" \
  -h "/home/$USR" \
  -u "$UID" \
  -G "$GRP" "$USR" && exit 0 ; exit 1

RUN echo "$USR ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER $USR
ADD --chown=$USR:$GRP "." "/home/$USR/$PRODUCT_DIR"

WORKDIR $PRODUCT_DIR

CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"






# WORKDIR /home/app/api
# RUN apk add --no-cache shadow
# ARG USERNAME=app
# ARG USER_UID=1000
# ARG USER_GID=1001

# RUN     addgroup --gid $USER_GID $USERNAME \
#   && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
#   && chown -R $USER_UID:$USER_GID /home/$USERNAME


COPY package.json .
COPY package-lock.json .
COPY blog.sql /docker-entrypoint-initdb.d/

RUN npm install

COPY . . 

CMD npm start 
