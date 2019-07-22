

```python
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# `abs()`\n",
    "\n",
    "> 절대값은 숫자(int, float)가 들어오면 절대값을 반환하고, 복소수(complex)가 들어오면 그 크기를 반환합니다.\n",
    "> \n",
    "> `my_abs(x)`를 만들어보세요."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "**공식문서**\n",
    "<center>\n",
    "    <img src=\"https://user-images.githubusercontent.com/52446416/61273106-b6ee5c00-a7e3-11e9-8ec2-a086b0bc584f.png\", alt=\"\">\n",
    "</center>"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "**복소수 크기 구하는법**\n",
    "<center>\n",
    "    <img src=\"https://user-images.githubusercontent.com/52446416/61273105-b655c580-a7e3-11e9-9859-0a9ffdecdf7d.png\", alt=\"\">\n",
    "</center>"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 예제 입력 및 출력\n",
    "print(abs(3+4j), abs(-0.0), abs(-5))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 아래에 코드를 작성해주세요."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 예제 입력 및 출력\n",
    "print(my_abs(3+4j), my_abs(0.0), my_abs(-5))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 문자열 탐색\n",
    "\n",
    "> 문자열 요소로만 이루어진 리스트를 넣었을 때, 문자열 길이가 2 이상이고 주어진 문자열의 첫번째와 마지막 문자가 같은 문자열의 수를 세는 함수 `start_end`를 작성하시오.\n",
    "\n",
    "예시)\n",
    "\n",
    "```python\n",
    "start_end(['level', 'asdwe', 's', 'abceda', 'gsdwrtfg']) #=> 3\n",
    "```\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 여기에 코드를 작성하세요."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 해당 코드를 통해 3이 나오는지 확인하세요.\n",
    "print(start_end(['level', 'asdwe', 's', 'abceda', 'gsdwrtfg']))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Collatz 추측\n",
    "\n",
    "> 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.\n",
    ">\n",
    "> 1. 입력된 수가 짝수라면 2로 나눕니다. \n",
    "> 2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.\n",
    "> 3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.\n",
    ">\n",
    "> 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다.\n",
    ">\n",
    "> 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, `collatz`를 완성해 주세요.\n",
    ">\n",
    "> 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.\n",
    "\n",
    "예시)\n",
    "\n",
    "```python\n",
    "collatz(6) #=> 8\n",
    "collatz(16) #=> 4\n",
    "collatz(27) #=> 111\n",
    "collatz(626331) #=> -1\n",
    "```"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 여기에 코드를 작성하세요."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 해당 코드를 통해 8, 4, 111, -1 이 나오는지 확인하세요.\n",
    "print(collatz(6))\n",
    "print(collatz(16))\n",
    "print(collatz(27))\n",
    "print(collatz(626331))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# 무엇이 중복일까\n",
    "\n",
    "> 다음 리스트에서 중복되는 요소만 뽑아서 새로운 리스트를 반환하는 `duplicated` 함수를 작성하세요 옮기시오. \n",
    "\n",
    "```python\n",
    "# 입력)\n",
    "duplicated(['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n', 'b'])\n",
    "\n",
    "# 출력)\n",
    "['b', 'n']\n",
    "```"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 여기에 코드를 작성하시오."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# 해당 코드를 통해 올바른 결과가 나오는지 확인하세요.\n",
    "duplicated(['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n', 'b'])"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.7"
  },
  "toc": {
   "base_numbering": 1,
   "nav_menu": {},
   "number_sections": true,
   "sideBar": true,
   "skip_h1_title": false,
   "title_cell": "Table of Contents",
   "title_sidebar": "Contents",
   "toc_cell": false,
   "toc_position": {},
   "toc_section_display": true,
   "toc_window_display": false
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-1-0a269e76b16d> in <module>
         34   {
         35    "cell_type": "code",
    ---> 36    "execution_count": null,
         37    "metadata": {},
         38    "outputs": [],
    

    NameError: name 'null' is not defined



```python

```


```python

```


```python

```
