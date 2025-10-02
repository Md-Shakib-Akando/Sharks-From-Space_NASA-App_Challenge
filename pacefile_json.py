import h5py
import json
import numpy as np

file_path = r"C:\Users\User\Desktop\nc_file\AQUA_MODIS.20020704.L3m.DAY.CHL.chlor_a.4km.nc"

result = {}

with h5py.File(file_path, 'r') as f:
    print("Keys:", list(f.keys()))
    
    for key in f.keys():
        item = f[key]
     
        if isinstance(item, h5py.Dataset):
            result[key] = item[:].tolist()
        else:
            print(f"{key} is a group, skipping...")

with open("color.json", "w") as jf:
    json.dump(result, jf, indent=2)

print("Conversion complete! Saved as color.json")
