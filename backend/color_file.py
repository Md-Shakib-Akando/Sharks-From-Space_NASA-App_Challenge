import h5py
import json
import numpy as np

file_path = r"C:\Users\User\Desktop\nc_file\AQUA_MODIS.20020704.L3m.DAY.CHL.chlor_a.4km.nc"

result = {}

with h5py.File(file_path, 'r') as f:
    print("Keys:", list(f.keys()))

    for key in f.keys():
        item = f[key]

        if isinstance(item, h5py.Dataset):  # dataset হলে
            print(f"Reading dataset: {key}, shape={item.shape}")
            result[key] = item[:].tolist()

        elif isinstance(item, h5py.Group):  # group হলে
            print(f"Found group: {key}, subkeys={list(item.keys())}")
            # চাইলে group-এর ভেতরেও একইভাবে loop করতে পারো
            group_data = {}
            for subkey in item.keys():
                subitem = item[subkey]
                if isinstance(subitem, h5py.Dataset):
                    group_data[subkey] = subitem[:].tolist()
            result[key] = group_data

with open("color.json", "w") as jf:
    json.dump(result, jf, indent=2)

print("Conversion complete! Saved as color.json")
