FROM node:24

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --omit=dev

COPY dist ./dist
COPY public ./public

ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
