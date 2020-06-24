#!/bin/bash

cd /home/ubuntu/carreerladder2
sudo pm2 serve build 3000 --name cl-frontend
sudo pm2 list
