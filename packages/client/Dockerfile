FROM node:14.17.0-slim as build

ENV NPM_CONFIG_LOGLEVEL=error

ARG VITE_SERVER_URL
ENV VITE_SERVER_URL=$VITE_SERVER_URL

ARG VITE_SERVER_REDIRECT_URL
ENV VITE_SERVER_REDIRECT_URL=$VITE_SERVER_REDIRECT_URL

WORKDIR /alias
COPY . /alias

RUN yarn install && cd packages/client && yarn build
RUN yarn install --production --ignore-scripts --prefer-offline

FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /alias/packages/client/dist /usr/share/nginx/html

EXPOSE 8000
