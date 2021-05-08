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



## 좋아요, 팔로우 JS로 구현하기

기존에는 우리가 쟝고에서 ManyToManyField로 Model에서 만들고

url, views에서 page는 없지만 동작으로 구현을 해놓은 상태임

여기서 JS로 바꾸려면?

AXIOS로 객체를 받고 좋아요, 팔로우한 사람있고 없고를 then, catch로 분기해서 만들면 되지 않을까?

model, url은 변경할 필요 없이 views에서 데이터를 JSON을 받아서 Template에서 JSON을 받아주면 비동기처리 가능!

form이 의미가 없어짐(새로운 페이지로 가는게 아니니까 이제)

순서

1. views에서 동작에 따라 json 전달
2. csrf token 빼주기
3. form 처리(class, 및 개별 pk 주기)
4. 몇명이 좋아하는지
5. axios에서 event처리 3번 4번과 엮어서 해주기





# 재정리

JS는 브라우저를 조작할 수 있는 유일한 언어이다.

브라우저란 웹 서버에서 이동하며 클라이언트와 서버와 양방향으로 통신하며

HTML문서나 파일을 출력해주는 GUI 기반의 '소프트웨어'이다.

즉! 크롬, IE, FireFox가 브라우저가 아니라 브라우저의 자식들이다

브라우저도 소프트웨어에 불과한것이야

자 그렇다면! 브라우저에서 할 수 있는 일이란 뭐가 있을까?

DOM / BOM / JS core(프로그래밍언어) 3r가지

DOM이란 HTML, XML같은 문서(Document)를 다루기 위한 인터페이스이다

즉 다시 말하자면 문서의 구성요소 하나하나를 객체로 취급해 다루는 논리적 트리 모델이다. 주요 객체로는 최상위 window, 페이지 콘텐츠의 진입로인 document 등이 있다. 

DOM이 왜 엄청난거나면 사실 HTML, CSS는 원래는 의미없는 문자열 덩어리에

불과할 뿐인 애들을 '파싱'을 시켜줘서 DOM Tree 구조로 만들어주기 때문이다

쉽게 생각해보면 VS code에 적어놓은 HTML 코드는 우리가 텍스트 문서에서

낙서하듯이 '말장난에 불과한 텍스트' 에 지나지 않는다

그런데!! 브라우저의 DOM을 통하면 이 말장난의 문자열들이 트리구조, 스타일링,

레이아웃, 객체화 등 멋진 녀석이 된다!!(충격 그 자체)

 BOM이란 DOM은 문서를 다루기 위한 녀석이었다면 BOM은 브라우저와

소통하기 위한 모델이다. 정확히는 브라우저의 버튼, URL 입력창, 타이틀바

이런 브라우저의 요소들과 소통하게 해줄 수 있는 녀석임



자 원래대로 돌아와서 Document는 문서 한장(html)이고 우리는 DOM을

통해서 이 문서를 조작할 수 있는거임

조작하는 순서는 간단해. 집고 바꿔(집는건 하다보니까 id랑 class로 하는게 좋네)

집는 명령어: getelementbyID, queryselector, queryselectorall 등이 있고

다중리턴해주면 HTMLcollection, NodeList 두 종류가 있고 인덱스번호로 접근 가능함. 둘 다 Live Collection이라 실시간 반영이지만 queryselectorall 에 의해 반환된 NodeList는 static collection이라 내용에는 영향을 안줌

바꿔 명령어: Document.createElement(), ParentNode.append(), Node.appendChild()

삭제 명령어: remove, removeChild()

속성: .innerText, .innerHtml / 속성은 메서드가 아니라 괄호가 필요없어

굳이 얘기하면 속성은 특징이고 메서드는 행동? 일단 이 정도로 이해하자

innerHtml은 innerText에 비해 꾸며주지만 보안에는 취약



Event란? 네트워크 활동 혹은 사용자와 상호작용 같은 사건의 발생을 알리기 위한

