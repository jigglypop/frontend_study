
arr = [55,7,78,12,42,8,9,4,7,1,4]
n = len(arr)
for j in range(n-2):
    for i in range(n-1):
        if arr[i] > arr[i+1]:
            arr[i], arr[i+1] = arr[i+1], arr[i]
    print(arr)
print(n)

