FROM node:10.15.3-jessie-slim

WORKDIR /home/nodejs/app

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y vim git htop software-properties-common

RUN npm i -g pm2  && \
    npm i -g nodemon && \
    npm i -g gulp-cli && \
    npm i -g create-react-app

# sudo docker image build . -t node-lab
# sudo docker container run -it -p 3000:3000 -v ${PWD}:/home/nodejs/app --name node-lab node-lab bash
# sudo docker container run -it -p 3000:3000 --name node-lab node-lab bash
