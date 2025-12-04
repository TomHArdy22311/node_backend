FROM node:22.21.0
WORKDIR /node_backend
COPY package.json* ./
RUN npm install
EXPOSE 3016
COPY . .
CMD node index.js