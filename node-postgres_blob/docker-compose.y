version: '3.1'

services:

  api:
    container_name: node_api
    build: .
    ports:
      - "3000:3000"

  db:
    container_name: node_postgres
    image: postgres
    restart: always
    environment:
      POSTGRES_HOST_AUTH_METHOD: trust
      POSTGRES_PASSWORD: docker 
      POSTGRES_DB: blog
    ports:
      - "5432:5432"

