for tc in range(1,11):
    T = int(input())
    m = list(map(int,input().split()))
    c = 0
    for i in range(2,T-2):
        if max(m[i-2],m[i-1],m[i],m[i+1],m[i+2]) != m[i]:
            continue
        else:
            c += m[i]-max(m[i-2],m[i-1],m[i+1],m[i+2])
    print(f'#{tc} {c}')