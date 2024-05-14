from tools.selenium_functions import xpath, tag_names, tag_name
import web_elements.status as style
import time

def get_status(cursor, browser):
    status_block = xpath(style.status_array, browser)
    all_status = tag_names("li", status_block)

    sql_query = "INSERT INTO status (text_value, color_hex) VALUES (%s, %s)"

    for status in all_status:
        rect_html_element = tag_name("rect", status)
        rect_color_fill = rect_html_element.get_attribute("fill")
        time.sleep(1)

        cursor.execute(sql_query, [status.text, rect_color_fill])
