# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# run prisma commands
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Expose Next.js port
EXPOSE 3000

# Start production server
CMD ["npm", "run", "start"]
