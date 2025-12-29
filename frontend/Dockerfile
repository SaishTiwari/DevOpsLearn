# Use Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend code
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL


# Expose frontend port
EXPOSE 3000

# Start the Vite frontend
CMD ["npm", "run", "dev", "--", "--host"]