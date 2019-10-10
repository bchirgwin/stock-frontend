Put the following into "stack.yml":

# Use postgres/example user/password credentials
#8080:8080 for outside:inside

version: '3.1'

services:

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: example

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080


Then run 

docker-compose -f stack.yml up

In adminer, export and save.

Now, we add volumes

  # Use postgres/example user/password credentials
  1 version: '3.1'
  2
  3 services:
  4
  5   db:
  6     image: postgres
  7     restart: always
  8     environment:
  9       POSTGRES_PASSWORD: example
 10     volumes:
 11       - ~/Documents/docker/ex-postgres/vols/postgres/data:/var/lib/postgresql/data
 12
 13   adminer:
 14     image: adminer
 15     restart: always
 16     ports:
 17       - 8080:8080
