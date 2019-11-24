#!/usr/bin/env bash
set -x
SCRIPT_PATH="$(cd "$(dirname "$0")"; pwd -P)"
OPENAPI_PATH="$SCRIPT_PATH"/openapi
OPENAPI_GENERATOR_TAG="v4.2.1"

# Python Flask server endpoints
docker run -v "$OPENAPI_PATH/":/python_flask openapitools/openapi-generator-cli:"$OPENAPI_GENERATOR_TAG" generate -g python-flask --package-name python_flask -i /python_flask/oas.yaml -o /python_flask/python_flask
sudo chown -R "$USER":"$USER" "$OPENAPI_PATH"/python_flask

# Javascript Fetch SDK
docker run -v "$OPENAPI_PATH/":/javascript openapitools/openapi-generator-cli:"$OPENAPI_GENERATOR_TAG" generate -g javascript -i /javascript/oas.yaml -o /javascript/javascript
sudo chown -R "$USER":"$USER" "$OPENAPI_PATH"/javascript

# Override generated code with some content
cp generated_code_overrides/flask_controller.py openapi/python_flask/python_flask/controllers/default_controller.py
cp static/demo.js openapi/javascript/src/

cd openapi/javascript
npm install
npm run build
npm install -g browserify
browserify dist/demo.js > ../../static/bundle.js

docker-compose up