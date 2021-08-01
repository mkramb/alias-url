FROM node:14.17.0-slim

ENV NPM_CONFIG_LOGLEVEL=error

WORKDIR /alias
COPY . /alias

RUN yarn install && cd packages/server && yarn build
RUN yarn install --production --ignore-scripts --prefer-offline

USER node
EXPOSE 8080

WORKDIR /alias/packages/server

CMD ["node", "./dist/server.js"]
