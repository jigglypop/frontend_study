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
a=city.values()


for y in range(3):
    Sum=0
    for x in range(len(city)):
        Sum+=a[x][y]
    print(Sum)




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
print(f'더웠던 곳 :{L}, 추웠던 곳:{S}')






# 3-3. 위에서 서울은 영상 2도였던 적이 있나요?

# 아래에 코드를 작성해 주세요.

if 2 in city['서울']:
    print('예')
else:
    print('아니오')