from selenium import webdriver
from selenium.webdriver.firefox.options import Options


settings = Options()
settings.add_argument("--disable-extensions")
settings.add_argument("--disable-gpu")
settings.add_argument("--no-sandbox")
settings.add_argument("--disable-dev-shm-usage")
settings.add_argument("--headless")

def create_browser(test):
    if test is True:
        browser = webdriver.Firefox()
    else:
        browser = webdriver.Firefox(options=settings)
    return browser