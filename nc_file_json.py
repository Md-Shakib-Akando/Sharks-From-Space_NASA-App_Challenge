import h5py
import json
import numpy as np

file_path = r"C:\Users\User\Desktop\nc_file\cyg.ddmi.s20250907-120000-e20250907-120000.l3.grid-microplastic.a32.d33.nc"

result = {}

# HDF5 ফাইল ওপেন
with h5py.File(file_path, 'r') as f:
    # ফাইলের top-level keys
    print("Keys:", list(f.keys()))
    
    # প্রতিটি variable read এবং list এ convert
    for key in f.keys():
        data = f[key][:]
        result[key] = data.tolist()

# JSON ফাইলে write করা
with open("data.json", "w") as jf:
    json.dump(result, jf, indent=2)

print("Conversion complete! Saved as data.json")
