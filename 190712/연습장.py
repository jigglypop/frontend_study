from sys import stdin
from collections import deque
input = stdin.readline


R, C = map(int, input().split())
m = [list(input().strip()) for _ in range(R)]
D = [[0]*C for _ in range(R)]
q = deque()

for i in range(R):
    for j in range(C):
        if m[i][j] == 'J':
            sx, sy = i, j
        elif m[i][j] == 'F':
            q.append((i, j, 1))
            D[i][j] = 1

def BFS():
    q.append((sx, sy, 0))
    D[sx][sy] = 1
    while q:
        x, y, f = q.popleft()
        for dx, dy in (-1, 0), (0, 1), (1, 0), (0, -1):
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= R or ny < 0 or ny >= C:
                if f:
                    continue
                print(D[x][y])
                return
            if not D[nx][ny] and m[nx][ny] != '#':
                q.append((nx, ny, f))
                D[nx][ny] = D[x][y] + 1
    print("x")


BFS()