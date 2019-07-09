def DFS(S):
    global r
    v[S]=1
    for j in range(V+1):
        if M[S][j] and not v[j]:
            if j==G:
                r=1
                return
            DFS(j)

T=int(input())

for tc in range(1,T+1):
    V,E=map(int,input().split())
    M=[[0]*(V+1) for _ in range(V+1)]    
    v=[0 for _ in range(V+1)]
    
    for i in range(E):
        x,y=map(int,input().split())
        M[x][y]=1
    S,G=map(int,input().split())
   
    r=0
    DFS(S)
    print(f'#{tc} {r}')