# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SIRONIC_PHONE
ARG NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SIRONIC_PHONE=$NEXT_PUBLIC_SIRONIC_PHONE
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=${PORT:-3000}
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE ${PORT}

CMD ["node", "server.js"]
