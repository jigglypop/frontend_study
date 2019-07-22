a = [6,2,4,9,1,5,6]

M = 3
K = 3
N = a.index(6)
for i in range(K):
    S = N + M
    if S > len(a):
        S = S -len(a)
        a.insert(N + M,0)
        a[S] = a[S-1] + a[S+1]
    else:
        a.insert(N + M,0)
        a[S] = a[S-1] + a[S+1]
    
N = N + M
print(a)