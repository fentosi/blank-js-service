FROM node:18.18.0-alpine3.18 AS build

WORKDIR /app

COPY . .

RUN npm ci --only=production --no-audit

FROM node:18.18.0-alpine3.18 AS deploy

WORKDIR /app

COPY --from=build /app /app
