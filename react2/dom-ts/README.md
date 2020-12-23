* 프로퍼티와 메서드
* currentTarget : 이벤트를 캡쳐한 요소의 DOMEventTarget
* target : DOMEventTarget
* nativeEvent : DOMEvent
* preventDefault() : 링크나 폼 전송 버튼처럼 기본 동작 방지
* isDefaultPrevented() : 기본 동작이 방지되었을 때 실행하면 true 반환
* stopPropagation() : 이벤트 전파 중단
* isPropagationStopped() : 이벤트 전파가 중단되었을 때 실행하면 true 반환
* 