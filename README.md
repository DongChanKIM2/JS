# JS
## 왜 JS를 해야하니?

브라우저를 동적으로 조작할 수 있는 언어

브라우저란? 웹서버에서 이동하며 클라이언트와 서버간 양방향 통신하고

HTML문서나 파일을 출력하는 GUI 기반의 소프트웨어(Chrome, FireFOX)

일반적으로 ES6 이후부터 사용하므로 이 repo는 ES6 이후 기준으로 작성되었습니다

크로스 브라우징을 위해 많은 라이브러리가 있었음(jquery..) 그러나 현재는 순수 자바스크립트인 Vanila Javascript를 기본으로 삼음 



## DOM(Document Object Model)

js는 브라우저를 조작하는 언어로 3가지 역할이 브라우저에 가능함

브라우저에 할 수 있는 일

1. DOM 조작: 문서를 조작 가능

```
DOM은 HTML, XML과 같은 문서를 다루기 위한 독립적인 문서 모델 인터페이스로
하나의 문서(웹페이지)는 여러 객체로 이루어져 있는 것을 DOM이라 함

주요 객체:
window(최상위객체이며 생략도 가능)
document(페이지 콘텐츠의 시작점 역학을 하며 body와 같은 많은 요소 포함)
navigator, location, history, screen 등등 존재

DOM 해석은 Parsing(파싱) 해석을 통해 브라우저가 문자열을 해석해 DOM tree로 만들어줌

조작방법:
1. 객체를 선택(select) (queryselector(), queryselectorAll())
2. 객체를 변경(manipulation)

상속구조(DOM은 상속받는 구조로 이루어짐):
EventTarget(최상위) -> Node -> Element, document -> HTMLelement
```

2. BOM 조작: 브라우저의 객체 조작 가능

```
BOM은 브라우저와 소통하기 위한 모델로 버튼, URL 입력창 등을 제어 가능함 
window 객체는 모든 브라우저로부터 지원받으며 BOM도 WINDOW객체에 포함됨
```


3. JS core: 프로그래밍 언어





## 객체

HTMLCollection & NodeList(배열은 아니지만 배열과 같이 인덱스로 접근가능)

- HTMLcollection : name, id, 인덱스 속성으로 항목에 접근 가능(for each같은 다양한 메서드로 접근 불가능)
- Nodelist: 인덱스 번호로만 접근 가능(for each같은 다양한 메서드로 접근 가능)

둘 다 Live Collection으로 DOM 변경사항을 실시간으로 반영하지만 queryselectorall에 의해 반환되는 NodeList는 static collection으로 불러오므로 live처럼 반영이 안됨





## js 와 Node.js의 관계

컴퓨터의 위치를 컴퓨터 내부와 그 안에 웹 내부로 나눌 수 있다.

js는 어디까지나 웹 내부로 밖에 역할이 한정적이어서 천대?를 받는 경향이 있었는데 이걸 해결할 수 있었던게 Node.js

Node.js가 나오며 단순히 프론트적인 부분외에 백엔드적인 서버 담당도 js가 담당할 수 있게 되었음



## JS

지금까지 파이썬(쟝고)에서 JS를 사용할 수 있었던 건 vscode, python 때문이 아니라 크롬에서 js로 웹페이지를 받기 때문이었음



## ECMAScript 6

식별자: 변수를 구분할 수 있는 변수명(문자, $, _로 시작)/ 클래스명 

외에는 모두 소문자

식별자 작성스타일:

카멜 케이스: camelCase(변수, 객체, 함수)

파스칼 케이스: PascalCase(클래스, 생성자)

대문자 스네이크 케이스(SNAKE_CASE): 상수에 사용

상수: 변경되지 않을 값

## 변수 종류


||LET|COUNT|VAR|
|:-:|:----:|:-:|:-:|
|재할당여부|O|X|O|
|재선언여부|X|X|O|
|스코프|블록|블록|함수|



