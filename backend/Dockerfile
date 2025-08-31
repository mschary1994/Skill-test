# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install application dependencies in the container
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Your application is listening on port 5007, so we expose it
EXPOSE 5007

# Define the command to run your app
CMD ["npm", "start"]

