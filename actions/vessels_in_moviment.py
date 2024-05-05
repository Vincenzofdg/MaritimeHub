from tools.selenium_functions import xpath
import web_elements.vessels_in_moviment as style
import time

def vessels_in_moviment(browser):


    vessel_array = xpath(style.vessel_array, browser)
    print(vessel_array)



    time.sleep(15)
