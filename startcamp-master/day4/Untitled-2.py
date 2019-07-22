# 3. 도시별 최근 3일의 온도입니다.
city = {
    '서울': [-6, -10, 5],
    '대전': [-3, -5, 2],
    '광주': [0, -2, 10],
    '부산': [2, -2, 9],
}

# 3-1. 도시별 최근 3일의 온도 평균은?

# 아래에 코드를 작성해 주세요.
"""
출력 예시)
서울 : 값
대전 : 값
광주 : 값
부산 : 값

for key in city.keys():
    print(sum(city[key])/len(city[key]))

"""
a=[]
for i in city.values():
    a.append(i)

for y in range(3):
    Sum=0
    for x in range(len(city)):
        Sum+=a[x][y]
    print(f'#{y+1}일 {Sum/len(city)}')
# 풀이
"""
for n,t in city.items():
    a=sum(t)/len(t)
    print(f'{n} : {a:.2f}') # f-string : 3.6+
    print('{} : {:.2f}'.format(n,a)) # format-string
    print(n + ":" + a)

"""

# 3-2. 도시 중에 최근 3일 중에 가장 추웠던 곳, 가장 더웠던 곳은?
# 아래에 코드를 작성해 주세요.
Max=[]
for value in city.values():
    Max.append(max(value))
Min=[]
for value in city.values():
    Min.append(min(value))
for key,value in city.items():
    if max(Max) in value:
        L=key
    if min(Min) in value:
        S=key
print(f'더웠던 곳 :{L}, 추웠던 곳:{S}')\
"""
# 풀이 :  지역별로 온도를 모두 확인하면서, 가장 추우면, 해당 도시와 기온을 기록
# 더울 때도, 해당 도시와 기온을 기록
min_temp = 0
max_temp = 0
min_city = ''
max_city = ''
count=0

for name,temp in city.items():
    #첫번째 반복때는 모두 다 저장해야함
    if count == 0:
        min_temp = name
        max_temp = name
        min_city = min(temp)
        max_city = max(temp)
        count += 1

    if min(temp) < min_temp:
        min_city = name
        min_temp = temp
    if max(temp) > min_temp:
        max_city = name
        max_temp = temp
print(f'추운 곳은 {min_city}, 더운 곳은 {max_city}')
"""
# 3-3. 위에서 서울은 영상 2도였던 적이 있나요?
# 아래에 코드를 작성해 주세요.

if 2 in city['서울']:
    print('예')
else:
    print('아니오')
    