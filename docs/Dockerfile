FROM node:18-alpine as installer
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

FROM node:18-alpine
WORKDIR /app

COPY --chown=node:node --from=installer /app/node_modules ./node_modules
COPY --chown=node:node . .
RUN chown node:node /app
USER node

CMD ["npm", "start"]