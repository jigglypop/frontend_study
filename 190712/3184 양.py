# 6 6
# ...#..
# .##v#.
# #v.#.#
# #.o#.#
# .###.#
# ...###



import sys
sys.stdin = open("input.txt", 'r')

import collections

def bfs(v):
    q = collections.deque()
    q.append(v)
    visited[v[0]][v[1]] = True
    sheep = 0
    wolf = 0
    if yard[v[0]][v[1]] == 'o':
        sheep += 1
    elif yard[v[0]][v[1]] == 'v':
        wolf += 1

    while q:
        v = q.popleft()
        for a in range(4):
            i = v[0] + di[a]
            j = v[1] + dj[a]
            if 0 <= i <= R-1 and 0 <= j <= C-1 and not visited[i][j] and yard[i][j] != '#':
                visited[i][j] = True
                q.append([i, j])
                if yard[i][j] == 'o':
                    sheep += 1
                elif yard[i][j] == 'v':
                    wolf += 1

    return [sheep, 0] if sheep > wolf else [0, wolf]

di = [0, 0, -1, 1]
dj = [-1, 1, 0, 0]

R, C = map(int, input().split())
yard = [input() for _ in range(R)]
visited = [[False for _ in range(C)] for _ in range(R)]
sheep = 0
wolf = 0
for i in range(R):
    for j in range(C):
        if not visited[i][j] and yard[i][j] != '#':
            cnt = bfs([i, j])
            sheep += cnt[0]
            wolf += cnt[1]
print(sheep, wolf)