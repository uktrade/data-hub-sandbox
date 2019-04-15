Documentation
====================

## Installation instructions

Please follow the documentation below to install sandbox.



## Using sandbox on host machine

1. Install sandbox, see [instructions](https://github.com/getsandbox/sandbox).
2. Start sandbox on port `8001`:
	```bash
	sandbox run --port="8001"
	```

## Using sandbox within docker

1. Build the image:
	```bash
	docker build -t data-hub-sandbox .
	```
2. Start sandbox server on port `8001`:
	```bash
	docker run -it -p 8001:8001 data-hub-sandbox
	```
	
	Stop the server by pressing `CTRL`+`C`
