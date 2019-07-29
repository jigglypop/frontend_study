# class Person:
#     def __init__(self):

#         self.bag = []

#     def put_bag(self, stuff):
#         self.bag.append(stuff)


# a = Person()
# b = Person()

# a.put_bag('책')
# b.put_bag('공책')

# print(b.bag)

#############################

# class Calc:
#     @staticmethod
#     def add(a, b):
#         return a + b


# print(Calc.add(1,2))

#############################

# class Person:
#     count = 0

#     def __init__(self):
#         Person.count += 1


#     @classmethod
#     def print_count(cls):
#         print('{0}명 생성되었습니다.'.format(cls.count))

# james = Person()
# maria = Person()

# Person.print_count()


###############################

# class Date:

#     @staticmethod
#     def is_date_valid(date_string):
#         year, month, day = map(int, date_string.split('-'))
#         return month<=12 and day<=31

# if Date.is_date_valid('2000-15-31'):

#     print('올바른 날짜 형식입니다.')

# else:
#     print('잘못된 날짜 형식입니다.')


##################################

x = 10
y = 3


