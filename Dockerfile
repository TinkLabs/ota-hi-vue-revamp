FROM node:lts
WORKDIR /opt
COPY ./package* ./
COPY ./*.js ./
RUN npm install --no-optional && npm cache clean --force

COPY ./build ./build
COPY ./config ./config
COPY ./controllers ./controllers
COPY ./locales ./locales
COPY ./models ./models
COPY ./public ./public
COPY ./src ./src
COPY bin ./www
EXPOSE 3000

CMD [ "node", "./bin/www" ]
