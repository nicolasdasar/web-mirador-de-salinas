import os
from PIL import Image

def process_plans():
    # We know the sidebar is approximately 0 to 468. We'll use 480 to be safe and include the line.
    sidebar_w = 480
    
    pages = {
        'page_14.png': ('left', 'right'),
        'page_15.png': ('left', 'right'),
        'page_16.png': ('left', 'right')
    }
    
    for filename, sides in pages.items():
        path = os.path.join('plans_v16', filename)
        if not os.path.exists(path): continue
        
        img = Image.open(path).convert('RGB')
        w, h = img.size
        
        # The usable plan area is from sidebar_w to w.
        # It's split exactly in half for left/right.
        plan_area_w = w - sidebar_w
        half_plan_w = plan_area_w // 2
        
        midpoint = sidebar_w + half_plan_w
        
        # LEFT PLAN: sidebar + left half
        img_left = img.crop((0, 0, midpoint, h))
        img_left.save(os.path.join('plans_v16', filename.replace('.png', '_left.png')))
        
        # RIGHT PLAN: sidebar + right half
        # Create a new image
        img_right = Image.new('RGB', (sidebar_w + half_plan_w, h), (255, 255, 255))
        
        # Paste sidebar
        sidebar = img.crop((0, 0, sidebar_w, h))
        img_right.paste(sidebar, (0, 0))
        
        # Paste right half
        right_half = img.crop((midpoint, 0, w, h))
        img_right.paste(right_half, (sidebar_w, 0))
        
        img_right.save(os.path.join('plans_v16', filename.replace('.png', '_right.png')))
        print(f"Processed {filename}")

process_plans()
