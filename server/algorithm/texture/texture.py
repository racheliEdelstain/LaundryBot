
# https://chatgpt.com/c/ea013284-b36d-4c28-b5f2-d92f589da364
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

# טעינת המודל
model = load_model('fabric_classifier_model.h5')

# טעינת תמונה חדשה לבדיקה
img_path = 'path/to/new_fabric_image.jpg'
img = image.load_img(img_path, target_size=image_size)
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0) / 255.0

# חיזוי הסוג הבד
prediction = model.predict(img_array)
predicted_class = np.argmax(prediction[0])
class_indices = {v: k for k, v in train_generator.class_indices.items()}
predicted_label = class_indices[predicted_class]

print(f'The fabric type is: {predicted_label}')
