T=int(input())

for tc in range(1,T+1):
    n=int(input())
    
    s = []
    Q = [2,3,5,7,11]
    for j in Q:
        for i in range(n):                
            if n % j**i !=0:
                a = i-1
                s.append(a)
                break
    
    b = map(str,s)
    c = " ".join(b)
    print(f'#{tc} {c}')
   