import h5py
import json
import numpy as np

file_path = r"C:\Users\User\Desktop\nc_file\cyg.ddmi.s20250907-120000-e20250907-120000.l3.grid-microplastic.a32.d33.nc"

result = {}


with h5py.File(file_path, 'r') as f:

    print("Keys:", list(f.keys()))
    
 
    for key in f.keys():
        data = f[key][:]
        result[key] = data.tolist()


with open("data.json", "w") as jf:
    json.dump(result, jf, indent=2)

print("Conversion complete! Saved as data.json")
