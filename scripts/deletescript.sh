#!/bin/bash

sudo pm2 describe cl-frontend > /dev/null
RUNNING=$?

if [ "${RUNNING}" -eq 0 ]; then
	sudo -E pm2 delete cl-frontend
else
	sudo pm2 list
fi;
