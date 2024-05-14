import pyautogui
from pynput.mouse import Listener

def on_click(x, y, button, pressed):
    if pressed:
        print(f"Clicou na posição (x, y): ({x}, {y})")
        listener.stop()

print("Clique na imagem para obter as coordenadas...")

# Inicia o listener do mouse
with Listener(on_click=on_click) as listener:
    listener.join()