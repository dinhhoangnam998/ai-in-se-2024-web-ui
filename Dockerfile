# build environment
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# production environment
FROM nginx:1.18.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN echo 'server { listen 80; root /usr/share/nginx/html; location / { try_files $uri $uri/ /index.html =404; } }' > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]