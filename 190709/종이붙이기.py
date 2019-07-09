def S(y,x):
    return 0<=y<N and 0<=x<N and (M[y][x] == 0 or M[y][x] == 3)

def DFS(sy, sx):
    global r

    if M[sy][sx] == 3:
        r = 1
        return

    v.append((sy, sx))
    for i in range(4):
        ny = sy + dy[i]
        nx = sx + dx[i]
        if S(ny, nx) and (ny, nx) not in visited:
            DFS(ny, nx)


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    M = [list(map(int, input())) for _ in range(N)]

    for y in range(N):
        for x in range(N):
            if M[y][x] == 2:
                sy, sx = y,x

    #상, 하, 좌, 우
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]

    v = []
    r = 0
    DFS(sy, sx)
    print(f'#{tc} {r}'))