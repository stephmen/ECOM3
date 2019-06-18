FROM node:10
RUN mkdir -p /usr/src/frontend/
WORKDIR /user/src/frontend/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/frontend/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
RUN npm install
RUN npm run build
EXPOSE 7777
CMD [ "npm", "run", "dev" ]

####The line below was used to create the container
####docker build -t stephane/docker-ecom-front .
####docker run -p 7777:7777 -d stephane/docker-ecom-frontend   