import sys
input = sys.stdin.readline

def preorder(tree, root):
    S = []
    S.append(root)
    r = ''
    while 0 < len(S):
        d = S.pop()
        r += d
    if tree[d][1] != '.':
        S.append(tree[d][1])
    if tree[d][0] != '.':
        S.append(tree[d][0])
    print(r)


def preorder(tree, root):
    S = []
    S.append(root)
    r = ''
    while 0 < len(S):
        d = S.pop()
        r += d

    
