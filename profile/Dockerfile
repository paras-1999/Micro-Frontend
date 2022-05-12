FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3004

CMD [ "npm", "run", "start" ]