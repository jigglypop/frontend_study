import random
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('hello.html')

@app.route("/cube/<int:a>")
def cube(a):
    b=a**3
    return f'{b}'

# /lunch/사람이름
# 
@app.route("/lunch/<string:name>")
def lunch(name):
    menu = ['한식', '특식A', '특식B', '굶어!!!!']   
    return render_template('lunch.html', name=name, pick=random.choice(menu))


@app.route("/hi")
def hi():
    return render_template('hi.html')

# variable routing! 경로를 변수로 활용한다.
@app.route("/hi/<string:name>")
def higye(name):
    return render_template('hi2.html',namee=name)

# 로또! /lotto
# 로또 번호 6개를 추천해주는 페이지

@app.route("/lotto")
def lotto():
    number=list(range(1,46))
    lotto=random.sample(number,6)
    return f'이번주 당첨번호는 {lotto}!!'


if __name__ == "__main__":
    # python app.py 를 하면 아래의 코드 블록을 실행시킨다.
    app.run(debug=True)