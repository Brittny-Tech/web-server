docker build -t web-server .
docker run -p 49160:8080 -d web-server

heroku container:login
heroku container:push web -a brittny-tech
heroku container:release web -a brittny-tech