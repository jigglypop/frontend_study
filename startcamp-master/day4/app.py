
# 0. flask
import random
from flask import Flask, render_template, request

# 1. app설정
app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello/<string:name>')
def hello(name):
    return render_template('hello.html',name=name)

@app.route('/lunch')
def lunch():
    menus = ['레드코코넛누들', '소불고기', '삼계탕', '싸이버거', '치킨']
    pick = random.choice(menus)
    return render_template('lunch.html', menus=menus, pick=pick)

@app.route('/naver')
def naver():
    return render_template('naver.html')

@app.route('/ping')
def ping():    
    return render_template('ping.html')

@app.route('/pong')
def pong():    
    # 사용자가 보낸 데이터를 받아와서 
    text = request.args.get('say')
    nn = request.args.get('nn')
    gg = request.args.get("c1")
    snap=[1,2]
    pingersnap=random.choice(snap)
    # 템플릿에 넘겨준다.
    return render_template('pong.html', text=text, nn=nn, gg=gg, pingersnap=pingersnap )
    










@app.route('/lotto')
def lotto():
    return render_template('lotto.html')

@app.route('/lotto2')
def lotto2():
    name = request.args.get('name')
    num = request.args.get('num')
    random.seed(num)
    numbers = random.sample(range(1,46),6)
    return render_template('lotto2.html',name=name, numbers=numbers)


if __name__ == '__main__':
    app.run(debug=True)