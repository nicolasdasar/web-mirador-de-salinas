from PIL import Image

def split_image(filename, out_left, out_right, sidebar_width=600):
    img = Image.open(filename)
    w, h = img.size
    
    plan_w = (w - sidebar_width) // 2
    
    # Left Plan
    # crop(left, upper, right, lower)
    img_left = img.crop((0, 0, sidebar_width + plan_w, h))
    img_left.save(out_left)
    
    # Right Plan: We need the sidebar + right plan
    # Create a new image of the same size as img_left
    img_right = Image.new(img.mode, (sidebar_width + plan_w, h), (255, 255, 255))
    
    # Paste sidebar
    sidebar = img.crop((0, 0, sidebar_width, h))
    img_right.paste(sidebar, (0, 0))
    
    # Paste right plan
    right_plan = img.crop((sidebar_width + plan_w, 0, w, h))
    img_right.paste(right_plan, (sidebar_width, 0))
    
    img_right.save(out_right)

# Split pages 14, 15, 16 which have two plans
split_image('plans_v16/page_14.png', 'plans_v16/page_14_left.png', 'plans_v16/page_14_right.png')
split_image('plans_v16/page_15.png', 'plans_v16/page_15_left.png', 'plans_v16/page_15_right.png')
split_image('plans_v16/page_16.png', 'plans_v16/page_16_left.png', 'plans_v16/page_16_right.png')

print("Done splitting!")
