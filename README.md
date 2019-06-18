Documentation
====================

## Installation instructions

Please follow the documentation below to install sandbox.

### Using sandbox on host machine

1. Install sandbox, see [instructions](https://github.com/getsandbox/sandbox).
2. Start sandbox on port `8001`:
	```bash
	sandbox run --port="8001"
	```

### Using sandbox within docker

1. Build the image:
	```bash
	docker build -t data-hub-sandbox .
	```
2. Start sandbox server on port `8001`:
	```bash
	docker run -it -p 8001:8001 data-hub-sandbox
	```
	
	Stop the server by pressing `CTRL`+`C`

### Creating Docker container for CircleCI

TODO: Add automatic docker builds.

```bash
docker login # Ask webops for Docker Hub access to the ukti group.
docker build -f Dockerfile -t data-hub-sandbox .

docker tag data-hub-sandbox:latest ukti/data-hub-sandbox:latest

docker push ukti/data-hub-sandbox:latest
```

You image should be now listed at [Docker Hub](https://cloud.docker.com/u/ukti/repository/docker/ukti/data-hub-sandbox/tags).
