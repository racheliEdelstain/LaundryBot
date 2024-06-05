


# https://chatgpt.com/c/ea013284-b36d-4c28-b5f2-d92f589da364
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam

# הגדרת הגדרות בסיסיות
image_size = (128, 128)
batch_size = 32

# הגדרת נתיבים לנתוני אימון ובדיקה
train_data_path = 'path/to/train_data'
test_data_path = 'path/to/test_data'

# יצירת גנרטור לנתוני אימון ובדיקה
train_datagen = ImageDataGenerator(rescale=1./255)
test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    train_data_path,
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical'
)

test_generator = test_datagen.flow_from_directory(
    test_data_path,
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical'
)

# בניית המודל
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(len(train_generator.class_indices), activation='softmax')
])

# קומפילציה של המודל
model.compile(optimizer=Adam(), loss='categorical_crossentropy', metrics=['accuracy'])

# אימון המודל
model.fit(train_generator, epochs=10, validation_data=test_generator)

# הערכת המודל
loss, accuracy = model.evaluate(test_generator)
print(f'Test accuracy: {accuracy}')

# שמירת המודל המאומן
model.save('fabric_classifier_model.h5')


# import tensorflow as tf
# from tensorflow.keras import layers, models
# from tensorflow.keras.preprocessing.image import ImageDataGenerator
# import numpy as np







# # יצירת מודל CNN
# model = models.Sequential()
# model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)))
# model.add(layers.MaxPooling2D((2, 2)))
# model.add(layers.Conv2D(64, (3, 3), activation='relu'))
# model.add(layers.MaxPooling2D((2, 2)))
# model.add(layers.Conv2D(128, (3, 3), activation='relu'))
# model.add(layers.MaxPooling2D((2, 2)))
# model.add(layers.Conv2D(128, (3, 3), activation='relu'))
# model.add(layers.MaxPooling2D((2, 2)))
# model.add(layers.Flatten())
# model.add(layers.Dense(512, activation='relu'))
# model.add(layers.Dense(1, activation='sigmoid'))  # עבור סיווג בינארי, אפשר לשנות עבור ריבוי תוויות

# # קומפילציה של המודל
# model.compile(loss='binary_crossentropy',
#               optimizer='adam',
#               metrics=['accuracy'])

# # יצירת מחולל תמונות להגדלת מאגר התמונות
# train_datagen = ImageDataGenerator(rescale=1./255)
# validation_datagen = ImageDataGenerator(rescale=1./255)

# # הגדרת נתיבי התמונות
# train_dir = 'path_to_train_data'
# validation_dir = 'path_to_validation_data'

# # הכנת מאגרי התמונות
# train_generator = train_datagen.flow_from_directory(
#         train_dir,
#         target_size=(150, 150),
#         batch_size=20,
#         class_mode='binary')

# validation_generator = validation_datagen.flow_from_directory(
#         validation_dir,
#         target_size=(150, 150),
#         batch_size=20,
#         class_mode='binary')

# # אימון המודל
# history = model.fit(
#       train_generator,
#       steps_per_epoch=100,
#       epochs=30,
#       validation_data=validation_generator,
#       validation_steps=50)
