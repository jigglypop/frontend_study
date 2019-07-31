#def func(n):
#  for i in range(n):
#        for j in range(i,n):

# O() : 빅오 :  최악의 경우
# 오메가() : 오메가 : 최선의 경우
# 세타() : 세타 : 최선이나 최악의 경우가 같을 경우


arr = [55,7,78,12,42,8,9,4,7,1,4]
n = len(arr)
for j in range(n-1, 0, -1):
    for i in range(j):
        if arr[i] > arr[i+1]:
            arr[i], arr[i+1] = arr[i+1], arr[i]
    print(arr)
print(n)


