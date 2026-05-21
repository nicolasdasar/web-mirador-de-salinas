from PIL import Image
try:
    img = Image.open('bottom.png')
    print(f"Size: {img.size}")
except Exception as e:
    print(e)
