FROM node:14
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install --production
COPY ./ .
EXPOSE 3001
CMD ["npm", "run", "start", "--workspace=api-gateway"]
