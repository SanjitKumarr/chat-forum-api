FROM node:20.6.1-alpine
WORKDIR './'
COPY package.json ./
COPY .env ./
RUN npm install
COPY . .
CMD ["npm","run","start"]
EXPOSE 3000