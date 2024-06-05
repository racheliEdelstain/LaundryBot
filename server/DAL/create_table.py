

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="123456789",
  database="laundryBot"
)

mycursor = mydb.cursor()

mycursor.execute("CREATE TABLE users (name VARCHAR(50), email VARCHAR(50),password VARCHAR(50),numberCredit VARCHAR(20),nameOfCreditCardHolder VARCHAR(20),creditValid VARCHAR(5))")
print("הטבלה נוצרה בהצלחה")