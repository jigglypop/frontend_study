n = int(input())
a = [f'{i}(은)는 9의 약수입니다.' for i in range(1,n+1) if n % i ==0]
print('\n'.join(a))
