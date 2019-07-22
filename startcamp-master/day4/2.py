# 2. 반 평균을 구하시오. -> 전체 평균
scores = {
    'a': {
        '수학': 80,
        '국어': 90,
        '음악': 100
    },
    'b': {
        '수학': 80,
        '국어': 90,
        '음악': 100
    }
}

# 아래에 코드를 작성해 주세요.
"""
total_score=0
for person_scores in scores.values():
    for score in person_scores.values():
        total_score += score
        count += 1

print(total_score/count)
"""

for x in scores.keys():
    s = 0
    for y in scores[x].values():
        s += y
    print(f'{x} {s/len(scores[x])}')
