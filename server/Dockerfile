FROM mhart/alpine-node:12
COPY ./src /web-app/
COPY package*.json /web-app/
RUN cd /web-app
WORKDIR /web-app
RUN npm install
CMD npm start

