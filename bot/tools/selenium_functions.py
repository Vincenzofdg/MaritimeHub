from selenium.webdriver.support.ui import WebDriverWait as wait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

limit_time = 10


def id(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.ID, element))
    )


def ids(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_all_elements_located((By.ID, element))
    )


def class_name(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, element))
    )


def name(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.NAME, element))
    )


def css_selector(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.NAME, element))
    )


def xpath(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.XPATH, element))
    )

def tag_name(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_element_located((By.TAG_NAME, element))
    )

def tag_names(element, browser):
    return wait(browser, limit_time).until(
        EC.presence_of_all_elements_located((By.TAG_NAME, element))
    )