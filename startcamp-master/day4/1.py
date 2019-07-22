# 1. 평균을 구하시오.
score = {'수학': 80,'국어': 90,'음악': 100}

V=[]
for value in score.values():
    V.append(value)
# 아래에 코드를 작성해 주세요.
print(sum(V)/len(V))

r=0
for i in score.values():
    r+=i
print(r/len(score))

# 2. sum 함수 활용하기
r2=sum(score.values())
count=len(score)
print(r2/count)

