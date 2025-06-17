#!/usr/bin/env bash

docker kill somapost || true 
docker rm somapost || true 
docker create --name somapost -p 3000:3000 -p 4200:4200 localhost/somapost
