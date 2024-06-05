import mysql.connector

def check_is_user(user_name, user_email, password):
  mydb = mysql.connector.connect(
      host="localhost",
      user="root",
      password="123456789",
      database="laundryBot"
  )
  mycursor = mydb.cursor()
  query = "SELECT * FROM users WHERE name=%s AND email=%s AND password=%s"
  values = (user_name, user_email, password)
  mycursor.execute(query, values)
  myresult = mycursor.fetchall()
  if(myresult):
    print("--is user--"*5)
    for x in myresult:
      print(x)
    return "True"
  else:
    print("--no user--"*5)
    return "False"
  mycursor.close()
  mydb.close()
  
  
r=check_is_user("rachel","r2022@gmail.com","1234567")

