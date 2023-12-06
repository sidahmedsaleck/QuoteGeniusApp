
FROM node:18-alpine

ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

ARG PORT=3000
ENV PORT=${PORT}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_USER=${DB_USER}
ENV DB_NAME=${DB_NAME}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD if [ "$NODE_ENV" = "dev" ]; then \
   ["npm", "run", "start:dev"]; \
else \
    ["node", "dist/main.js"]; \
fi
