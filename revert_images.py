import re

with open('index.html', 'r') as f:
    content = f.read()

# Interiores
content = content.replace('plans_v16/page_3.png', '../../campon_living_room_v1.png')
content = content.replace('plans_v16/page_4.png', '../../campon_terrace_flat_facade.png')
content = content.replace('plans_v16/page_5.png', '../../campon_kitchen_roundabout_final_v2.png')
content = content.replace('plans_v16/page_7.png', '../../campon_bathroom_v4_wood_gold.png')

# Amenities
content = content.replace('plans_v16/page_9.png', '../../campon_piscina_flat_facade.png')
content = content.replace('plans_v16/page_10.png', '../../campon_piscina_interior_final.png')
content = content.replace('plans_v16/page_11.png', '../../campon_gimnasio_final.png')

with open('index.html', 'w') as f:
    f.write(content)
