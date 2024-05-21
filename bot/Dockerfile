FROM selenium/standalone-firefox:latest

USER root
RUN apt-get update && apt-get install -y python3 python3-pip
USER seluser

WORKDIR /usr/src/app

COPY . .

RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["python3", "script.py"]
