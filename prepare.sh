#!/bin/bash

if ! test -f "./fake-api/db.json";
then
  echo '{"auth": {"authToken": "any token"},"todo": []}' > ./fake-api/db.json
fi
