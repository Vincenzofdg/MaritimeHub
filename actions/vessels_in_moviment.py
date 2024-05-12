from tools.selenium_functions import xpath, tag_names
import web_elements.vessels_in_moviment as style
import time
import re

class Vessel_Status:
    def __init__(self, name, agent, status):
        self.name = name
        self.agent = agent
        self.status = status


def vessels_in_moviment(cursor, browser):
    sql_query = "INSERT INTO vessels (name, agent, status_rgb) VALUES (%s, %s, %s)"

    vessel_parent = xpath(style.vessel_array, browser)
    vessel_sons = tag_names("tr", vessel_parent)


    for index, vessel_son in enumerate(vessel_sons):
        vessel_son_style = vessel_son.get_attribute("style")
        background_find_rule = r'background\s*:\s*([^;]+)'

        find_background_color = re.search(background_find_rule, vessel_son_style)

        if index >= 1:
            vessel = Vessel_Status(
                name = '', 
                agent = '', 
                status = find_background_color.group(1)
            )

            all_info = tag_names("td", vessel_son)
            for i, info in enumerate(all_info):
                if i == 1:
                    vessel.name = info.text
                if i == 8:
                    vessel.agent = info.text
            time.sleep(1)

            cursor.execute(sql_query, [vessel.name, vessel.agent, vessel.status])
