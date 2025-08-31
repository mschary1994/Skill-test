# Stage 1: Build the React (Vite) app
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.28-alpine
WORKDIR /usr/share/nginx/html

# Copy build output from previous stage
COPY --from=builder /app/dist .

# Copy custom Nginx config for SPA + API proxying
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

