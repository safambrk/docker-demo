FROM node:alpine
WORKDIR /app 
ADD package*.json ./
RUN npm i
ADD . .
CMD node script.js