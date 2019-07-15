from sys import stdin
from collections import deque
input = stdin.readline

R, C = map(int, input().split())
a = [list(input().strip()) for _ in range(R)]
dist = [[0]*C for _ in range(R)]
q = deque()
for i in range(R):
    for j in range(C):
        if a[i][j] == 'J':
            sx, sy = i, j
        elif a[i][j] == 'F':
            q.append((i, j, 1))
            dist[i][j] = 1

def BFS():
    q.append((sx, sy, 0))
    dist[sx][sy] = 1
    while q:
        x, y, f = q.popleft()
        for dx, dy in (-1, 0), (0, 1), (1, 0), (0, -1):
            nx, ny = x+dx, y+dy
            if nx < 0 or nx >= R or ny < 0 or ny >= C:
                if f:
                    continue
                print(dist[x][y])
                return
            if not dist[nx][ny] and a[nx][ny] != '#':
                q.append((nx, ny, f))
                dist[nx][ny] = dist[x][y]+1
    print("IMPOSSIBLE")

BFS()


