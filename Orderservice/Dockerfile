# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /usr/src/app inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy the rest of your application's source code from your host to your image filesystem.
COPY . .

# Make port 5001 available to the world outside this container
EXPOSE 5001

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "src/server.js"]
