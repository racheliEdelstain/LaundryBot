
# https://www.geeksforgeeks.org/how-to-remove-the-background-from-an-image-using-python/
# Importing Required Modules 
from rembg import remove 
from PIL import Image 

# Store path of the image in the variable input_path 
input_path = r"C:\Users\user\Pictures\Screenshots\minis.png" 

# Store path of the output image in the variable output_path 
output_path = r"C:\Users\user\Pictures\Screenshots\minisPut.png" 

# Processing the image 
input = Image.open(input_path) 

# Removing the background from the given Image 
output = remove(input) 

#Saving the image in the given path 
output.save(output_path) 
