#!/bin/bash

mkdir fake-api

echo '{"auth": {"auth_token": "any token"},"todo": []}' > ./fake-api/db.json
