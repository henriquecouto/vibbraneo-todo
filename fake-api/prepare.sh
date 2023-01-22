#!/bin/bash

if ! test -f "./db.json";
then
  echo '{"auth": {"authToken": "any token"},"todo": []}' > ./db.json
fi
