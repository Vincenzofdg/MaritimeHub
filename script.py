from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import TimeoutException
from dotenv import dotenv_values
from actions.login import login
from actions.vessels_in_moviment import vessels_in_moviment as in_moviment
from time import sleep

# Browser Settings
setting = Options()
setting.add_argument("--disable-extensions")
setting.add_argument("--disable-gpu")
setting.add_argument("--no-sandbox")
setting.add_argument("--disable-dev-shm-usage")
setting.add_argument("--headless")

browser = webdriver.Firefox(options=setting)

browser = webdriver.Firefox()

env = dotenv_values(".env")

# Env Values
user = env["username"]
password = env["password"]
url = env["base_url"]


try:
    # Bot login
    login([url, user, password, browser])
    # table main_vessels
    in_moviment(browser)
finally:
    sleep(2)
    browser.close()