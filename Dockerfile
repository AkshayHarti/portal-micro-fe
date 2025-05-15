FROM node:24.0.1-alpine3.20 as build

# ARG REACT_APP_SERVICES_HOST=/services/m

WORKDIR /app

COPY ./src/packages/root/dist /app/root
COPY ./src/packages/about-route/dist /app/about
COPY ./src/packages/list-route/dist /app/list

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/root /usr/share/nginx/html
COPY --from=build /app/about /usr/share/nginx/html/about
COPY --from=build /app/list /usr/share/nginx/html/list
