FROM node:24.0.1-alpine3.20 as build


ENV YARN_VERSION=4.9.1

RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

WORKDIR /app

COPY src ./src
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY .yarnrc.yml ./.yarnrc.yml
COPY nginx.conf ./nginx.conf

RUN yarn install --immutable && yarn build

# COPY ./src/packages/root/dist /app/root
# COPY ./src/packages/about-route/dist /app/about
# COPY ./src/packages/list-route/dist /app/list

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/src/packages/root/dist /usr/share/nginx/html
COPY --from=build /app/src/packages/about-route/dist /usr/share/nginx/html/about
COPY --from=build /app/src/packages/list-route/dist /usr/share/nginx/html/list
