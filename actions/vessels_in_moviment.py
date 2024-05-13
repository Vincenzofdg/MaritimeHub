from tools.selenium_functions import xpath, tag_names
import web_elements.vessels_in_moviment as style
import time
import re
from datetime import datetime

class Vessel_Status:
    def __init__(self, name, date, local, status):
        self.name = name
        self.date = date
        self.local = local
        self.status = status


def vessels_in_moviment(cursor, browser):
    current_date = datetime.now()
    date_formated = current_date.strftime("%d-%m-%Y - %H:%M:%S")

    sql_query = "INSERT INTO vessels (name, date, local, status_rgb, updated) VALUES (%s, %s, %s, %s, %s)"

    vessel_parent = xpath(style.vessel_array, browser)
    vessel_sons = tag_names("tr", vessel_parent)


    for index, vessel_son in enumerate(vessel_sons):
        vessel_son_style = vessel_son.get_attribute("style")
        background_find_rule = r'background\s*:\s*([^;]+)'

        find_background_color = re.search(background_find_rule, vessel_son_style)

        if index >= 1:
            vessel = Vessel_Status(
                name = '', 
                date = '',
                local = '',
                status = find_background_color.group(1)
            )

            all_info = tag_names("td", vessel_son)
            for i, info in enumerate(all_info):
                if i == 1:
                    vessel.name = info.text
                if i == 3:
                    if len(info.text) > 1:
                        vessel.local = info.text
                if i == 4:
                    if len(info.text) > 1:
                        vessel.local = info.text
                if i == 5:
                    vessel.date = info.text


            time.sleep(1)

            cursor.execute(sql_query, [vessel.name, vessel.date, vessel.local, vessel.status, date_formated])