객체로 EventTrarget.addEventlister() 로 사용가능. 사실 우리가 컴퓨터를 만지고만 있어도 Event가 발생하는거야(클릭하거나 그런건 당연한거고 스크롤하거나 모든 행위가 정보로 수집될 수 도 있음///) 



addEventListener에서 재밌는 것 중 하나가 보통 앞에서 인자를 설정하고 나서

나중에 함수로 집어넣든 어떻게하든 하는데 JS에서는 인자를 바로 함수안에 넣어줄 수 있음



자 이제!! 선수 입장~~~

AJAX가 드디어 나왔따~~ AJAX란 비동기식 JS 와 XML의 줄임말

즉 뭐나면 서버와 통신하기 위해 XMLHttpRequest 객체를 활용하는 것

이전까진 addEventListner를 동기식으로 위에서 아래로 코드를 차례대로 실행하고 끝나면 이동했다면 이제는 비동기식으로 페이지의 일부분만을 업데이트 할 수 있게 된 것야. 주로 gmail, google maps에서 페이지 자체가 업로드되지 않지만 화면이 바뀌는 걸 보면 알 수 있당

비동기식은 빠르고 사용자 경험이 좋기 때문에 장점이 많지만!! 문제가 뭐나면 데이터를 아직 안받아왔는데 혼자 쭊쭊 끝까지 가서 빈 문자열(데이터)를 출력하게 될 수도 있어. 왜냐하면 자바스크립트는 파이썬과 다르게 비동기로도 통신이 가능하며 비동기 + Non-blocking이기 때문이야 

https://geonlee.tistory.com/138

자 여기서 Non-blocking이 함수가 다른애한테 일을 넘겨주고 자기는 다시 일에 집중하는 프로세스를 보면 마치 JS가 멀티스레드인거같지만 실제론 단일스레드언어야. 그러나 단일스레드 언어로는 비동기식으로 일처리를 여러개 못하기 때문에 받아주는 queue, 즉 동시성 모델이 필요해! 스레드가 일을 하다가 브라우저한테 일을 넘기고(wep api) 자기는 자기 일 할 수 있는거야

정리하면 JS는 브라우저가 되는 환경에서는 Single thread이지만 multi thread와 같이  비동기식으로 일을 할 수 있게 된거야

근데 비동기식으로 일하면 우리가 위에서 본 것처럼 순서가 보장이 안되니까 데이터를 아직 안받았는데 일을 하는 이상한 경우가 발생해

그래서 순서가 보장되는 비동기 처리를 해야하는 방법이 필요한데 첫 번째로 Async callbacks(비동기콜백방식)이 있고 두 번째론 promise가 있엉!!

콜백함수란 뭐나면 다른 함수에 인자로 넘어갔으면 무조건 콜백함수라고 부르는거야(콜백함수는 동기, 비동기 모두 사용가능한데 )

 첫 번째 방법인 비동기 콜백방식은 비동기작업이 완료된 후에 실행을 계속할때 사용되는 경우를 콜백함수를 사용하는 거야?? 

자 잠깐 돌아와서 JS의 함수는 뭐야? JS의 함수는 일급객체이다. 일급객체란 다른 객체들에 적용 가능한 연산을 모두 지원하는 객체이다

일급 객체의 조건은 인자로 넘길 수 있고 함수의 반환값으로 사용할 수 있고 변수에 할당 할 수 있어야한것. 즉 객체지만 변수로 생각할 수 도 있는 것

그러니까 JS의 함수는 일급객체이니까!! 콜백함수가 가능한거야

인자로 넘기는 것:

from django.urls import path

from . import views

urlpattenrs = [path('', views.index)]

path라는 함수안에 views.index가 인자로 들어가있음

함수의 반환값: 

numbers = [1, 2, 3]

def add_one(number):

​	return number + 1

print(map(add_one, numbers))

변수에 할당하는 것: const btn = document.queryselector('button')

정리하자면 콜백함수는 우리가 지금까지 파이썬과 쟝고에서 써왔돼 쟈바스크립트에서 비동기식 콜백함수를 사용하는게 처음인거다

콜백함수를 사용하는 이유는 명시적인 호출이 아니라 어떠한 행동에 의해서 실행되는 함수임. 비동기식일때는 순차적으로 실행할때 콜백함수가 필요한 이유가 행동에 의해서 실행되는 함수이기 때문에!

array helper method, setTimeOUT 함수의 인자로 들어가기 때문에 그 자체가 콜백함수이었음

그러나 콜백은 하다보면 Callback hell에 빠지기 때문에 두 번째 방법인 promise

도입

Promise는 비동기 작업의 성공 또는 실패를 나타내는 객체로 성공은 then 실패는 catch

이런 유용한 Promise를 편하게 사용할 수 있게 브라우저를 위한 Promise 기반의 클라이언트인 Axios가 개발됨(AJAX(객체) -> Axios(Promise))

Bootstrap CDN처럼 스크립트위에 붙여넣어주면 사용가능함



자 이제 유교수님 강의를 보충해보자

JS는 브라우저 언어라 천대받았는데 브라우저 밖으로 가지고 오니 서버개발도 가능해지면서 컴퓨터 리소스 접근에 대해 접근도 가능해지는 당당한 프로그래밍 언어가 됬음. 그 중 node.js는 플랫폼으로 불리며 python3.8을 깔듯이 인터프리터를 까는 거처럼 됨



호이스팅 되는 거: var, 함수선언식

호이스팅은 전체코드가 실행될때 대충 딕셔너리형태에 변수, 함수 등등 때려넣고 시작하기 때문에 원래는 호이스팅 되는게 언어 만드는 사람들한테 편햇음

그러나 많이 꼬이기 때문에 const, let은 호이스팅이 안되게 지원됬는데 사실 밑에 선언이 되는거에 도달하기전에는 못 사용한다니까 좀 다른 의미임 어떻게보면

https://www.youtube.com/watch?v=AlcRl4pJd0c



fuction filter(callback, arr) {

​	const newArr= []

​	for (const elem of arr) {

// True or False 리턴하는 콜백함수

​		if (callback() ) {

​		newArr.push(elem)

​		}

​	}

​	return newArr

}





[1,2,3,4,5].filter(num => num % 2)





참조: https://wayhome25.github.io/django/2017/06/25/django-ajax-like-button/





## 참조 page

120개 기능: https://htmldom.dev/

reduce: https://www.youtube.com/watch?v=RW25tEAMC9w