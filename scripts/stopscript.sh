#!/bin/bash

echo "Script executed from: ${PWD}"
sudo pm2 describe cl-frontend > /dev/null
RUNNING=$?

if [ "${RUNNING}" -eq 0 ]; then
	sudo -E pm2 stop cl-frontend
else
	sudo pm2 list
	echo "Script executed from: ${PWD}"
	sudo pwd
fi;
