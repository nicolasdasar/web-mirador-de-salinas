from PIL import Image

def analyze(filename):
    try:
        img = Image.open(filename).convert('RGB')
        w, h = img.size
        # sample pixels
        pixels = img.getdata()
        dark_count = sum(1 for p in pixels if p[0] < 50 and p[1] < 50 and p[2] < 50)
        white_count = sum(1 for p in pixels if p[0] > 200 and p[1] > 200 and p[2] > 200)
        print(f"{filename}: total {w*h}, dark {dark_count}, white {white_count}")
    except Exception as e:
        print(f"Error {filename}: {e}")

analyze('modal_price.png')
analyze('modal_closed.png')
