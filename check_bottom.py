from PIL import Image
img = Image.open('plans_v16/page_14.png').convert('RGB')
w, h = img.size

# check pixels at the bottom y = h - 100
y = h - 100
for x in range(200, 1000):
    r, g, b = img.getpixel((x, y))
    if r < 200 or g < 200 or b < 200:
        print(f"Non-white pixel found at x={x}")
