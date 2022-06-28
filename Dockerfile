FROM node:14 as builder

WORKDIR /data
COPY . .

RUN npm install

CMD ["npm", "start"]
