from dotenv import dotenv_values 

env = dotenv_values(".env")

user = env["username"]
password = env["password"]
url = env["url_instagram"]