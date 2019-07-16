
import collections


def BFS(v):
    q = collections.deque()
    q.append(v)
    v[v[0]



dy = [-1,1,0,0]
dx = [0,0,-1,1]

Y, X = map(int, input().split())
m = [input() for _ in range(R)]
v = [[0]*C for _ in range(R)]

print(v)
print(m)

s = 0
w = 0

for y in range(Y):
    for x in range(X):
        if not v[y][x] and m[y][x] != '#':
            c = BFS([y, x])

print(s,w)