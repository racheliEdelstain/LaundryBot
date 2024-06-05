
# # https://gist.github.com/skt7/71044f42f9323daec3aa035cd050884e#file-dominat-colors-py
# # מחשבון צבעים:https://www.w3schools.com/colors/colors_rgb.asp
# import cv2
# from sklearn.cluster import KMeans

# class DominantColors:
#     CLUSTERS = None
#     IMAGE = None
#     COLORS = None
#     LABELS = None
    
#     def __init__(self, image, clusters=3):
#         self.CLUSTERS = clusters
#         self.IMAGE = image
        
#     def dominantColors(self):
#         # קורא את התמונה
#         img = cv2.imread(self.IMAGE)
        
#         if img is None:
#             print("------------------------empty image--------------------")
#             return
#         # ממיר את התמונה מ-BGR ל-RGB
#         img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                
#         # משנה את התמונה למערך של פיקסלים
#         img = img.reshape((img.shape[0] * img.shape[1], 3))
        
#         # שומר את התמונה לאחר שינוי
#         self.IMAGE = img
        
#         # משתמש באלגוריתם KMeans לקבוצת הפיקסלים
#         kmeans = KMeans(n_clusters = self.CLUSTERS)
#         kmeans.fit(img)
        
#         # מרכזי הקבוצות הם הצבעים הדומיננטיים
#         self.COLORS = kmeans.cluster_centers_
        
#         # שומר את התוויות
#         self.LABELS = kmeans.labels_
        
#         # מחזיר את הצבעים הדומיננטיים לאחר המרה ל-integer
#         return self.COLORS.astype(int)

# img = "C:\\Users\\user\\Pictures\\Screenshots\\c.png"
# clusters = 5
# dc = DominantColors(img, clusters) 
# colors = dc.dominantColors()
# print(colors)

# https://chatgpt.com/c/0e02e7fb-df96-4521-8b1a-f32f5695a168
import cv2
import numpy as np
from sklearn.cluster import KMeans

class DominantColors:
    CLUSTERS = None
    IMAGE = None
    COLORS = None
    LABELS = None
    
    def __init__(self, image, clusters=3):
        self.CLUSTERS = clusters
        self.IMAGE = image
        
    def dominantColors(self):
        # קורא את התמונה
        img = cv2.imread(self.IMAGE)
        
        if img is None:
            print("------------------------empty image--------------------")
            return

        # ממיר את התמונה מ-BGR ל-RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                
        # משנה את התמונה למערך של פיקסלים
        img = img.reshape((img.shape[0] * img.shape[1], 3))
        
        # משתמש באלגוריתם KMeans לקבוצת הפיקסלים
        kmeans = KMeans(n_clusters=self.CLUSTERS)
        kmeans.fit(img)
        
        # מרכזי הקבוצות הם הצבעים הדומיננטיים
        self.COLORS = kmeans.cluster_centers_
        
        # שומר את התוויות
        self.LABELS = kmeans.labels_
        
        # ספירת הפיקסלים בכל קלאסטר
        pixel_counts = {label: np.sum(self.LABELS == label) for label in np.unique(self.LABELS)}
        
        # מיון הצבעים לפי כמות הפיקסלים בהם
        sorted_colors = sorted(self.COLORS, key=lambda x: pixel_counts[np.where((self.COLORS == x).all(axis=1))[0][0]], reverse=True)

        return sorted_colors

# דוגמה לשימוש
img_path = "C:\\Users\\user\\Pictures\\Screenshots\\shirts.png"  # שינה כתובת לתמונה שלך
clusters = 3
dc = DominantColors(img_path, clusters) 
sorted_colors = dc.dominantColors()
colorsRGB=("אדום","ירוק","כחול")
for color in sorted_colors:    
    print(color)





# https://www.geeksforgeeks.org/python-opencv-cv2-imread-method/
# import cv2

# # Load the image
# image_path="C:\\Users\\user\\Pictures\\Screenshots\\img.png"
# image = cv2.imread(image_path)

# if image is None:
#     print("----------------------------no image!------------------")
#     exit()
# # Display the image
# cv2.imshow("Image", image)

# # Wait for the user to press a key
# cv2.waitKey(0)

# # Close all windows
# cv2.destroyAllWindows()

# # https://stackoverflow.com/questions/22829210/why-does-cv2-imshow-result-in-error-in-python
# import cv2
# img=cv2.imread('img.png',1)    #changed image format to jpg
# cv2.namedWindow('img',cv2.WINDOW_NORMAL)
# cv2.waitKey(10000)
# cv2.imshow('cv2.WINDOW_NORMAL',img)
# cv2.destoryAllWindows()
