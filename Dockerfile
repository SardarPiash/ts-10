# Step 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci

# Step 2: Build your app
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Step 3: Run using a minimal image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy build output and deps
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
