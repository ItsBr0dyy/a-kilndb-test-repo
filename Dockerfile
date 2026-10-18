FROM oven/bun:1-alpine

WORKDIR /app

COPY index.ts .

ENV NODE_ENV=production

EXPOSE 5000

CMD ["bun", "index.ts"]
