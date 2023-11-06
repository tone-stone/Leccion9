import requests
from bs4 import BeautifulSoup

def scrape_news_titles(url):
    # Hacer la solicitud HTTP
    response = requests.get(url)

    # Verificar si la solicitud fue exitosa (código 200)
    if response.status_code == 200:
        # Analizar el contenido HTML de la página
        soup = BeautifulSoup(response.text, 'html.parser')

        # Encontrar todos los elementos HTML que contienen los títulos de las noticias
        title_elements = soup.find_all('h2', class_='news-title')

        # Imprimir los títulos de las noticias
        for title_element in title_elements:
            print(title_element.text)
    else:
        print(f"Error al hacer la solicitud. Código de estado: {response.status_code}")

# Ejemplo de uso
url = 'https://www.amazon.com'
scrape_news_titles(url)
