with open('number.txt','r') as f:   
    lines = f.readlines()
s=[]
for line in lines:
    s.append(line.strip())
for i in range(len(s)):
    print(s[-1-i])