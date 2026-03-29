import requests
from bs4 import BeautifulSoup
import json
import os
import re
import time
import random
from datetime import datetime

# Expanded Product list with Categories
PRODUCTS = [
    # Rice & Grains
    {"id": "ponni_rice", "name": "Ponni Rice", "category": "Rice", "search_query": "ponni rice 25kg price jiomart", "fallback": 1350.0},
    {"id": "basmati_rice", "name": "Basmati Rice", "category": "Rice", "search_query": "basmati rice 1kg price jiomart", "fallback": 180.0},
    {"id": "wheat_flour", "name": "Wheat Flour (Atta)", "category": "Rice", "search_query": "aashirvaad atta 5kg price jiomart", "fallback": 280.0},
    
    # Edible Oils
    {"id": "sunflower_oil", "name": "Sunflower Oil", "category": "Oils", "search_query": "sunflower oil 1l price jiomart", "fallback": 145.0},
    {"id": "gingelly_oil", "name": "Gingelly Oil", "category": "Oils", "search_query": "idhyam gingelly oil 1l price jiomart", "fallback": 320.0},
    {"id": "groundnut_oil", "name": "Groundnut Oil", "category": "Oils", "search_query": "groundnut oil 1l price jiomart", "fallback": 190.0},
    
    # Dals & Pulses
    {"id": "toor_dal", "name": "Toor Dal", "category": "Dals", "search_query": "toor dal 1kg price jiomart", "fallback": 165.0},
    {"id": "moong_dal", "name": "Moong Dal", "category": "Dals", "search_query": "moong dal 1kg price jiomart", "fallback": 120.0},
    {"id": "urad_dal", "name": "Urad Dal", "category": "Dals", "search_query": "urad dal 1kg price jiomart", "fallback": 150.0},
    
    # Spices & Masalas
    {"id": "chilli_powder", "name": "Chilli Powder", "category": "Spices", "search_query": "chilli powder 100g price jiomart", "fallback": 45.0},
    {"id": "turmeric_powder", "name": "Turmeric Powder", "category": "Spices", "search_query": "turmeric powder 100g price jiomart", "fallback": 35.0},
    {"id": "pepper", "name": "Black Pepper", "category": "Spices", "search_query": "black pepper 100g price jiomart", "fallback": 95.0},
    
    # Household & Tea/Coffee
    {"id": "tea_powder", "name": "3 Roses Tea", "category": "Household", "search_query": "3 roses tea 250g price jiomart", "fallback": 160.0},
    {"id": "coffee_powder", "name": "Bru Coffee", "category": "Household", "search_query": "bru coffee 50g price jiomart", "fallback": 85.0},
    {"id": "bath_soap", "name": "Hamam Soap", "category": "Household", "search_query": "hamam soap 100g price jiomart", "fallback": 35.0},
    {"id": "detergent", "name": "Surf Excel", "category": "Household", "search_query": "surf excel 1kg price jiomart", "fallback": 140.0}
]

def fetch_market_price(product):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    }
    url = f"https://www.google.com/search?q={product['search_query']}"
    
    try:
        # Avoid being blocked by adding random delay
        time.sleep(random.uniform(2, 4)) 
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        text = soup.get_text()
        
        # Regex to find currency patterns
        match = re.search(r'(?:₹|Rs\.?)\s?(\d+)', text)
        if match:
            return float(match.group(1))
    except Exception as e:
        print(f"Error fetching {product['name']}: {e}")
    
    return product['fallback']

def main():
    market_data = {
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S"), 
        "categories": {}
    }
    
    for p in PRODUCTS:
        print(f"Processing {p['name']} from {p['category']}...")
        price = fetch_market_price(p)
        
        if p["category"] not in market_data["categories"]:
            market_data["categories"][p["category"]] = {}
            
        market_data["categories"][p["category"]][p["id"]] = {
            "market_price": price, 
            "name_en": p["name"]
        }

    os.makedirs("src/data", exist_ok=True)
    output_path = "src/data/market_prices.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(market_data, f, indent=2, ensure_ascii=False)
    print(f"Scraper finished successfully! Saved {len(PRODUCTS)} items.")

if __name__ == "__main__":
    main()


