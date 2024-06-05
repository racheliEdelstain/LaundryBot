

# # https://www.geeksforgeeks.org/find-and-draw-contours-using-opencv-python/
# import cv2 
# import numpy as np 

# # Let's load a simple image with 3 black squares 
# image = cv2.imread("C:\\Users\\user\\Pictures\\Screenshots\\c.png") 

# if image is None:
#     print("--no image!!!--" *5)
#     exit()
# cv2.waitKey(0) 



# # Grayscale 
# gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 

# # Find Canny edges 
# edged = cv2.Canny(gray, 30, 200) 
# cv2.waitKey(0) 

# # Finding Contours 
# # Use a copy of the image e.g. edged.copy() 
# # since findContours alters the image 
# contours, hierarchy = cv2.findContours(edged, 
# 	cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE) 

# cv2.imshow('Canny Edges After Contouring', edged) 
# cv2.waitKey(0) 

# print("Number of Contours found = " + str(len(contours))) 

# # Draw all contours 
# # -1 signifies drawing all contours 
# cv2.drawContours(image, contours, -1, (0, 255, 0), 3) 

# cv2.imshow('Contours', image) 
# cv2.waitKey(0) 
# cv2.destroyAllWindows() 


# # # https://chatgpt.com/c/0e02e7fb-df96-4521-8b1a-f32f5695a168
# import cv2
# import numpy as np

# # טוענים את קובץ המודל וקובץ התצורה
# net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet_iter_73000.caffemodel')

# # שמות המחלקות שהמודל מזהה
# CLASSES = ["background", "aeroplane", "bicycle", "bird", "boat",
#            "bottle", "bus", "car", "cat", "chair", "cow", "diningtable",
#            "dog", "horse", "motorbike", "person", "pottedplant",
#            "sheep", "sofa", "train", "tvmonitor", "clothing"]

# def detect_clothing(image_path):
#     image = cv2.imread(image_path)
#     (h, w) = image.shape[:2]
#     blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 0.007843, (300, 300), 127.5)

#     net.setInput(blob)
#     detections = net.forward()

#     for i in np.arange(0, detections.shape[2]):
#         confidence = detections[0, 0, i, 2]

#         if confidence > 0.2:
#             idx = int(detections[0, 0, i, 1])
#             if CLASSES[idx] == "clothing":
#                 box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
#                 (startX, startY, endX, endY) = box.astype("int")

#                 cv2.rectangle(image, (startX, startY), (endX, endY), (0, 255, 0), 2)
#                 label = "{}: {:.2f}%".format(CLASSES[idx], confidence * 100)
#                 cv2.putText(image, label, (startX, startY - 15), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

#     cv2.imshow("Output", image)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()

# # קובץ תמונה להבחון
# image_path = "C:\\Users\\user\\Pictures\\Screenshots\\c.png"
# detect_clothing(image_path)

