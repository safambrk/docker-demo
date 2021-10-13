FROM node:alpine
WORKDIR /app 
ADD package*.json ./
RUN npm i && apk add bash
ADD . .
CMD node script.js