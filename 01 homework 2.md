
# Q1

1. Python에서 사용할 수 없는 식별자(예약어)를 찾아 작성하세요.


```python
import keyword
print(keyword.kwlist)
```

    ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
    

# Q2

2. 파이썬에서 float는 실수를 표현하는 과정에서 같은 값으로 일치되지 않습니다.
(floating point rounding error)
따라서, 아래의 값을 비교하기 위해 작성해야하는 코드를 작성하세요.

a = 0.1 * 3
b = 0.3


```python

```


```python

```

# Q3

3. 이스케이프 문자열 중 1) 줄바꿈 2) 탭 3) \ 을 작성하세요.




```python
\n \t \\
```


```python

```

# Q4

4. “안녕, 철수야”를 String Interpolation을 사용하여 출력하세요.

name = “철수”
print(_________________________)


```python
name = "철수"

print(f'"안녕, {name}야"')
```

    "안녕, 철수야"
    


```python

```

# Q5

5. 다음 중 형변환시 오류가 발생하는 것은?

1) str(1) 2) int(‘30’)
3) int(5) 4) bool(‘50’)
5) int(‘3.5’)


```python
str(1)
```




    '1'




```python
int(‘30’)
```


      File "<ipython-input-14-a35f718625ca>", line 1
        int(‘30’)
               ^
    SyntaxError: invalid character in identifier
    



```python
int(5)
```




    5




```python
bool(‘50’)
```


      File "<ipython-input-16-4ceef2f4370e>", line 1
        bool(‘50’)
                ^
    SyntaxError: invalid character in identifier
    



```python
int(‘3.5’)
```


      File "<ipython-input-17-38bca315ad55>", line 1
        int(‘3.5’)
             ^
    SyntaxError: invalid character in identifier
    



```python

```
