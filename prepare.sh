#!/bin/bash

if ! test -f "./fake-api/db.json";
then
  echo '{"auth": {"auth_token": "any token"},"todo": []}' > ./fake-api/db.json
fi
