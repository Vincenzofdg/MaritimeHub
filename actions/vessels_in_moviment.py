from tools.selenium_functions import xpath, tag_names
import web_elements.vessels_in_moviment as style
import time

class Vessel_Status:
    def __init__(self, name, agent):
        self.name = name
        self.agent = agent



def vessels_in_moviment(browser):
    vessel_parent = xpath(style.vessel_array, browser)
    vessel_sons = tag_names("tr", vessel_parent)


    for index, vessel_son in enumerate(vessel_sons):
        if index > 1:
            vessel = Vessel_Status(name='', agent='')
            all_info = tag_names("td", vessel_son)
            for i, info in enumerate(all_info):
                if i == 1:
                    vessel.name = info.text
                if i == 8:
                    vessel.agent = info.text
            time.sleep(1)

            # manda para o db
            print(vessel.name)




    time.sleep(15)