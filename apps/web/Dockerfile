FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY apps/web/package*.json apps/web/
COPY apps/api/package*.json apps/api/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:web"]
