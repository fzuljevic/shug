FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package*.json ./
COPY apps/web/package*.json apps/web/
COPY apps/api/package*.json apps/api/

RUN npm install

COPY . .

RUN npm run prisma:generate

EXPOSE 4000

CMD ["npm", "run", "dev:api"]
