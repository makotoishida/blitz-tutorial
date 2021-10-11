#==================================================
# Build Layer
FROM node:16-slim AS build
WORKDIR /app
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y openssl

COPY package.json package*.json ./
RUN npm install
COPY . .
RUN npx blitz prisma generate && npm run build

#==================================================
# Install Layer
FROM node:16-slim AS node_modules
WORKDIR /app
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y openssl

COPY package.json package*.json ./
RUN npm ci

# ==================================================
# Run Layer
FROM node:16-slim
ENV NODE_ENV=production
WORKDIR /app
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y openssl

COPY package.json package*.json ./
COPY --from=node_modules /app/node_modules ./node_modules/
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma/
COPY --from=build /app/.next ./.next/
COPY --from=build /app/.blitz.config.compiled.js ./
COPY db/schema.prisma ./db/
EXPOSE 3000
CMD ["npm", "start"]


