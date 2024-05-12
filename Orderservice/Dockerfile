FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 5001

CMD [ "node", "src/server.js" ]
