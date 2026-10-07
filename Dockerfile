FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
