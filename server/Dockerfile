FROM mhart/alpine-node:12
COPY ./src /web-app/src
COPY package*.json /web-app/
COPY tsconfig*.json /web-app/
RUN cd /web-app
WORKDIR /web-app
RUN npm install

