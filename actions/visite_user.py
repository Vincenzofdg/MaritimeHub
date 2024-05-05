# from selenium.common.exceptions import TimeoutException
from tools.selenium_functions import xpath
import web_elements.instagram as style


def visite_user(params):
    url, user, browser = [*params]

    browser.get(url + "direct/inbox/")

    search_btn = xpath(style.xpath_search_btn, browser)
    search_btn.click()

    find_user = xpath(style.xpath_search_input, browser)
    find_user.send_keys(user)

    user_target_01 = xpath(style.xpath_first_user_founded_01, browser)
    user_target_01.click()

    user_target_02 = xpath(style.xpath_first_user_founded_02, browser)
    user_target_02.click()

    text_arr = ["T", "lorem FREOAIFNA LOREM lorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREMlorem FREOAIFNA LOREM"]

    msg_input_01 = xpath(style.xpath_send_msg_input_01, browser)
    msg_input_01.send_keys(text_arr[0])
    
    for l in text_arr[1]:
        msg_input_02 = xpath(style.xpath_send_msg_input_02, browser)
        msg_input_02.send_keys(l)

    print(f"Mandando mensagem para...{user}")

    send_msg_btn = xpath(style.xpath_send_msg_btn, browser)
    send_msg_btn.click()
    
   