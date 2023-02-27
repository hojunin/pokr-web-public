# step 1: builder
FROM node:16-alpine AS builder

RUN yarn set version berry
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

RUN echo PROFILE: $PROFILE

RUN cd /app 
RUN yarn install --immutable
RUN yarn build

# step 2: copy files and run next
FROM node:16-alpine AS runner
RUN apk add --no-cache curl htop tcpdump

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/*.yaml ./

#RUN chown -R nextjs:nodejs /app/.next
RUN echo "YARN VERSION IN RUNNER: " && yarn --version

EXPOSE 8080

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "yarn", "start" ]
