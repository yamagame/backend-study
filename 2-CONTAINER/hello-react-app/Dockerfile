FROM node:16-alpine
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build
RUN yarn global add serve

ENV HOST 0.0.0.0
EXPOSE 8080

CMD ["serve", "-p", "8080", "-s", "build"]