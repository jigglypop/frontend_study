def my_sqrt(n):
    a, b = 1, n
    r = 1
    while abs(r**2 -n)>=1e-10:
        r = (a+b)/2
        if r ** 2 < n:
            a = r
        else:
            b = r
    return r
print(my_sqrt(3))



[12,3,4]
map(st