from tools.selenium_functions import xpath, tag_names
import web_elements.vessels_in_moviment as style
import time



def vessels_in_moviment(browser):
    vessel_parent = xpath(style.vessel_array, browser)
    # vessel_son = tag_names("tr", vessel_parent)

    # test = [elemento for elemento in vessel_son]
    # test = len(elementos_filhos_tr)

    # Encontre todos os elementos filhos
    elementos_filhos = xpath("*", vessel_parent)

    # Itere sobre os elementos filhos
    for elemento_filho in elementos_filhos:
        # Faça algo com cada elemento filho, por exemplo, imprimir seu texto
        print(elemento_filho)



    time.sleep(15)


# /html/body/section[1]/div/div[3]/div/div[1]/div/div[1]/table/tbody
# /html/body/section[1]/div/div[3]/div/div[1]/div/div[1]/table/tbody/tr[24]