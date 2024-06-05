
# זה מה שעובד
from PIL import Image
import webcolors
from rembg import remove 
import requests

# הפונקציה מקבלת ניתוב של תמונה והיא עוברת על כל הפיקסלים ואם היא רואה שמופיעה צבע 0,0,0 אז היא מחליפה אותו ב0,0,1 הפונקציה מחזירה ניתוב לתתמונה החדשה
def replace_black(input_path):
    print("--------------replace_black---------------")
    print("input_path: ",input_path)
    if input_path.find("http")!=-1:
        print("the image is url----------------")
        input_image = Image.open(requests.get(input_path, stream=True).raw)
    else:
        print("the image is path to file----------------")
        input_image = Image.open(input_path) 
        
    output_dir = "C:\\Users\\user\\Pictures\\clothes"
    file_name="new_image_after_replace.png"
    output_path=output_dir+"\\"+file_name
    print("output path: ",output_path)
    input_image.save(output_path)
     
    new_image = Image.open(output_path) 
    new_image = new_image.convert('RGB')#ממיר את התמונה לRGB

    # Get width and height of Image
    width, height = new_image.size
    sum_black = 0

    # Iterate through each pixel
    for x in range(width):
        for y in range(height):
            r, g, b = new_image.getpixel((x, y))
            if r == 0 and g == 0 and b == 0:
                new_image.putpixel((x, y), (0,0 , 1))
                sum_black += 1
    print("sum of color (0,0,0) is: ",sum_black," pixels.")
    new_image.save(output_path)

    return output_path
    
# https://www.geeksforgeeks.org/how-to-remove-the-background-from-an-image-using-python/
# פונקציה שמקבלת תמונה ומחזירה ניתוב לתמונה חדשה שהוסר ממנה הרקע
def remove_background(input_path):
    print("--------------remove_background---------------")
    # print("input_path: ",input_path)
    # if input_path.find("http")!=-1:
    #     print("the image is url----------------")
    #     input = Image.open(requests.get(input_path, stream=True).raw)
    # else:
    print("the image is path to file----------------")
    input = Image.open(input_path) 

    # Store path of the output image in the variable output_path 
    output_dir = "C:\\Users\\user\\Pictures\\clothes"

    # Processing the image 
    file_name="new_image_after_remove.png"
    output_path=output_dir+"\\"+file_name
    print("output path: ",output_path)

    # Removing the background from the given Image 
    output = remove(input) 

    #Saving the image in the given path 
    output.save(output_path) 
    return output_path

# הפונקצהי מקבלת תמונה שהיא כבר פתוה ומוכנה לשימוש  שולחת לפונקציה לניוקי הרקע ומחזירה את הממוצע של הצבע של האוביקט
def most_common_used_color(img):
    print("--------------most_common_used_color---------------")
    # Get width and height of Image
    width, height = img.size
    # Initialize Variable
    r_total = 0
    g_total = 0
    b_total = 0
    count = 0
    sum = 0
    # Iterate through each pixel
    for x in range(0, width):
        for y in range(0, height):
            # r,g,b value of pixel
            sum += 1
            r, g, b = img.getpixel((x, y))
            # print(r,g,b)
            if r != 0 and g != 0 and b != 0:
                r_total += r
                g_total += g
                b_total += b
                count += 1
    print(f"count-num of pixels in image:  {count} sum-num of pixels with background: {sum}")
    print("average of image ",count*100/sum)
    if count!=0:
        return (r_total/count, g_total/count, b_total/count)
    return None
 
#ומחזירה את שם הצבע באנגלית RGB הפונקציה מקבלת קלט של צבע בפורמט של
def closest_color(requested_color):
    min_colors = {}
    for key, name in webcolors.CSS3_HEX_TO_NAMES.items():
        r_c, g_c, b_c = webcolors.hex_to_rgb(key)
        rd = (r_c - requested_color[0]) ** 2
        gd = (g_c - requested_color[1]) ** 2
        bd = (b_c - requested_color[2]) ** 2
        min_colors[(rd + gd + bd)] = name
    return min_colors[min(min_colors.keys())]

# RGBהפונקציה הכמעט הסופית- מקבלת קלט של נתיב של תמונה ומחזירה את שם הצבע הממוצע ואת הייצוג שלו ב 
def dominant_color_in_image(image_path):
    
    # לפני שאני מוחקת את הרקע אני רוצה לוודא שאני לא אפספס שום פיקסל שהצבע שלו 0,0,0, שאז אני לא סוכמת אותו 
    output_image_from_replace=replace_black(image_path)
    output_image_from_remove=remove_background(output_image_from_replace)#מחזיר ניתוב חדש לתמונה חדשה בלי רקע
    # Read Image
    img = Image.open(output_image_from_remove)
    # Convert Image into RGB
    img = img.convert('RGB')#ממיר את התמונה לRGB
    
    # call function
    common_color = most_common_used_color(img)
    # print("common_color RGB: ",common_color)
    name_color=closest_color(common_color)
    # print("name common color: ",name_color)
    return (common_color,name_color)


(r,g,b),color=dominant_color_in_image(r"https://www.picshare.co.il/s_pictures/img161393.jpg")
print("-------return--------  \n",r,g,b)
print(color)