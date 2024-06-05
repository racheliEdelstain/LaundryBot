# Import Module
from PIL import Image

def most_common_used_color(img):
	# Get width and height of Image
	width, height = img.size

	# Initialize Variable
	r_total = 0
	g_total = 0
	b_total = 0
    count = 0

	# Iterate through each pixel
	for x in range(0, width):
		for y in range(0, height):
			# r,g,b value of pixel
			r, g, b = img.getpixel((x, y))	
			if r>230:
				if g>230:
					if b>230:
						r_total+=r
						g_total+=g
						b_total+=b
                              
	
        

	return (r_total/count, g_total/count, b_total/count)

# Read Image
img = Image.open(r"C:\Users\user\Pictures\Screenshots\shirts.png")

# Convert Image into RGB
img = img.convert('RGB')

# call function
common_color = most_common_used_color(img)

print(common_color)
# Output is (R, G, B)


# https://www.geeksforgeeks.org/python-pil-getcolors-method/
# importing Image module from PIL package 
# from PIL import Image 

# # opening a image 
# im = Image.open(r"C:\Users\user\Pictures\Screenshots\c.png").convert("L") 

# # getting colors 
# # multiband images (RBG) 
# im1 = Image.Image.getcolors(im) 

# print(im1) 

# # https://gemini.google.com/app/4422783df69e061c
# from PIL import Image

# def get_rgb_colors(image_path):
# #   """
# #   מקבל נתיב קובץ של תמונה ומחזיר רשימה של טיפולים הכוללים את ערכי ה-RGB עבור כל פיקסל.

# #   Args:
# #     image_path: נתיב הקובץ של התמונה.

# #   Returns:
# #     רשימה של טיפולים, כאשר כל טיפול מורכב מצבע (טופל RGB) ומספר הפיקסלים בצבע זה.
# #   """

#   # פתיחת התמונה והמרתה לגווני אפור
#   im = Image.open(image_path).convert("L")

#   # קבלת רשימת הטיפולים
#   colors = im.getcolors()

#   # המרת טיפולים לערכי RGB
#   rgb_colors = []
#   for (color, count) in colors:
#   # המרת ערך הטופל לערכי RGB נפרדים באמצעות Image.getRGB
#     r, g, b = Image.getRGB(color)
#     rgb_colors.append((r, g, b, count))

#   return rgb_colors

# # הדגמה
# image_path = r"C:\Users\user\Pictures\Screenshots\bbbb.png"
# rgb_colors = get_rgb_colors(image_path)
# print(rgb_colors)

