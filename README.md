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

ECMA는 쉽게 얘기하면 표준서이다. 

Vanila JS는 순수한 JS, 프레임워크, 라이브러리 등을 사용하지 않는 JS임

ECMA가 더 넓은 의미라고 볼 수 있겠다



## 변수 종류


||LET|COUNT|VAR|
|:-:|:----:|:-:|:-:|
|재할당여부|O|X|O|
|재선언여부|X|X|O|
|스코프|블록|블록|함수|

## 잡담

JS와 Python은 모두 객체 지향 프로그래밍

객체 지향프로그래밍이란? 객체를 메세지로 대화하는 언어(알면 알수록 어렵다)

JS의 함수는 Python의 class이고 JS의 생성자는 Python의 인스턴스

labmda와 같은 임시 함수는 용량을 안 잡아먹으니까 용이함

reduce: 파이선과 js 에서 사실상 동일한 역할



## AJAX(Async js and XML) 비동기식 JS and XML

서버와 소통방법: XMLHttpRequest 객체

페이지 전체 Reload하는게 아닌 비동기성(일부분만 업데이트)

XML대신 요새는 더 가벼운 JSON을 거의 다 사용

google 사용예시: 

1. 메일전송했을때 전송은 하되 페이지 리로드는 x

2. 구글맵 스크롤(확대, 축소) 할때 요청작업이지만 페이지는 갱신x



### XMLHttpRequest object

서버와 상호작용하며 새로고침없이 URL로 데이터를 받아옴

XML이외에 JSON등 여러 종류의 데이터를 받아오는데 사용 가능



### 동기(Sync) vs 비동기(Async)

동기: 

순차적, 직렬적 태스크 수행

요청을 보낸 후 다음 응답을 받아야만 다음 동작 수행(Blocking)

비동기: 

병렬적 태스크 수행

요청을 보내고 응답을 기다리지 않고 다음 동작수행(Non-blocking)



### 비동기의 장점

1. 사용자 경험(빨리빨리 요청을 볼 수 있음-로딩이 짧음)

그러므로 대부분의 wep api는 비동기 코드로 실행



### JS에서 동기 비동기

js는 single thread(파이썬도 single thread, 대부분이 single thread)

동기: alert 버튼을 누르기전까지 다음 문장이 출력안됨

비동기: 데이터를 요청해도 출력이 안됨 why? 요청을 보내고 응답이 올 때까지

기다리고 출력해야되는데 아직 응답안왔는데 출력됨

python에서는 잘 진행되는데 js는 안됨(python: blocking, js: Non blocking)

대부분의 언어는 blocking이라 이전 코드가 종료되기 전까지 다음줄은 실행되지 않음



컴퓨터가 얼마나 빨리 : CPU

컴퓨터가 얼마나 많이 : 메모리



### Thread

프로그램이 작업을 완료하는데 사용할 수 있는 단일 프로세스

하나의 thread는 한번에 하나의 작업만 가능합니다

js는 thread가 한개라 한번에 하나씩만 가능(앞의 작업을 완료해야 다음 작업 가능)

컴퓨터가 여러 cpu가 있어도 main thread라 불리는 단일 thread에서만 작업 수행

JS는 single thread이다: 이벤트를 처리하는 call stack이 하나라는 뜻/ 그러나 web API라는 친구가 있어서 같이 작업 수행 가능



즉시 처리하지 못하는 이벤트들은 다른 곳(Web API)로 보내고

처리된 이벤트들은 대기실(Task queue)에 줄을 세우고

call stack이 비면 담당자(EVENT loop)가 대기줄에서 가장 오래된 이벤트를 call stack에 보냄



### Concurrency Model(동시성 모델)

Single thread를 보완하기 위해 Event Loop를 기반으로 하는 동시성 모델 채택

구성요소

1. call stack(요청을 순차적으로 해결하는 stack(LIFO) 구조)
2. Web API(JS가 아닌 브라우저에 제공하는 API) 바로 처리할 수 없으면 Web API로 넘기자

Ex) setTimeout(), DOM events, AJAX로 데이터 가져오는데 시간 소요되는 거

우리 기준 3초가 아니라 Web API에서 3초 후에 Task queue로 들어가는 것(python sleep과 약간 다름)

순서: call stack -> web api -> task queue -> call stack(비었으면)

