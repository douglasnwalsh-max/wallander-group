from PIL import Image
import os

images = ['doug-walsh', 'troy-renauld']

for name in images:
    jpg_path = f'public/images/{name}.jpg'
    webp_path = f'public/images/{name}.webp'
    
    if os.path.exists(jpg_path):
        orig_size = os.path.getsize(jpg_path)
        im = Image.open(jpg_path)
        
        # Save optimized WebP
        im.save(webp_path, 'WEBP', quality=82, method=6)
        webp_size = os.path.getsize(webp_path)
        
        # Also optimize the JPEG in place for backward compatibility / OG tags
        im.save(jpg_path, 'JPEG', quality=82, optimize=True, progressive=True)
        new_jpg_size = os.path.getsize(jpg_path)
        
        print(f"{name}: Original JPG: {orig_size:,} bytes -> Optimized JPG: {new_jpg_size:,} bytes | WebP: {webp_size:,} bytes")
