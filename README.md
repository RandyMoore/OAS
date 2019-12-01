# OAS
Open API Specification example

Requirements:
* docker
* Node (preferably via nvm)

Run `./run_me.sh`

This will use openapi/oas.yaml to:
* Generate javascript SDK code at openapi/javascript
* Generate python server code at openapi/python_flask
* Bundle a javascript example usage of of the generated javascript SDK (static/demo.js)
* Bring up the Flask server serving the oas.yaml and the demo at http://localhost/example.html
* Additionally, documentation for oas.yaml served by Swagger UI will be available at http://localhost:8080