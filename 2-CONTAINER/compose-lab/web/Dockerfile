FROM node:16-alpine
WORKDIR /app
RUN apk update
RUN apk add curl

RUN chown node:node ./
USER node

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
RUN yarn install

COPY --chown=node:node . .
RUN yarn run build

ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

CMD ["node", "build/index.js"]
