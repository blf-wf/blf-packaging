FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY config/ ./config/
COPY data/ ./data/

ENV RUN_MODE=daemon
ENV LOG_LEVEL=info

CMD ["node", "dist/index.js"]
