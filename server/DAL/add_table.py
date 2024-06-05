import mysql.connector
#משתנה שמתחבר לmysql
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="123456789",
  database="BlindWalkDB"
)
#יוצר טבלנ חדשה עם כל שדות הטופס הרשמה כל השדות ששלחתי לה
mycursor = mydb.cursor()
mycursor.execute("drop TABLE users ")
mycursor.execute("CREATE TABLE users (id varchar(10) primary key, user_name NVARCHAR(255) not null, password nvarchar(20) not null,first_name NVARCHAR(255) not null, last_name NVARCHAR(255) not null, phone NVARCHAR(14) not null, email VARCHAR(255) not null)")
