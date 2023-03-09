from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

number = 0
    
    
@app.get('/')
def index():
    return render_template('index.html')

@app.post('/submit')
def submit():
    number = request.form.get('number')
    try:
        number = int(number)
        return render_template('submit.html', number=number)
    except:
        return render_template('error.html', string=number)

if __name__ == "__main__":
    app.run(debug=True)