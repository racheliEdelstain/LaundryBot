
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="123456789"
)

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE laundryBot")