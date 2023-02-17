ARG NODE_VERSION=18.12-slim

FROM node:${NODE_VERSION} AS builder

WORKDIR /build

COPY . .

RUN npm cache clean --force && npm ci && npm run build

FROM node:${NODE_VERSION}

WORKDIR /app

COPY --from=builder /build/.output .
COPY --from=builder /build/prisma .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", "./server/index.mjs"]