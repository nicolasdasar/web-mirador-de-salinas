from PIL import Image

img = Image.open('plans_v16/page_14_left.png')
print(f"Left img size: {img.size}")
img = Image.open('plans_v16/page_14.png')
print(f"Original img size: {img.size}")
