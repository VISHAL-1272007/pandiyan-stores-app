import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime

PRODUCTS = [
    {
        "id": "sugar",
        "name_en": "Sugar",
        "name_ta": "சர்க்கரை",
        "url": "https://www.jiomart.com/p/groceries/sugar-1-kg/590001243"
    },
    {
        "id": "toor_dal",
        "name_en": "Toor Dal",
        "name_ta": "துவரம் பருப்பு",
        "url": "https://www.jiomart.com/p/groceries/tata-sampann-unpolished-toor-dal-1-kg/491187424"
    }
]

def fetch_price(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        
        # JioMart price selector - targeting the selling price
        price_tag = soup.find("span", {"id": "price_section"})
        if not price_tag:
            price_tag = soup.find("div", {"class": "jm-heading-xs"}) # Fallback selector
            
        if price_tag:
            # Extract numbers only from string like "₹40.00"
            price_str = price_tag.get_text().strip()
            price_val = "".join(filter(str.isdigit, price_str.split(".")[0]))
            return float(price_val)
    except Exception as e:
        print(f"Error fetching {url}: {e}")
    return None

def main():
    market_data = {
        "last_updated": datetime.now().isoformat(),
        "prices": {}
    }

    for product in PRODUCTS:
        print(f"Fetching price for {product['name_en']}...")
        price = fetch_price(product['url'])
        if price:
            market_data["prices"][product["id"]] = {
                "market_price": price,
                "name_en": product["name_en"],
                "name_ta": product["name_ta"]
            }

    output_dir = os.path.join("src", "data")
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    output_path = os.path.join(output_dir, "market_prices.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(market_data, f, indent=2, ensure_ascii=False)
    
    print(f"Prices updated successfully at {output_path}")

if __name__ == "__main__":
    main()