zero delays: 0ms 후에 콜백이 시작된다는건 아님. 최소시간일뿐

3. Task Queue

콜백함수가 대기하는 Queue(FIFO) 형태의 자료 구조

main thread가 끝난 후 실행되어 JS 코드가 막히지 않게 해줌

4. Event Loop

Call Stack이 비어있는지 확인

비어있으면 Task Queue에서 실행 대기중인 콜백이 있는지 확인하고 있으면 call stack으로 push



브라우저/web/server 각각 영역이 다른데 js는 브라우저에 한명만 배정을 해준거임(브라우저에서만 해킹을 당한다? 불가능)



### 순차적으로 비동기 하기 위해선?

web API로 들어오는 순서보다 어떤 이벤트가 우선이냐

1. Async callbacks

클릭하면 콜백

2. promise-style





## Asyunchronou js



### 코어 & 스레드

코어란 길목(구역이고) 스레드는 한구역에 몇 사람이 있는지라고 생각할 수 있음

힘은 터보부스트

cpu 스레드 알통몬(포켓몬)

hw적 스레드랑 sw적 스레드는 의미가 달라서 hw 4스레드라서 sw가 4스레드가 가능한건 아님



파이썬은 내 컴퓨터에서 작업하니까 내가 환경을 알아서 멀티스레드로 설정할 수 있지만 JS와 같은 경우 딴 사람도 하니까 멀티스레드로 작업해도 한 스레드만 과도하게 일하게 될 수 있음



JS 는 언제끝날지 모르는 일들에 대해 콜백함수를 사용함(클릭을 언제할지, 몇초를 기달리지 모르잖아)



### Callback function

다른 함수에 인자로 전달된 함수

외부함수내에서 호출되어 일종의 루틴 완료

동기식, 비동기식 모두 사용되는데 비동기 작업이 완료된후 코드실행을 계속하는게 비동기 콜백이라고 함



즉 함수가 다른 함수의 인자가 될 수 있다는 건 JS의 함수가 일급객체임(파이썬, DJANGO도 가능, map(int, ), path(views.index) 비동기가 아니여도 사용해왔다

일급 객체의 조건

1. 인자로 넘길 수 있어야하고
2. 함수의 반환값으로 사용 가능
3. 변수에 할당가능



async callback: 백그라운에서 실행을 대기하다가 함수를 호출할 때 인자로 지정된 함수이거나 백그라운드 작업 끝나고 실행



callback 함수 사용이유: 명시적인 호출(sum 함수)과 같은게 아닌 쟝고에서 request나 event 같이 특정시점에서 알아서 호출하고 기다리지 않고 '언젠가' 처리해야 하는 일에 사용

but: 콜백함수가 다른 콜백함수를 호출하고 그 함수가 또다른 콜백을 호출하는 상황을 callback hell이라고  부르는 상황이 발생됨 ㅡㅡ 디버깅 불가능, 코드가독성 최악



callback hell 해결법

1. keep your code shallow
2. Modularize
3. Handle every single error
4. **Promise way**



### Promise object

비동기 작업의 최종 완료 또는 실패를 나타내는 객체(완료또는 실패와 결과값)

미래의 어떤 상황에 대한 약속??



성공약속 .then() -> 앞의 비동기작업이 성공했을 때 수행하는 콜백함수(성공결과가 들어감)

실패약속 .catch() -> then이 하나라도 실패하면 동작(실패로 인해 생성된 error가 들어감)



promise 상태

1. 대기(pending)
2. 이행(fulfiled)
3. 거부(rejected)



순서대로 실행되는 promise의 최대장점



### AXIOS

브라우저를 위한 Promise기반의 클라이언트

XHR 브라우저 내장객체에서 더 편리하게 사용('요청'에 특화됨)

Promise 객체를 return하는게 최대장점



### async & await

then chaning 반복에서 빠져나가기 위해서 최근에 개발

ES8에서 등장됬고 기존의 Promise는 유지는 하되 then chaning 제거

조금 더 사람이 읽기 쉽게 변경됨



### 쟝고

쟝고에서 request, parsing한 작업을 js에서 해주기 때문에 더 간편해짐





## 참조 page

120개 기능: https://htmldom.dev/

reduce: https://www.youtube.com/watch?v=RW25tEAMC9w