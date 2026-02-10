FROM node:22-alpine

WORKDIR /app
#docker path
COPY package*.json  ./

RUN npm install

COPY . . 

EXPOSE 8080

CMD [ "node","index" ]