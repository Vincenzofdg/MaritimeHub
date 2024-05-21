from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import TimeoutException
from dotenv import dotenv_values
from actions.login import login
from actions.vessels_in_moviment import vessels_in_moviment as in_moviment
from actions.status import get_status
from time import sleep

import pymysql
import asyncio

# Browser Settings
setting = Options()
setting.add_argument("--disable-extensions")
setting.add_argument("--disable-gpu")
setting.add_argument("--no-sandbox")
setting.add_argument("--disable-dev-shm-usage")
setting.add_argument("--headless")

browser = webdriver.Firefox(options=setting)

# browser = webdriver.Firefox()

env = dotenv_values(".env")

# Env Values
user = env["username"]
password = env["password"]
url = env["base_url"]

db_host = env["db_host"]
db_database = env["db_database"]
db_user = env["db_user"]
db_password = env["db_password"]

# db_conection = pymysql.connect(
#     host = db_host,
#     user = db_user,
#     password = db_password,
#     db = db_database
# )

def connect_to_mysql():
    return pymysql.connect(
    host = db_host,
    user = db_user,
    password = db_password,
    db = db_database,
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)


async def main_code():
    counter = 0
    db_conection = connect_to_mysql()
    cursor = db_conection.cursor()

    try:
        print('Bot started')
        # Bot login
        login([url, user, password, browser])

        # Get Legend Status
        cursor.execute("TRUNCATE TABLE status;")
        get_status(cursor, browser)
        db_conection.commit()

        # table vessels
        while True:
            counter += 1
            print('[{}] getting vessels...'.format(counter))
            cursor.execute("TRUNCATE TABLE vessels;")
            in_moviment(cursor, browser)
            db_conection.commit()
            await asyncio.sleep(360)  # 6 minutos
            browser.refresh()
            db_conection = connect_to_mysql()
            cursor = db_conection.cursor()
    finally:
        sleep(1)
        browser.close()


asyncio.run(main_code())