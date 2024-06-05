import mysql.connector


def insert_user(user_name,email,password,credit_number,credit_card_holder,valid):
  mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456789",
    database="laundryBot"
  )

  mycursor = mydb.cursor()



  sql = "INSERT INTO users (name, email,password,numberCredit,nameOfCreditCardHolder,creditValid) VALUES (%s, %s,%s, %s,%s, %s)"
  val = (user_name, email, password, credit_number, credit_card_holder, valid)
  mycursor.execute(sql, val)

  mydb.commit()

  print(mycursor.rowcount, "record inserted.")