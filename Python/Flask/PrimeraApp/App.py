from flask import Flask
import mysql.connector

mydb = mysql.connector.connect(
    host="coydisa.com",
    user="coydisac_root",
    password="",
    database="coydisac_prueba"
)

mycursor = mydb.cursor()

mycursor.execute("SHOW DATABASES")

for x in mycursor:
    print(x)

App = Flask(__name__)


@App.route('/')
def home():
    return 'hello world'


if __name__ == '__main__':
    App.run(port=80, debug=True)
