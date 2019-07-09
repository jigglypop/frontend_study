import requests

from bs4 import BeautifulSoup

# 1. url 설정

# 2. 요청 보내기

# 3. HTML 문서로 바꾸기

# 4. 원하는 내용 선택자로 뽑아내기

#1. url로 요청(requests.get)을 보내고, response에 저장한다.
url = 'https://finance.naver.com/marketindex/exchangeList.nhn'
response = requests.get(url).text 
#2. 파이썬이 찾기 편한 형식으로 문서를 변경한다.
soup = BeautifulSoup(response,'html.parser')
#3. KOSPI 값을 선택자(selector)를 활용해서 가져온다.
kospi_value=soup.select_one('body > div').text
print(kospi_value)
eur = soup.select_one('body > div > table')
# body > div > table > tbody > tr:nth-child(1) > td.sale
print(eur)