import json, os, re, glob

def get_hotel_info(hotel_id, hotel_name):
    cache = json.load(open('all_hotels_cache.json'))
    info = cache.get(str(hotel_id)) or cache.get(int(hotel_id))
    return info

print("Enrichment helper ready")
