FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
ARG NUXT_PORT

ARG NUXT_HOST


ENV HOST NUXT_HOST
ENV NUXT_PORT=NUXT_PORT

CMD ["npm", "run", "dev"]
