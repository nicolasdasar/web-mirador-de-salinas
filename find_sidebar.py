from PIL import Image

def find_sidebar_width(filename):
    img = Image.open(filename).convert('RGB')
    w, h = img.size
    
    # Check pixels at y = h // 2
    y = h // 2
    consecutive_white = 0
    max_white = 0
    sidebar_end = 0
    
    # Look for the largest vertical white gap between x=300 and x=1000
    for x in range(300, 1000):
        r, g, b = img.getpixel((x, y))
        if r > 240 and g > 240 and b > 240:
            consecutive_white += 1
            if consecutive_white > max_white:
                max_white = consecutive_white
                # The sidebar ends right before this large white gap
                sidebar_end = x - max_white // 2
        else:
            consecutive_white = 0
            
    print(f"File {filename}: Recommended sidebar end {sidebar_end} (max white gap: {max_white})")

find_sidebar_width('plans_v16/page_14.png')
find_sidebar_width('plans_v16/page_15.png')
