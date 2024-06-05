# https://gemini.google.com/app/abe44265c965d4af
from flask import Flask, jsonify,request
from flask_cors import CORS


# מודולים בPython שעוזרים בניהול נתיבים ומסלולי קבצים.
import sys
import os

# שורה זו מוסיפה לפייתון את תיקית האב של התיקיה שבה הקובץ הנוכחי , למערכת הנתיבים שלה. ובכך מאפשרת לפייתון 
# למצוא ולייבא קבצים שנמצאים בתיקייה האב של התיקייה שבה נמצא הקובץ הנוכחי
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from DAL.insert_table import insert_user
from DAL.select_table import check_is_user



app = Flask(__name__)
app.config['CORS_ORIGINS'] = ['http://localhost:3000']  # דומיין הדף שלך
app.config['CORS_SUPPORTS_CREDENTIALS'] = True  # אפשר בקשות עם הרשאות
app.config['CORS_EXPOSE_HEADERS'] = ['Content-Type', 'Authorization']  # חשוף כותרות

@app.route('/data', methods = ['GET']) 
def get_data():
    data = {'message': 'Hello from CORS-enabled server!'}
    return jsonify(data)

@app.route('/try', methods = ['GET']) 
def get_try():
    data = {'message': 'Hello from CORS-enabled server!'}
    return jsonify(data)

# this returns 100 (square of 10) 
@app.route('/home/<string:num>', methods = ['GET']) 
def disp(num): 
    
    return jsonify({'data': int(num)**2}) 


# מקבל פרטים של משתמש ואמור לבדוק אם הם קיימם במערכת
@app.route('/is_user/', methods = ['POST']) 
def is_user():
    json = request.get_json()
    print(json)
    name=json["user_name"]
    email=json["email"]
    password=json["password"]
    result=check_is_user(name,email,password )
    print("result: --------------------------::::::"+result)
    
    return result

# מקבל 
@app.route('/add_user/', methods = ['POST']) 
def add_user():
    json = request.get_json()
    print(json)
    insert_user( json["user_name"], json["email"], json["password"], json["credit_card_number"], json["credit_card_holder"],json["valid"])    
    return jsonify(json) 

# מקבל ניתוב של תמונה ואמור לשלוח אותו לפונקציה שתבדוק אותו
@app.route('/check_image/', methods = ['POST']) 
def check_image_color():
    json = request.get_json()
    print(json)
    url=json["url"]
    return jsonify({'data':url}) 


# @app.route("/add", methods=["POST"], strict_slashes=False)
# def add_articles():
#     title = request.json['title']
#     body = request.json['body']

#     article = Articles(
#         title=title,
#         body=body
#         )

#     db.session.add(article)
#     db.session.commit()

#     return article_schema.jsonify(article)


# @app.route('/checkImage/', methods = ['POST']) 
# def check_image():
#     json = request.get_json()
#     print(json)
#     return jsonify({'data':"success"}) 


# @app.route('/check_image', methods=['POST'])
# def handle_post():
#     if request.method == 'POST':
#         url = request.form['url']
#         print(url)
#         return ("hi!"+url)




if __name__ == '__main__':
    CORS(app)
    app.run(host='127.0.0.1', port=5000)








# from flask import Flask, jsonify, request 
  
# from flask_cors import CORS

# app = Flask(__name__)
# app.config['CORS_ORIGINS'] = ['http://localhost:3000']  # דומיין הדף שלך

# @app.route('/data', methods = ['GET']) 
# def get_data():
#     data = {'message': 'Hello from CORS-enabled server!'}
#     return jsonify(data)

# @app.route('/try', methods = ['GET']) 
# def get_try():
#     data = {'message': 'Hello from CORS-enabled server!'}
#     return jsonify(data)
  
  
  
# # creating a Flask app 
  
# # on the terminal type: curl http://127.0.0.1:5000/ 
# # returns hello world when we use GET. 
# # returns the data that we send when we use POST. 
# app = Flask(__name__)
# app.config['CORS_ORIGINS'] = ['http://localhost:3000']  # דומיין הדף שלך

# @app.route('/', methods = ['GET', 'POST']) 
# def home(): 
#     if(request.method == 'GET'): 
  
#         data = "hello world"
#         return jsonify({'data': data}) 
  

# # A simple function to calculate the square of a number 
# # the number to be squared is sent in the URL when we use GET 
# # on the terminal type: curl http://127.0.0.1:5000 / home / 10 
# app = Flask(__name__)
# app.config['CORS_ORIGINS'] = ['http://localhost:3000']  # דומיין הדף שלך

# # this returns 100 (square of 10) 
# @app.route('/home/<int:num>', methods = ['GET']) 
# def disp(num): 
    
#     return jsonify({'data': num**2}) 

# # driver function 
# if __name__ == '__main__':
#     CORS(app)
#     app.run(host='127.0.0.1', port=5000)