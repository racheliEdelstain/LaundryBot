import os
from rembg import remove
from PIL import Image

def remove_background_from_images_in_directory(input_dir, output_dir):
    # וודא שהתיקייה המקורית קיימת
    if not os.path.exists(input_dir):
        print(f"התיקייה {input_dir} אינה קיימת.")
        return

    # וודא שהתיקייה היעד קיימת, אם לא, יצור אותה
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # עבור כל קובץ בתיקיית הקלט
    for filename in os.listdir(input_dir):
        # בדוק שהקובץ הוא קובץ תמונה
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
            # טען את התמונה
            input_path = os.path.join(input_dir, filename)
            image = Image.open(input_path)

            # הסר את הרקע
            output_image = remove(image)

            # שמור את התמונה המעובדת בתיקייה היעד
            output_path = os.path.join(output_dir, filename)
            output_image.save(output_path,"png")

            print(f"הוסר רקע מהתמונה: {filename}")

    print("הסתיים הפעולה.")

# קבע את התיקייה המקורית והתיקייה היעד
input_directory = r"C:\Users\user\Pictures\Screenshots"
output_directory = r"C:\Users\user\Pictures\ScreenshotsWithoutBachground"

# הרץ את הפונקציה
remove_background_from_images_in_directory(input_directory, output_directory)
