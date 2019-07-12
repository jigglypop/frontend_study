maze = {
    'a':['e'],
    'b':['c','f'],
    'c':['b','d'],
    'd':['c'],
    'e':['a','i'],
    'f':['b','g','j'],
    'g':['f','h'],
    'h':['g','l'],
    'i':['e','m'],
    'j':['f','k','n'],
    'k':['j','o'],
    'l':['h','p'],
    'm':['i','n'],
    'n':['m','j'],
    'o':['k'],
    'p':['l'],
}


Q=['a']
v=set('a')
H=[]

while Q:
    n=Q.pop(0)
    k=maze[n] 
    
    for i in range(len(maze[n])):
        if k[i] == 'p':
            H.append('p')
            break
        if k[i] not in v:
            Q.append(k[i])
            v.add(k[i])
            H.append(k[i])

print(H)
     




