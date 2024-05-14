from tools.selenium_functions import name, xpath
import web_elements.login as style
from selenium.common.exceptions import TimeoutException
from time import sleep

def login(params):
    url, user, password, browser = [*params]

    browser.get(url)
    
    try:
        user_input = xpath(style.user_input, browser)
        user_input.send_keys(user)

        password_input = xpath(style.password_input, browser)
        password_input.send_keys(password)

        sleep(2)

        btn = xpath(style.btn, browser)
        btn.click()


    except TimeoutException:
        print("Problem with TimeoutException, on action/login.py")
        