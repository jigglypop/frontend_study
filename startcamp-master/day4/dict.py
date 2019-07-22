# dictionary
# key -value
# key : string. integer, float, boolean
# list, dictionary는 key가 될 수 없다.
# value : 모든 값을 가질 수 있다. 

"""
lunch = {'중국집':"02-971-2312"}
print(lunch)
dinner = dict(한식='042-999-9999')
print(dinner)
bf = {}
bf['분식']='012-1231-2132'
print(bf)

menu = ['bf': bf, 'lunch': lunch, 'dinner':dinner]

print(menu['bf']['분식'])
"""
ssafy = {'김은정': '학생', '김인성': '학생', '연용흠':'반장'}

for key in ssafy:
    print(key)
    print(ssafy[key])

for Key, Value in ssafy.items():
    print(Key, Value)

for value in ssafy.values():
    print(value)


for key in ssafy.keys():
    print(key)

# print(ssafy.items()) # key와 value를 가지는 튜플들



