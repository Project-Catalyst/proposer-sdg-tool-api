# prerequisites

`.env` : containing all variables that `docker-compose.yml` requires

`server/config/config.json` : if you want to run the migrations, otherwise `.env` is enough

# build

```
docker-compose up --build -d
```
will run everything inside docker
expposed port is 5000

# dev


```
docker-compose -f docker-compose.dev.yml up --build
```
will mount server folder as a docker volume and monitor it
exposed port is 5001
