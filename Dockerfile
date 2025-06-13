FROM node:18 AS builder
WORKDIR /app
COPY . .

# Replace .env with Docker-specific env file before build
COPY .env.docker .env

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
