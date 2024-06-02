# Step 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Enable Yarn Berry (Yarn 2+)
RUN yarn set version berry

# Install dependencies
COPY .yarn /app/.yarn
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn/plugins /app/.yarn/plugins
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Step 2: Serve the application
FROM node:18-alpine

WORKDIR /app

# Copy the build from the builder stage
COPY --from=builder /app/.output /app

# Install 'serve' to run the build
RUN yarn global add serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "public"]
