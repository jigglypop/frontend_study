class SList:
    class Node:
        def __init__(self, item, link):  # 노드 생성자
            self.item = item  # 항목
            self.next = link  # 다음 노드 레퍼런스
    def __init__(self):  # 단순 연결 리스트 생성자
        self.head = None
        self.size = 0  # 항목 수
    def size(self):
        return self.size
    def is_empty(self):
        return self.size == 0
    def insert_front(self, item):  # 연결 리스트의 맨 앞에 새 노드 삽입
        if self.is_empty():  # 연결 리스트가 empty인 경우
            self.head = self.Node(item, None)  # head가 새 노드 참조
        else: # empty가 아닌 경우
            self.head = self.Node(item, self.head)  # head가 새 노드 참조
        self.size += 1
    def insert_after(self, item, p):  # p가 가리키는 노드 다음에 새 노드 삽입
        p.next = SList.Node(item, p.next)  # 새 노드가 p 다음 노드가 됨
        self.size += 1
    def delete_front(self):  # p가 가리키는 노드의 앞 노드 삭제
        if self.is_empty():  # empty인 경우 에러 처리
            raise EmptyError('Underflow')
        else:
            self.head = self.head.next  # head가 둘째 노드를 참조
            self.size -= 1
    def delete_after(self, p):  # p가 가리키는 노드의 뒷 노드 삭제
        if self.is_empty():  # empty인 경우 에러 처리
            raise EmptyError('Underflow')
        t = p.next
        p.next = t.next  # p 다음 노드를 건너뛰어 연결
        self.size -= 1
    def search(self, target):  # 노드 탐색
        p = self.head
        for k in range(self.size):
            if target == p.item: 
                return k  # 탐색 성공
            p = p.next
        return None  # 탐색 실패
    def print_list(self):
        p = self.head
        while p:
            if p.next != None:
                print(p.item, ' -> ', end='')
            else:
                print(p.item)
            p = p.next  # 노드들을 순차탐색
class EmptyError(Exception):  # 에러 처리
    pass
