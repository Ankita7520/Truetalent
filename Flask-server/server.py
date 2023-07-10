from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL


app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Ankita@123'
app.config['MYSQL_DB'] = 'ankitadb1'

@app.route('/users')
def users():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    result = cur.fetchall()
    cur.close()
    return str(result)


if __name__ == '__main__':
    app.run()
