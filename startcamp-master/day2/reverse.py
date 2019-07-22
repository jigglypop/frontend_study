with open('number.txt','r') as file:   
    numbers = file.readlines()

print(numbers)
# 리스트를 뒤집는다.
numbers.reverse()
with open('number_revers.txt','w') as file:
    for number in numbers:
        file.write(number)

# number_reverse.txt 로 저장!
