FROM docker.pkg.github.com/jgphilpott/docker-images/flask-pack:v1

ADD . /root

WORKDIR /root

CMD python3 -u app/root.py
