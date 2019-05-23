#!/bin/bash

sudo docker container stop node-lab
sudo docker container rm node-lab
sudo docker image rm node-lab

sudo docker image build . -t node-lab
sudo docker container run -it -p 3000:3000 -v ${PWD}/todo-list:/home/nodejs/app --name node-lab node-lab bash
