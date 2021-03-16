FROM node:15.11.0-alpine3.11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
USER node
CMD [ "node", "server.js" ]
