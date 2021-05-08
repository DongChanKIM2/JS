# Javascript

> 브라우저를 조작하는 언어

![image-20210428091201938](Javascript.assets/image-20210428091201938.png)

![image-20210428091226868](Javascript.assets/image-20210428091226868.png)

![image-20210428091519612](Javascript.assets/image-20210428091519612.png)

![image-20210428091615844](Javascript.assets/image-20210428091615844.png)

![image-20210428091733778](Javascript.assets/image-20210428091733778.png)

![image-20210428092733855](Javascript.assets/image-20210428092733855.png)

![image-20210428092750283](Javascript.assets/image-20210428092750283.png)

![image-20210428092901721](Javascript.assets/image-20210428092901721.png)

![image-20210428092928475](Javascript.assets/image-20210428092928475.png)

![image-20210428093056109](Javascript.assets/image-20210428093056109.png)

![image-20210428093310519](Javascript.assets/image-20210428093310519.png)

---

### DOM

![image-20210428093509955](Javascript.assets/image-20210428093509955.png)

![image-20210428093540915](Javascript.assets/image-20210428093540915.png)

자바스크립트는 브라우저 조작이라는걸 단적으로 보여줌.

![image-20210428093714738](Javascript.assets/image-20210428093714738.png)

![image-20210428093739560](Javascript.assets/image-20210428093739560.png)

![image-20210428093755036](Javascript.assets/image-20210428093755036.png)

![image-20210428093851292](Javascript.assets/image-20210428093851292.png)

최상위 객체는 표현시 생략 가능

![image-20210428094603152](Javascript.assets/image-20210428094603152.png)

사실 기본적으로 document 이게 가장 중요하지 않을까..

![image-20210428094645665](Javascript.assets/image-20210428094645665.png)

![image-20210428094728223](Javascript.assets/image-20210428094728223.png)

1번 그림을 긴 종이를 받아(스트링 덩어리) 툭툭 잘라서 트리형태로 만들고, 2 태그들 주고..
3번 레이아웃까지 해줌.

![image-20210428094847068](Javascript.assets/image-20210428094847068.png)

얜 문서가 아님. 브라우저의 버튼, url 입력창, 타이틀바 이런거.

![image-20210428094920894](Javascript.assets/image-20210428094920894.png)

---

> Select & Manipulation

![image-20210428095010726](Javascript.assets/image-20210428095010726.png)

객체 상속 구조는 참고만

![image-20210428095037812](Javascript.assets/image-20210428095037812.png)

![image-20210428095150641](Javascript.assets/image-20210428095150641.png)

querySelector(여기 css 선택자 문법이 들어감 'div>li') 이런거. 다만 `첫번째` 객체 반환 주의

querySelectorAll('이거도 문자열로 받음')

NodeList 반환?? => 다중객체 주는거라서 (쿼리셋 같은거라 생각하자)

![image-20210428095653273](Javascript.assets/image-20210428095653273.png)

![image-20210428100045714](Javascript.assets/image-20210428100045714.png)

HTMLCollection => 다중리턴인데? 타입이 좀 다름 앤 htmlcollection 타입
아래는 노드리스트 타입 => `인덱스 번호로만! 접근`

![image-20210428100229517](Javascript.assets/image-20210428100229517.png)

![image-20210428100520323](Javascript.assets/image-20210428100520323.png)

예를들면 이런 애가 있다고 할때,

![image-20210428100655925](Javascript.assets/image-20210428100655925.png)

![image-20210428100731480](Javascript.assets/image-20210428100731480.png)

첫번째로 만나는 h1 선택 이런식으로. 태그로 선택하고 id로 선택하고 이런게 있는데, 태그선택은 별로 권장하지 않음. 만나는 태그중 첫번째를 가져온다 이런거라서.

![image-20210428100915493](Javascript.assets/image-20210428100915493.png)

유사배열이라 대괄호 감싸져있는거 보임

.ssafy ~ 이렇게 클래스로 선택해도 같은 결과 나옴. 

![image-20210428100956623](Javascript.assets/image-20210428100956623.png)

---

> 변경 관련

![image-20210428101116127](Javascript.assets/image-20210428101116127.png)

create 이런거 실제로 h1 넣으면 만드는거!

그러니까 ParentNode.append() 이건 자식 노드들 여러개 어펜드 할 수 있음. 게다가 파이썬 어펜드마냥 마지막 애로 추가됨. 그리고 `스트링`임

반면, 얘는 하나 노드만 가능. 근데 노드 객체만 넣을 수 있지 `스트링으로 못넣음` + appendchild 는 반환값 있음. 부모.appendChild(자식 1개)

![image-20210428101247234](Javascript.assets/image-20210428101247234.png)

> 삭제 방법도 두개임

![image-20210428101400121](Javascript.assets/image-20210428101400121.png)

Node (이게 부모노드일거고..?) removeChild( 자식노드 들어감 )

예제로 보면, removeChild 자체는 일단 부모 노드가 필요함

![image-20210428101521069](Javascript.assets/image-20210428101521069.png)

이제 속성값을 보자 (메서드 말고) == `속성값이니까 없음 괄호가`

![image-20210428101913015](Javascript.assets/image-20210428101913015.png)

h1태그안에  hellow 같은게 있으면 이거 이야기하는거임 innerText

잘 보면 같은걸 추가했는데?

![image-20210428102123853](Javascript.assets/image-20210428102123853.png)

![image-20210428102155723](Javascript.assets/image-20210428102155723.png)

innerText 는 리얼 그 죄다 텍스트 처리해서 들어감

![image-20210428102225092](Javascript.assets/image-20210428102225092.png)

InnerHtml이 이런 공격에 취약하다 정도 알고있자.

---

빈 li 태그 하나 만들고?. 이렇게 하면 html 코드를 쓰는게 아니라 DOM 조작을 통해 태그들을 만들어낸것!!

![image-20210428102348521](Javascript.assets/image-20210428102348521.png)

![image-20210428102355878](Javascript.assets/image-20210428102355878.png)

뭘한거냐면 여기 춘천 넣고 삭제하는 과정을 한거!!

![image-20210428102421890](Javascript.assets/image-20210428102421890.png)

---

> 변경 관련

이거 타이틀이 잘못됨. () 니까 번경 관련 메서드!! 여야함

![image-20210428102715710](Javascript.assets/image-20210428102715710.png)

아래는 속성 조회.

저 textContent 오타.

![image-20210428102847124](Javascript.assets/image-20210428102847124.png)

![image-20210428102931068](Javascript.assets/image-20210428102931068.png)

아까 이거여서?

![image-20210428102947741](Javascript.assets/image-20210428102947741.png)

---

`실습`

콘솔로그 하나씩 주석처리 해제하면서 해보자.

![image-20210428103332808](Javascript.assets/image-20210428103332808.png)

querySelectorAll 의 반환값은 노드리스트다. 근데 원래 노드리스트는 라이브 컬렉션의 일종이지만, 얘의 반환값인 노드리스트는 스태틱 컬렉션이다.

![image-20210428105204231](Javascript.assets/image-20210428105204231.png)

반환 하고 왼쪽 값이 바뀌더라도 오른쪽에 영향을 주지 않음.

![image-20210428105142255](Javascript.assets/image-20210428105142255.png)

실제로 뭐가 없으면? 직계자식에선 li 없으면? 널 리턴됨.

![image-20210428105413068](Javascript.assets/image-20210428105413068.png)

![image-20210428105425820](Javascript.assets/image-20210428105425820.png)

애는 유사배열로 나옴. 참고로만

![image-20210428105449266](Javascript.assets/image-20210428105449266.png)

---

조작!

![image-20210428105529748](Javascript.assets/image-20210428105529748.png)

![image-20210428105546382](Javascript.assets/image-20210428105546382.png)

이러면 뭐 어디 위치하지도 않고 안에 텍스트 있는 상태도 아니고?

한번 차이를 보게 집어넣어보면?

![image-20210428105617635](Javascript.assets/image-20210428105617635.png)

![image-20210428105629114](Javascript.assets/image-20210428105629114.png)

이런 차이.

---

추가도 조작인데? 그러려면 선택부터 해야함

append는 바디 마지막 자식에 됨.

![image-20210428105705409](Javascript.assets/image-20210428105705409.png)

![image-20210428105754715](Javascript.assets/image-20210428105754715.png)

![image-20210428105725690](Javascript.assets/image-20210428105725690.png)

![image-20210428105728885](Javascript.assets/image-20210428105728885.png)

근데 append child는 좀 다름. 1개밖에 안됨 여러개 집어넣어도

![image-20210428105808994](Javascript.assets/image-20210428105808994.png)

그냥 append 써야 여러개 들어감.

![image-20210428105829886](Javascript.assets/image-20210428105829886.png)

뭐 스타일링도 가능

![image-20210428105929955](Javascript.assets/image-20210428105929955.png)

![image-20210428105937358](Javascript.assets/image-20210428105937358.png)

![image-20210428105943666](Javascript.assets/image-20210428105943666.png)

set attribute는 id가 king인 애를 추가 뭐 이런거.

![image-20210428110107653](Javascript.assets/image-20210428110107653.png)

![image-20210428110101854](Javascript.assets/image-20210428110101854.png)

---

실습 2

이래 하거나?

![image-20210428110423822](Javascript.assets/image-20210428110423822.png)

![image-20210428110501334](Javascript.assets/image-20210428110501334.png)

중앙 정렬 = 반복문으로도 할 수 있지만?

![image-20210428110712644](Javascript.assets/image-20210428110712644.png)

![image-20210428110718968](Javascript.assets/image-20210428110718968.png)

이런거 하면서 로그찍어서 보자

![image-20210428110938142](Javascript.assets/image-20210428110938142.png)

![image-20210428110932531](Javascript.assets/image-20210428110932531.png)

저 mainQDL 저게 노드리스트인데, 저거 하나하나가 저기 div안에 뽑혀 들어간다 생각하면 됨.

![image-20210428111058207](Javascript.assets/image-20210428111058207.png)

![image-20210428111131263](Javascript.assets/image-20210428111131263.png)

뭐 이런식으로. 셀렉션도 잘해야함

![image-20210428111523373](Javascript.assets/image-20210428111523373.png)

![image-20210428111543758](Javascript.assets/image-20210428111543758.png)

이런식으로 기존 밸류가 있을때 업데이트도 가능

이미지 크기조정도 가능 => `.width 식으로도 추가 가능`

![image-20210428111804134](Javascript.assets/image-20210428111804134.png)

![image-20210428111813657](Javascript.assets/image-20210428111813657.png)

> 마지막으로 푸터가 있는데?

DOM 생성  + 조작까지 해야함 얜 스켈레톤 코드에 없어서

![image-20210428112107772](Javascript.assets/image-20210428112107772.png)

![image-20210428112104280](Javascript.assets/image-20210428112104280.png)

section 태그 이후로 추가해야하는데? 제일 먼저 해야할건 일단 부모부터 선택해 와야함

추가할거면 어디 추가할지를 정해줘야 하는거니까. 

![image-20210428112536396](Javascript.assets/image-20210428112536396.png)

![image-20210428112543785](Javascript.assets/image-20210428112543785.png)

좀더 세부 조정 가능. 마진도 줄 수 있고

![image-20210428112757362](Javascript.assets/image-20210428112757362.png)

![image-20210428112814902](Javascript.assets/image-20210428112814902.png)

---

#### EVENT

![image-20210428141704397](Javascript.assets/image-20210428141704397.png)

가령 뭐 마우스를 클릭했다, 키보드 눌렀다? 이런걸수도있고 프로그래밍 적으로 어떤 특정 메서드 호출을 하든가 하는것들이 이벤트. 

이벤트는 특정 사건의 발생을 `알리기 위한` 객체.

![image-20210428142533797](Javascript.assets/image-20210428142533797.png)

최상위 이벤트 객체로부터 쭉쭉 뻗어나가는 느낌. 

![image-20210428142629581](Javascript.assets/image-20210428142629581.png)

이런 행동들은? 브라우저가 이에 맞춰서 동작을 해줌. 이런 하나하나의 이벤트들을 누가 캐치하고 있다는 뜻이니까?

![image-20210428142818383](Javascript.assets/image-20210428142818383.png)

앞에 `클릭` 이런게 이벤트고? 

![image-20210428142839384](Javascript.assets/image-20210428142839384.png)

![image-20210428142850760](Javascript.assets/image-20210428142850760.png)

이벤트 핸들러가 뭐냐면? 이벤트 발생하면 할일 등록하는것!!

![image-20210428142900281](Javascript.assets/image-20210428142900281.png)

`함수` 가 인자로 들어감에 주의. 첫번째는 타입인데 어떤 이벤트인지? 유형을 넣고 리스너는 앞의 이벤트가 존재할때 동작할 함수! 가 들어가는것. 뭐 type = "click" 이런식으로.

이게 신기한게, 앞에서 생성된 이벤트가? listener의 (이 뒤의 함수의) 인자로 들어감.

![image-20210428143849390](Javascript.assets/image-20210428143849390.png)

그래서 eventlistner는?

![image-20210428143900008](Javascript.assets/image-20210428143900008.png)

![image-20210428143905967](Javascript.assets/image-20210428143905967.png)

저 listner 가 기본적으로 event를 인자로 넘겨받음

event target (타겟에서 특정 이벤트가(type이) 발생하면?) listener 함수 실행하겠다!

버튼을(event target) 클릭(이벤트)하면 페이지를 새로고침(listener) 하겠다!

![image-20210428144431752](Javascript.assets/image-20210428144431752.png)

버튼 하나잡고, 버튼에 이벤트 처리기 붙임. 버튼 클릭시 이 함수 실행!

![image-20210428144748165](Javascript.assets/image-20210428144748165.png)

`실습`

`1` onclick은 이벤트 리스너 없이 이벤트를 등록하는 과정. 아래 함수 하나 만들어두고 온클릭 오른쪽에 붙여버리기.

![image-20210428145640728](Javascript.assets/image-20210428145640728.png)

`2` 아래 alertMessage() 하면 안됨 이거 즉시 호출이라..

얘네는 위에 뭐 할건 없고 script 태그에만 적으면 됨.

![image-20210428145923282](Javascript.assets/image-20210428145923282.png)

![image-20210428145859239](Javascript.assets/image-20210428145859239.png)

`3` 폼태그 작성하는대로 p 태그에 inner 텍스트 넣을거임!

입력하는것 자체가 사건이니까? (하나하나 데이터 들어가는게) 이 사건이 발생하는 순간 p태그 안에 문자 찔러넣을건데, 그러면 입력하는 사건 자체를 캐치해서 잡아줘야함

브라우저 단에서 생각해보면 인풋 태그 안에 사람들이 뭔가 쓸거니까? 인풋 태그부터 잡아와야함.

![image-20210428150209311](Javascript.assets/image-20210428150209311.png)

![image-20210428150242644](Javascript.assets/image-20210428150242644.png)

여기 뭐 넣을때마다 input 이벤트가 발생!

![image-20210428150406466](Javascript.assets/image-20210428150406466.png)

인풋 이벤트 아래 타겟! 이 있고 (이벤트 객체 안에 타겟 안에 value!) 접근해보면 됨.

![image-20210428150419417](Javascript.assets/image-20210428150419417.png)

event.target.value 에 있는거.

작성 즉시 위 p태그가 막 들어가짐.

![image-20210428150457838](Javascript.assets/image-20210428150457838.png)

event.data 는 해보면 누적이 안됨....

![image-20210428150603683](Javascript.assets/image-20210428150603683.png)

![image-20210428150608047](Javascript.assets/image-20210428150608047.png)

`4` 색상 이름이 완성되면 색상을 바꾸도록 함.

![image-20210428150930263](Javascript.assets/image-20210428150930263.png)

![image-20210428150951531](Javascript.assets/image-20210428150951531.png)

![image-20210428151031196](Javascript.assets/image-20210428151031196.png)

리팩토링도 가능.

---

이런 기능도 있음. 이벤트 자체는 남기지만 기본동작은 중지

![image-20210428151250552](Javascript.assets/image-20210428151250552.png)

그럼 이런거 대체 언제 필요하냐? 
체크박스라 함은, 클릭하면 뭐 안에 체크 생기고 선택이 되는 애인데..?

이벤트를 막진 않지만, 기본동작(박스에 체크표시 생김)은 막음.

![image-20210428151452116](Javascript.assets/image-20210428151452116.png)

![image-20210428151455315](Javascript.assets/image-20210428151455315.png)

실제로 콘솔로그에 이벤트는 찍힘.

또, 이런경우도 있음.

form 을 제출하게 되면 특정 주소(액션)으로 보내는게 기본 원리인데? 기본 이동을 막아보겠다!

''제출되었을때'' 니까 submit임 이벤트는
 여기서 event는 인자로 안적을거면 아래서도 적지 말아야하고, 꼭 있어야 하는건 아님.

![image-20210428151654923](Javascript.assets/image-20210428151654923.png)

실제로 이경우 가만히 두면 이동을 해버리는데?

![image-20210428151719155](Javascript.assets/image-20210428151719155.png)

이러면 제출을 눌러도 페이지 전환이 안됨. 

![image-20210428151738799](Javascript.assets/image-20210428151738799.png)

근데 제출했으면 내용은 리셋 해야하니까? 이런거 적어주면됨. 근데 이게 event.target은 원래 귀 달렸던 걔한테 돌아가는건 맞는데,
그러면 form 인데 그걸 바로 연결해서 reset() 이 될까 싶긴 한데 어쨌든 클리어가 되나봄..

![image-20210428151802931](Javascript.assets/image-20210428151802931.png)

제출 하고도 페이지 전환 없게 유지하고 싶은거!! (적은거 날리면서)

일단 뭐 취소가 필요한 순간이 있으니까 기본동작 하나씩 취소해 보는 연습을 하는거

![image-20210428151942061](Javascript.assets/image-20210428151942061.png)

a 태그의 경우 클릭한 이벤트는 생기지만 링크 이동은 안되는것!

![image-20210428151946237](Javascript.assets/image-20210428151946237.png)

근데 prevent 이런게 뭐 스크롤같은거 (스크롤도 이벤트인데?) 취소 시키진 못함. 전부 취소시킬수있는게 아님.

살짝 스크롤한거같은데 졸라많이 생김 오른쪽 로그찍히는거보면

![image-20210428152037839](Javascript.assets/image-20210428152037839.png)

이거 해도 못막음 스크롤 걍 됨.

![image-20210428152050745](Javascript.assets/image-20210428152050745.png)

실제로 cancelable 하냐고 물어보면? 안된다고 함.

![image-20210428152112960](Javascript.assets/image-20210428152112960.png)

---

#### live / nonlive collection

![image-20210428152328121](Javascript.assets/image-20210428152328121.png)

![image-20210428152332348](Javascript.assets/image-20210428152332348.png)

이경우 로그 한번 찍어보면 htmlcollection 등장함. 노드리스트가 아니고 라이브 컬렉션임

의외로 포문돌면서 돌리면 전부 빨개져야 할거같은데 안됨?

![image-20210428152509133](Javascript.assets/image-20210428152509133.png)

라이브노드는 실시간으로 반영되는 건데..?

첫번째 빨강으로 만들고 두번째 포문을 돌때?  로그 찍어보면 컬렉션이 2개로 줄어버리고,

![image-20210428152712867](Javascript.assets/image-20210428152712867.png)

두번째 포문 돌때는 i = 1 이니까 두개짜리중 뒤에거를 빨갛게 만들게 돼서 그럼. 

![image-20210504083935060](Javascript.assets/image-20210504083935060.png)

---

그런데 스태틱 컬렉션은? querySelectorAll 은 노드리스트를 뱉고, 노드리스트는 원래는 라이브 컬렉션인데, 얘가 뱉는 노드리스트만 스태틱 컬렉션이라고 했으니까?

![image-20210428152955143](Javascript.assets/image-20210428152955143.png)

---

### ECMAScript 6

![image-20210428153312874](Javascript.assets/image-20210428153312874.png)

![image-20210428153439937](Javascript.assets/image-20210428153439937.png)

![image-20210428153512748](Javascript.assets/image-20210428153512748.png)

![image-20210428153533022](Javascript.assets/image-20210428153533022.png)

![image-20210428153635115](Javascript.assets/image-20210428153635115.png)

![image-20210428153700303](Javascript.assets/image-20210428153700303.png)

#### 식별자

![image-20210428153943029](Javascript.assets/image-20210428153943029.png)

![image-20210428154007425](Javascript.assets/image-20210428154007425.png)

![image-20210428154057171](Javascript.assets/image-20210428154057171.png)

![image-20210428154114861](Javascript.assets/image-20210428154114861.png)

![image-20210428154121285](Javascript.assets/image-20210428154121285.png)

![image-20210428154137292](Javascript.assets/image-20210428154137292.png)

![image-20210428154229534](Javascript.assets/image-20210428154229534.png)

![image-20210428154300856](Javascript.assets/image-20210428154300856.png)

![image-20210428154713768](Javascript.assets/image-20210428154713768.png)

![image-20210428154741579](Javascript.assets/image-20210428154741579.png)

뭐야 이거 재할당 아냐? 라고 하면 그렇지 않음. 그냥 독립환경 같은거임. {} 밖이랑 안이랑 아예 상관이 없음.

`콘솔실습`

![image-20210428155334336](Javascript.assets/image-20210428155334336.png)

중괄호 안은 그냥 독립환경이라는 반증.

![image-20210428155425251](Javascript.assets/image-20210428155425251.png)

선언된적도 없는애 넣으면 이렇게 됨.

![image-20210428155457635](Javascript.assets/image-20210428155457635.png)

---

`변수 선언 또있음` = 근데 이거 안쓰는거 좋음

![image-20210428155542909](Javascript.assets/image-20210428155542909.png)

안쓸거면 뭐하러 살려놨냐? 웹상에 예전에 이걸로 선언해뒀던 그런거 있어서 삭제는 안함.

어쨌든 수업에선 var 안쓸거임 이제.

블록스코프는 중괄호로 나눴는데? 함수 스코프는 함수가 약간 독립환경 기준이 됨.

![image-20210428155701142](Javascript.assets/image-20210428155701142.png)

![image-20210428155713522](Javascript.assets/image-20210428155713522.png)

![image-20210428155730071](Javascript.assets/image-20210428155730071.png)

var 아래서 선언했는데? 애초에 동작이 안돼야 하는데...?????? 변수 선언을 끌어올린다는 느낌으로 hoisting 근데 그것도 undefined 로 제대로 되지도 않음.

마치 그냥 선언만 끌어올려진거라서 이게 뭐하는 짓인가 싶음.

![image-20210428155821423](Javascript.assets/image-20210428155821423.png)

let const 는 걍 깔끔하게 에러남

그러니까 var는 대충

![image-20210428155957442](Javascript.assets/image-20210428155957442.png)

![image-20210428160010246](Javascript.assets/image-20210428160010246.png)

var니까 중괄호로 막을 수 없음. (담아서 독립환경안에 가둘 수 없음)

![image-20210428160047794](Javascript.assets/image-20210428160047794.png)

const let 은 중괄호 밖으로 못나가니까?

![image-20210428160121363](Javascript.assets/image-20210428160121363.png)

![image-20210428160240224](Javascript.assets/image-20210428160240224.png)

===> F / F / T

![image-20210428160314818](Javascript.assets/image-20210428160314818.png)

---

## AJAX

![image-20210503111932401](Javascript.assets/image-20210503111932401.png)

일부분을 업데이트 하기 위해 XMLHttpRequest 객체 사용

모던 웹에서는 저 XML 대신 JSON 쓴다고 생각.

![image-20210503112348038](Javascript.assets/image-20210503112348038.png)

![image-20210503112352299](Javascript.assets/image-20210503112352299.png)

![image-20210503112606933](Javascript.assets/image-20210503112606933.png)

이름이 XML~ 이지만 다른거 받아와도 됨. 걍 함수 이름이 저런거.

![image-20210503113525281](Javascript.assets/image-20210503113525281.png)

![image-20210503113636623](Javascript.assets/image-20210503113636623.png)

blocking 뜻이 뭐냐면 위에 코드가 완료 돼야지 그다음으로 읽기 시작하는건데?
동기식이라면 리퀘스트 요청 보내면 응답 올때까지 얼어있음.

![image-20210503113813053](Javascript.assets/image-20210503113813053.png)

![image-20210503113822500](Javascript.assets/image-20210503113822500.png)

![image-20210503113833083](Javascript.assets/image-20210503113833083.png)

이건 확인 버튼 누르기전까진 const pElem 부터 코드는 안움직임. 자바스크립트가 쓰레드가 하나라서 그런데?

![image-20210503113958682](Javascript.assets/image-20210503113958682.png)

![image-20210503114051700](Javascript.assets/image-20210503114051700.png)

![image-20210503114101559](Javascript.assets/image-20210503114101559.png)

실제 구동해보면 빈 문자열 출력됨.

![image-20210503114113736](Javascript.assets/image-20210503114113736.png)

얘는 요청 보내고 다음으로 후다닥 넘어가는데, request.response 는 없어가지고 출력이 안되는것.

파이썬의 경우

![image-20210503114213847](Javascript.assets/image-20210503114213847.png)

파이썬은 응답을 받아야지만 JSON이 파싱 됨. 그래서 출력도 잘 나옴

얜 요청 보내고 넘어가버려서 아무것도 출력 안됨. 같은데 요청 날리는데도

![image-20210503114258879](Javascript.assets/image-20210503114258879.png)

색상으로 보면 요청 보내고

![image-20210503114327202](Javascript.assets/image-20210503114327202.png)

응답 받고

![image-20210503114346329](Javascript.assets/image-20210503114346329.png)

하나는 응답 들어있는데? 하나는 빈문자열

![image-20210503114358268](Javascript.assets/image-20210503114358268.png)

요청 보내놓고 먼저 출력 하고 응답이 이후에 와서? 

![image-20210503114444785](Javascript.assets/image-20210503114444785.png)

좀 순식간에 일어나서 잘 구분 안되지만? 이런 과정임.

> 그럼 쓰레드가 뭐냐?

![image-20210503114504378](Javascript.assets/image-20210503114504378.png)

![image-20210503114546600](Javascript.assets/image-20210503114546600.png)

![image-20210503114551346](Javascript.assets/image-20210503114551346.png)

JS는 스택으로 처리하는데 이벤트를, 스택이 하나라는 의미. 일처리 하나밖에 못하면 근데 비동기식으로 못하잖아? 그래서 문제 해결 위해 queue 활용

![image-20210503114741612](Javascript.assets/image-20210503114741612.png)

![image-20210503114846658](Javascript.assets/image-20210503114846658.png)

JS는 쓰레드가 하나라 브라우저 힘을 빌린다는 것.

큐가 비기 시작하려면 메인 쓰레드의 스택이 비어야함.

![image-20210503115021016](Javascript.assets/image-20210503115021016.png)

뭐 이런 그림이 있다고 할 때,

![image-20210503115152488](Javascript.assets/image-20210503115152488.png)

setTimeout은 뭐냐면 3초 뒤에 SSAFY 출력하겠다! 라는것.

파이썬은 hi 출력되고 3초 기다렸다가 SSAFY 출력되고 그다음 bye 출력될텐데?

포인트는 `기다려주지 않는다`

![image-20210503115319371](Javascript.assets/image-20210503115319371.png)

![image-20210503115323698](Javascript.assets/image-20210503115323698.png)

호출 끝났으면 콜스택에서 팝됨.

![image-20210503115326608](Javascript.assets/image-20210503115326608.png)

셋타임아웃 콜스택 오면 얘는 특징이 3초 기다려야 하는데? 

![image-20210503115342390](Javascript.assets/image-20210503115342390.png)

얘가 자리 차지하면 그다음 bye 기다려야 하는데? 바로 처리 안되네? 하면 바로 web api 에 넘겨버림

![image-20210503115443287](Javascript.assets/image-20210503115443287.png)

![image-20210503115449154](Javascript.assets/image-20210503115449154.png)

![image-20210503115503138](Javascript.assets/image-20210503115503138.png)

![image-20210503115511750](Javascript.assets/image-20210503115511750.png)

![image-20210503115516688](Javascript.assets/image-20210503115516688.png)

이벤트 루프는 비어있는지 확인

![image-20210503115522646](Javascript.assets/image-20210503115522646.png)

![image-20210503115532161](Javascript.assets/image-20210503115532161.png)

![image-20210503115538897](Javascript.assets/image-20210503115538897.png)

콜백함수?  호출 됐는데 다시 돌려주니까? 

Web API 에서 처리되던애들은 끝나면 큐로 감.

근데 이 3초가 hi bye 3초 ssafy 이걸까? 맞음. 3초 후에 Task Queue 에 들어간다 라는게 정확한 의미

우리한테 3초 후에 보려주는게 아니라 그때 콜스택이 비어있어야 뭐 하든지 말든지 하는거고 3초 후에 큐에 들어간다가 아주 정확한 표현

파이썬 슬립함수 3초후 이거랑 다름

![image-20210503115744642](Javascript.assets/image-20210503115744642.png)

3초 아니고 0이면 출력값 달라질까?

그래도 hi bye ssafy 임. 왜?

web api 이동은 똑같음 어차피 콜백함수라서. 근데 0초 뒤에 바로 큐로 들어가는건데 그 큐에 들어간 시점에서 이벤트 루프가 보면 이미 스택에 뭐가 있어가지고.

![image-20210503115845097](Javascript.assets/image-20210503115845097.png)

근데 코드가 단순해서 그렇지만, Web API 에서 처리된 순서대로 Task Queue 들어가는 구조라 순서 보장이 안됨.

`문제점` 순차적인 비동기 처리가 안된다는뜻

그래서..

![image-20210503115941220](Javascript.assets/image-20210503115941220.png)

![image-20210503115945671](Javascript.assets/image-20210503115945671.png)

`1` 비동기 콜백 방식 : 이벤트 리스너같은데? 얘도 순차 비동기였음. 확실한 보장이 됨. 클릭하면 -> 콜백함수 실행한다 논리니까.

`2` 콜백 함수의 다음 표현 방식이라고 생각.

---

### Callback Function

![image-20210503140956936](Javascript.assets/image-20210503140956936.png)

![image-20210503141017124](Javascript.assets/image-20210503141017124.png)

Js 는 안기다림.

![image-20210503141139983](Javascript.assets/image-20210503141139983.png)

![image-20210503141255474](Javascript.assets/image-20210503141255474.png)

new는 생성자 (인스턴스 만드는거)

![image-20210503141319723](Javascript.assets/image-20210503141319723.png)

요청 보내고 다음 코드로 넘어가버렸기 때문에 빈 문자열이 떠버림.

onload() 는 요청이 성공적으로 진행 됐을때 수행할 코드라고 생각.

![image-20210503141433965](Javascript.assets/image-20210503141433965.png)

그러면 데이터가 출력이 잘 됨. (참고로만 알자.)

![image-20210503141448948](Javascript.assets/image-20210503141448948.png)

![image-20210503141606648](Javascript.assets/image-20210503141606648.png)

![image-20210503141623111](Javascript.assets/image-20210503141623111.png)

ssafy 출력 시간이 bye 이후 3초 이게 아님. 보장 시간이라기 보단 web api 에서 처리되는 시간이라고 생각.

---

다른 함수에 인자로 넘어갔다면 무조건 이름이 콜백 함수임.

![image-20210503141743708](Javascript.assets/image-20210503141743708.png)

![image-20210503145826645](Javascript.assets/image-20210503145826645.png)

![image-20210503145900328](Javascript.assets/image-20210503145900328.png)

저 이벤트 리스너같은 애들이 대표적.

![image-20210503145921894](Javascript.assets/image-20210503145921894.png)

![image-20210503150023799](Javascript.assets/image-20210503150023799.png)

![image-20210503150125751](Javascript.assets/image-20210503150125751.png)

![image-20210503150136011](Javascript.assets/image-20210503150136011.png)

![image-20210503150153864](Javascript.assets/image-20210503150153864.png)

`코드들`

const result 해도 되고

![image-20210503150353354](Javascript.assets/image-20210503150353354.png)

리턴 자체를 함수로 해서 뭐 이렇게 나옴.

![image-20210503150359340](Javascript.assets/image-20210503150359340.png)

arrow 형태긴 하지만 map 함수의 인자로 넘어간 저 함수가 callback function

![image-20210503150522452](Javascript.assets/image-20210503150522452.png)

![image-20210503150526505](Javascript.assets/image-20210503150526505.png)

Array Helper Method 이것도 구조가 전부 콜백이었음.

![image-20210503150709283](Javascript.assets/image-20210503150709283.png)

![image-20210503150712820](Javascript.assets/image-20210503150712820.png)

오늘 한 setTimeout 도

![image-20210503150750152](Javascript.assets/image-20210503150750152.png)

이벤트 리스너

![image-20210503150914734](Javascript.assets/image-20210503150914734.png)

![image-20210503150922189](Javascript.assets/image-20210503150922189.png)

`해결`

![image-20210503150959220](Javascript.assets/image-20210503150959220.png)

결국 새로운 문법 구조, Promise 타입 활용

---

### Promise

![image-20210503151038855](Javascript.assets/image-20210503151038855.png)

프로미스에서 중요한건 어떤 상황에 대한 약속인데?

아까 무슨 에너지파 같이 생긴 코드는 이 코드가 어느 지점에서 실패할지 잘 모름. 

.then() 성공하면 해야할 것들 / .catch() 실패하면 해야할 것들

![image-20210503151204888](Javascript.assets/image-20210503151204888.png)

근데 프로미스도 콜백이긴 한데 지옥은 안감.

![image-20210503151210202](Javascript.assets/image-20210503151210202.png)

비동기.then(콜백) => 이런건데 앞의 비동기 작업이 성공적으로 오류없이 이행되었을때 한다. 이벤트 리스너랑 비슷한데 얘는 그냥 클릭하면 ㄱㄱ 하는건데 이건 성공하면~ 이런느낌.

프로미스 객체가 넘어간다고 생각하면 됨.

![image-20210503151512534](Javascript.assets/image-20210503151512534.png)

![image-20210503151802477](Javascript.assets/image-20210503151802477.png)

.then 이어지는게 메서드 체이닝. 

![image-20210503151813749](Javascript.assets/image-20210503151813749.png)

다음 콜백이 동작 하려면 반환 값이 있어야 한단 소리.

그래서 기본구조는, 일단 프로미스 객체를 만듦

![image-20210503152014885](Javascript.assets/image-20210503152014885.png)

아래로 떨어트리니까? 막 오른쪽으로 길어지진 않음.

실패했으면 .catch로 ㄱㄱ error 객체 출력.

finally 도 있음.

![image-20210503152128651](Javascript.assets/image-20210503152128651.png)

![image-20210503152209711](Javascript.assets/image-20210503152209711.png)

이런 비동기 작업을 해야 한다고 치자. 그럼 원래 이렇게 할텐데?

![image-20210503152222596](Javascript.assets/image-20210503152222596.png)

![image-20210503152237927](Javascript.assets/image-20210503152237927.png)

![image-20210503152306352](Javascript.assets/image-20210503152306352.png)

![image-20210503152311104](Javascript.assets/image-20210503152311104.png)

`코드작성`

아까 xhr도 성공했을때야 응답 한다는 측면에서 비슷했는데?

![image-20210503152654243](Javascript.assets/image-20210503152654243.png)

Axios ?  요청에 특화되어 있음.

![image-20210503152734660](Javascript.assets/image-20210503152734660.png)

프로미스 객체를 axios 가 리턴해준다.

![image-20210503152829791](Javascript.assets/image-20210503152829791.png)

좀더 길게 쓴다면 이런 느낌.

![image-20210503152851430](Javascript.assets/image-20210503152851430.png)

axios 도 CDN 첫번째 저거 가져오면 됨.

![image-20210503153028370](Javascript.assets/image-20210503153028370.png)

스크립트 가져오는거 위에 해줘야 그다음 쓸 수 있음.

![image-20210503153050437](Javascript.assets/image-20210503153050437.png)

써보면 이렇게

![image-20210503153143767](Javascript.assets/image-20210503153143767.png)

![image-20210503153147986](Javascript.assets/image-20210503153147986.png)

여기까지만 출력해보면 아직 대기상태이다 pending.

![image-20210503153240012](Javascript.assets/image-20210503153240012.png)

![image-20210503153244021](Javascript.assets/image-20210503153244021.png)

그대로 출력해보면 프로미스 데이터 확인 가능.

![image-20210503153327959](Javascript.assets/image-20210503153327959.png)

![image-20210503153336221](Javascript.assets/image-20210503153336221.png)

이런식으로 프로미스 넘어가는거 볼 수 있음.

여기서 title도 뽑고 싶다면?

여기서 response.data.title 이 아닌 이유는 위쪽 리턴이 이미 response.data 였기 때문

![image-20210503153419036](Javascript.assets/image-20210503153419036.png)

![image-20210503153424450](Javascript.assets/image-20210503153424450.png)

이런식으로.

체이닝도 비슷

url 이상한거로 바꾸고 이거 해보면? (에러내기위함)

![image-20210503153552487](Javascript.assets/image-20210503153552487.png)

![image-20210503153616110](Javascript.assets/image-20210503153616110.png)

![image-20210503153643258](Javascript.assets/image-20210503153643258.png)

![image-20210503153647112](Javascript.assets/image-20210503153647112.png)

무조건 이렇게 됨.

최신으로는 이런것도 있음. 

![image-20210503153814603](Javascript.assets/image-20210503153814603.png)

기능은 같은데 새로운 문법적 표현!

![image-20210503153941024](Javascript.assets/image-20210503153941024.png)

![image-20210503153947278](Javascript.assets/image-20210503153947278.png)

.then 이런것들 다 사라짐. then 이 await로 바뀜.

뷰가 엑시오스 공식적으로 채용했던 이유도 있고 이거 쓸거임.







































---

# 유교수님 강의분

브라우저 밖으로 js 가져오니 서버개발이 됨. nodejs는 어쨌든 자바스크립트를 브라우저 밖으로 가지고나와 컴퓨터 언어의 특징인 리소스에 대한 접근 등등 이런게 가능해짐. 

![image-20210428130546289](Javascript.assets/image-20210428130546289.png)

nodejs는 심지어 이젠 플랫폼으로 불림. 자바스크립트 실행환경을 브라우저 밖으로 넓혀준것.

nodejs 깐다는 건 파이썬 3.8 이런거 깐다는거랑 똑같음. 인터프리터 까는 그런 느낌.

![image-20210428130656027](Javascript.assets/image-20210428130656027.png)

---

HTML 문자열 덩어리 -> 브라우저로 들어가면 이걸 1차적으로 DOM 트리로 만듦

![image-20210428132709588](Javascript.assets/image-20210428132709588.png)

근데 이거 nodejs에서의 노드랑 아무상관없긴함

이제 왼쪽 vscode 에서 지우고 태그넣고 뭐 그런게 아니라? F12 눌러서 프로그래밍 언어로 `모두다` 게다가 `넘는 범위를` 코딩해서 넣을 수 있음

window의 의미???  하나의 탭이라고 생각하면 됨 (옆 탭이 아니라)

![image-20210428132945476](Javascript.assets/image-20210428132945476.png)

document는 이거

![image-20210428133004049](Javascript.assets/image-20210428133004049.png)

아래 js 콘솔은??

빨간색 안에 없으니까??? 이렇겐 안불러와지고

![image-20210428133033579](Javascript.assets/image-20210428133033579.png)

window.console 이라고 해야함

![image-20210428133055133](Javascript.assets/image-20210428133055133.png)

---

윈도우 아래 많은 부품들이 있는데? 어차피 최상위니까 굳이 안해도 되고 생략 가능.

![image-20210428133213022](Javascript.assets/image-20210428133213022.png)

document랑 무관한 창인데? window.confirm임 이것도!!

![image-20210428133410732](Javascript.assets/image-20210428133410732.png)

---

실제 같은 노드?  ===  js 비교는 == 도 있긴한데 3개짜리 써야함

![image-20210428133750997](Javascript.assets/image-20210428133750997.png)

그리고 일단 불러왔으면 뭐 위에 실제 태그가 있어서 날아가진 않는데 잡아주는애가 필요함

![image-20210428134032911](Javascript.assets/image-20210428134032911.png)

스크립트 태그까지 써놓고 콘솔로 넘어가면 ? 잡힘. 이어서 가는 느낌이니까?

![image-20210428134138794](Javascript.assets/image-20210428134138794.png)

![image-20210428134231907](Javascript.assets/image-20210428134231907.png)

> 복수선택

![image-20210428135243926](Javascript.assets/image-20210428135243926.png)

심지어 이쯤되면 script로 전부다 html 대체 가능

---

`WS1`

사실 예전에 장고로 브라우저에서 뭐 띄우려면 DB랑 연동해서 for태그로 풀어야했는데?

이건 뭐 서버고 나발이고 없는 상태여서? 저 오른쪽 화면으로 보면? 아래 치고 넣는 순간 써질거임!

![image-20210428164023160](Javascript.assets/image-20210428164023160.png)

서버 응답 이딴거 없이 문서를 동적으로 바로 조작하는거!!

![image-20210428164153956](Javascript.assets/image-20210428164153956.png)

![image-20210428165343202](Javascript.assets/image-20210428165343202.png)

그럼 스크립트 위치가 왜 여기일까? 바디 맨끝 바로위에?

스크립트 위에 한 몇천줄이다 이러면... 애초에 인터넷이 느린가?  이렇게 생각하게 됨. 아래 써주면 동작은 안해도 화면은 보이니까? 

콘솔은 여기서부터 시작함!!!

![image-20210428165604715](Javascript.assets/image-20210428165604715.png)

![image-20210428165642025](Javascript.assets/image-20210428165642025.png)

위의 상황은.. 재선언 했다고 에러뜨는거고. 아래는 싹 지우고 저 스크립트 자체를 오른쪽에 넣으면 그건 된다는거.

![image-20210428165647478](Javascript.assets/image-20210428165647478.png)

근데 뭐 저 스크립트 저런거? 함수로 모듈화 가능

파이썬은 함수선언이 def lambda 2개였는데? JS는 3개임

![image-20210428170139404](Javascript.assets/image-20210428170139404.png)

![image-20210428170801886](Javascript.assets/image-20210428170801886.png)

addTodo() 해야 들어감

![image-20210428170242990](Javascript.assets/image-20210428170242990.png)

새로고침 하면 그냥 바로 이게 주르륵 실행돼버려서? 당연 비어있는게 나오게 된거.

![image-20210428170446357](Javascript.assets/image-20210428170446357.png)

시작부터 이런식으로 밸류값을 줬다면?????????

![image-20210428170510216](Javascript.assets/image-20210428170510216.png)

![image-20210428170525772](Javascript.assets/image-20210428170525772.png)

자바스크립트는 그러므로 함수안에 무조건 담는게 좋음. 

어지간하면 시작부터 바로 해버릴 일이 많지 않아서!!

그리고 위에서 refactor라는게 css 에선 전부 class 로 셀렉팅 하는데?
JS에서는 전부 id로 셀렉팅함. 뭔가 id는 JS를 위해 양보한 느낌.

클래스는 컨벤션이 - 하이픈 기준으로 잡혀있는데?

![image-20210428171133737](Javascript.assets/image-20210428171133737.png)

![image-20210428171148870](Javascript.assets/image-20210428171148870.png)

id는 이렇게 돼있음. 카멜케이스로

뭐 이런건 할수있긴 한데 거의 뭐 의미는 없음 어차피 유일하니까

![image-20210428171401431](Javascript.assets/image-20210428171401431.png)

이렇게 리팩토링!!

![image-20210428171416044](Javascript.assets/image-20210428171416044.png)

그 버튼눌렀을때 실행하는거 이렇게 할수도 있는데?

![image-20210428171550137](Javascript.assets/image-20210428171550137.png)

저거 의미가? () 괄호까지 있어야 하는게?  클릭시 ctrl c ctrl v 해서 그대로 넣는다! 느낌이라.

![image-20210428171616201](Javascript.assets/image-20210428171616201.png)

---

eventlistener

path 함수도 함수 명만 넘겼으니까? 패턴 라우팅 이런거.

![image-20210428172635278](Javascript.assets/image-20210428172635278.png)

인덱스 함수 근데 누가 막 request 랑 1 이렇게 넘기는거 본적이 없음. 이게 마치 request 를 index 함수가 실행될때 넘어올거라는 믿음으로 작성한 코드였음.

![image-20210428172807955](Javascript.assets/image-20210428172807955.png)

이게 (event) 뚫어놓는게 request 뚫어놓는거랑 똑같은거임

이벤트 객체가 알아서 실행되는 시점에 채워져서 들어온다고 하는거임. (내부적으로)

![image-20210428172941284](Javascript.assets/image-20210428172941284.png)

같은 구조라는게 감이 와야함.

![image-20210428173039102](Javascript.assets/image-20210428173039102.png)

게다가 진짜 중요한게 뭐냐면, JS는 함수 인자 갯수가 안맞아도 에러가 안남!!! 파이썬은 에러나는데..?

![image-20210428173241915](Javascript.assets/image-20210428173241915.png)

어차피 (event) 비워도 걍.. 어차피 자동으로 들이밀어 질거라서 괜찮음.

심지어 클릭하는것도 같은 버튼 상의 어느 위치를 클릭했을때까지가 다보임.

![image-20210428173442335](Javascript.assets/image-20210428173442335.png)

이러면 마우스 이동까지 다나옴. 뭐 DB 터질까봐 안하겠지만.

![image-20210428173637486](Javascript.assets/image-20210428173637486.png)

이전까지 댓글 수정은 왜 안했나?

![image-20210428174755159](Javascript.assets/image-20210428174755159.png)

이거 누르면 수정용 html 따로 파서 거기로 보내야하고 막 이랬으니까???

---

`u` `d` 해보자

이렇게 바꿀 수 있음

![image-20210429091055888](Javascript.assets/image-20210429091055888.png)

form은 액션이 없어도 결국 뭔가 제출하려하는데 제출이라는건 어쨌든 요청하는거임 (여기 데이터 담겨있음). 폼은 기본적으로 submit이 input에서 엔터를 치거나 add todo 버튼을 누르는것인데?
기본 동작에 대해서 preventDefault 하면? 

근데 아래 함수에서는 event 못잡으면서? eventListener 가 뭔가 했나보다.. 정도.

![image-20210429092346820](Javascript.assets/image-20210429092346820.png)

아예 event 안쓸거면 그냥  인자 뚫을 필요도 없음. 

![image-20210429092557268](Javascript.assets/image-20210429092557268.png)

![image-20210429092550001](Javascript.assets/image-20210429092550001.png)

이걸 활용해볼것.

![image-20210429093231797](Javascript.assets/image-20210429093231797.png)



이건 조심해야함 JS에서

![image-20210429093544391](Javascript.assets/image-20210429093544391.png)![image-20210429093651230](Javascript.assets/image-20210429093651230.png)

trim() 이건 스트링 원본을 바꾸진 않음. 리턴값이 있으니까?

스페이스바만 눌렀을때, 남아있게 되니까?

![image-20210429094058111](Javascript.assets/image-20210429094058111.png)

![image-20210429094359121](Javascript.assets/image-20210429094359121.png)

---

근데 이런것도 할수있음 ㅋㅋㅋ

![image-20210429094430740](Javascript.assets/image-20210429094430740.png)

![image-20210429094440444](Javascript.assets/image-20210429094440444.png)

![image-20210429094601060](Javascript.assets/image-20210429094601060.png)

---

![image-20210429101038663](Javascript.assets/image-20210429101038663.png)

이런식으로 뭐 집어넣을때 add도 있음.

이렇게 써도 되긴 하지만... done 하면 지금 끝난거 찍찍 하고 싶다 이건데?

![image-20210429101108656](Javascript.assets/image-20210429101108656.png)

onClick 말고 걍 익명으로 하자

![image-20210429101227136](Javascript.assets/image-20210429101227136.png)

묶으면 실행이 되는... 

![image-20210429102140077](Javascript.assets/image-20210429102140077.png)

누르거나 하면 이렇게 할 수 있는데? 하도 이렇게 하니까 toggle 이 생김

![image-20210429102438282](Javascript.assets/image-20210429102438282.png)

![image-20210429102520270](Javascript.assets/image-20210429102520270.png)

![image-20210429102535196](Javascript.assets/image-20210429102535196.png)

이런 느낌

![image-20210429104234840](Javascript.assets/image-20210429104234840.png)

생성시 버튼 붙이기

![image-20210429104846131](Javascript.assets/image-20210429104846131.png)

근데 이렇게 붙이면 밑에있는 애도 받아버림. x표가 그여버림

![image-20210429104958621](Javascript.assets/image-20210429104958621.png)



걍 저버튼은 클릭하면 걍 부모요소 까지 없어야하는데? 이러면 걍 버튼이 없어짐

![image-20210429105203852](Javascript.assets/image-20210429105203852.png)

그래서 이렇게. 근데 이거 진짜 개 의아함. 함수 돌고 끝났는데 liTag 나중에 어디 저장돼있길래 잡아서 그시점에 remove() 해주는거????????? 블록스코프라 싸그리 날아간다며?

![image-20210429105229120](Javascript.assets/image-20210429105229120.png)

`클로저` 개념

![image-20210429110759427](Javascript.assets/image-20210429110759427.png)

![image-20210429110837994](Javascript.assets/image-20210429110837994.png)

그래서 리팩토링 한다면 이렇게 해야 맞음. 그 이벤트 타깃 부모를 지운다 이건 그때 보면 되니까.

![image-20210429105349042](Javascript.assets/image-20210429105349042.png)

---

브라우저 소개 JS 아님 BOM 영역

![image-20210429111444618](Javascript.assets/image-20210429111444618.png)

issue = 만들어둔거 새로고침때 날리고싶지 않음. 이런데 저장소가 있긴 함

![image-20210429111537102](Javascript.assets/image-20210429111537102.png)

![image-20210429111635093](Javascript.assets/image-20210429111635093.png)

일단 로컬 스토리지 쓸거

window.localStorage 라고 해도 되긴 한데? 쓸수있는거 보니까? setItem 이런건 키벨류 다 필요하고 겟은 아니겠구나 추측 가능

![image-20210429111902314](Javascript.assets/image-20210429111902314.png)

Todo 추가 로직에 맨 마지막에 저장을 해두는거임

![image-20210429111930491](Javascript.assets/image-20210429111930491.png)

실제로 막 보면 막 추가됨

![image-20210429112027262](Javascript.assets/image-20210429112027262.png)

앞에 새로고침 할때마다 등장하도록?

![image-20210429112301082](Javascript.assets/image-20210429112301082.png)

---

### 기초문법

마치 이게 최상단 글로벌 객체에 붙는 느낌. 그치만 let const 꼭 써줄거.

![image-20210429124441775](Javascript.assets/image-20210429124441775.png)

스코프라는게.. 안에서 밖은 괜찮은데 밖에서 안이 안된다는거.

![image-20210429124546514](Javascript.assets/image-20210429124546514.png)

![image-20210429124622461](Javascript.assets/image-20210429124622461.png)

이게 좀 호이스팅 이슈가 있음.

선언만 위로 올라가는거.

![image-20210429124723038](Javascript.assets/image-20210429124723038.png)

![image-20210429124729617](Javascript.assets/image-20210429124729617.png)

---

`타입`

![image-20210429125512882](Javascript.assets/image-20210429125512882.png)

![image-20210429125519654](Javascript.assets/image-20210429125519654.png)

제로디비전 이런거 안남. 에러를 최대한 안내려고 하는 컨셉

1 + undefined 여서? Nan 뜨는거. 3개넣으면 인자 세번째꺼 무시하고 해줌.

![image-20210429125855546](Javascript.assets/image-20210429125855546.png)

f 스트링처럼 템플릿 리터럴(?) 

![image-20210429130114152](Javascript.assets/image-20210429130114152.png)

null 은 의도해서 넣는 느낌. undefined 는 하다보니 생긴거고 의도적으로 넣는게 아님.

![image-20210429130305039](Javascript.assets/image-20210429130305039.png)

??????????? 1 === '1' 하면 false 나오는데???????????????????

![image-20210429130850774](Javascript.assets/image-20210429130850774.png)

---

`연산자` 이 두가지에서 -는 다름. 오른쪽은 양수를 빼는거라 이항 연산자고 왼쪽은 단항연산자임

![image-20210429131135735](Javascript.assets/image-20210429131135735.png)

typeof도 연산자라는 것에 주의

앞에도 쓸 수 있음.

![image-20210429132035510](Javascript.assets/image-20210429132035510.png)

![image-20210429132054922](Javascript.assets/image-20210429132054922.png)

이거처럼 평가 뒤에 또찍어봐야 5 나옴   ++ i 이런식으로 띄어써도 됨.

![image-20210429133715247](Javascript.assets/image-20210429133715247.png)

![image-20210429133730273](Javascript.assets/image-20210429133730273.png)

이건 좀 조심해 주자.. [] 는

![image-20210429133843954](Javascript.assets/image-20210429133843954.png)

단축평가는 일어날까 그럼? == 일어남

![image-20210429133855822](Javascript.assets/image-20210429133855822.png)

`삼항연산자`

![image-20210429134119462](Javascript.assets/image-20210429134119462.png)

![image-20210429134137142](Javascript.assets/image-20210429134137142.png)

![image-20210429134152899](Javascript.assets/image-20210429134152899.png)

이게 리턴값이 있어서 할당도 가능함.

동등 연산자 쓰지 말자. 그냥 궁금해할 필요도 없고 하지 말자.

![image-20210429134655121](Javascript.assets/image-20210429134655121.png)



---

`switch`  === 그냥 이런게 있다고 생각.

![image-20210429135254071](Javascript.assets/image-20210429135254071.png)

스위치는 하나 가지고 비교함.

이런거 막 구구절절 하면 js도 저렇게 쓰겠지만.

![image-20210429135346406](Javascript.assets/image-20210429135346406.png)

파이썬에서도 이거 생길거라고 함.

![image-20210429135558721](Javascript.assets/image-20210429135558721.png)

암튼 근데 이거 그냥 두면.. 이래버림.

![image-20210429135714301](Javascript.assets/image-20210429135714301.png)

브레이크 똑바로 걸어줘야함.

![image-20210429135725154](Javascript.assets/image-20210429135725154.png)



---

`반복문`

![image-20210429140113237](Javascript.assets/image-20210429140113237.png)

되게 파이썬 스럽게도 가능

![image-20210429140125311](Javascript.assets/image-20210429140125311.png)

![image-20210429140134210](Javascript.assets/image-20210429140134210.png)

보통 i++ ++i 결과 같을땐 i++ 씀 사람들이

이제 인덱스로 안하고 이렇게 할것.

![image-20210429140917541](Javascript.assets/image-20210429140917541.png)

`주의` == 이거 이렇게 써야함 `const` 로!!

![image-20210429140946979](Javascript.assets/image-20210429140946979.png)

아까 let은 i++ 이런거때문에 할당 당해야 했지만?

여기 const 먹는 이유는 블록 이후로 없어지니까? 

이거 뭔차이냐면 for in 은 딕셔너리 형태 돌리라고 만들어둔거임. array 돌리면 idx 나오는데 그냥 array dict 나눠서 돌리라고 나눠둔거임.

![image-20210429141354775](Javascript.assets/image-20210429141354775.png)

![image-20210429141401200](Javascript.assets/image-20210429141401200.png)

이런식으로 씀

![image-20210429141435630](Javascript.assets/image-20210429141435630.png)

Js 에서는 파이썬의 딕셔너리를 Object라고 부름

파이썬의 Object (딕셔너리)는 훨씬 간단한데, key값은 애지간하면 스트링이라 

이거 따옴표 생략해도 먹음

키값을 스트링인데 변수인거처럼 조회 가능!

![image-20210429141659495](Javascript.assets/image-20210429141659495.png)

---

`함수`

이게 예전기준으로 var 쓰면 둘이 같은 느낌인데,

![image-20210429143448848](Javascript.assets/image-20210429143448848.png)

const 쓰면 호이스팅 막는게 좀 가능

![image-20210429143514222](Javascript.assets/image-20210429143514222.png)

![image-20210429143603605](Javascript.assets/image-20210429143603605.png)

이런건 또 됨..

![image-20210429143658151](Javascript.assets/image-20210429143658151.png)

이게 막 add 못찾으니까 호이스팅 돼서 올라간다음 진짜 있으니까 다시 내려와서 되는 이런 느낌인데..? 그냥 원래 파이썬 처럼 정의 먼저 하고 아래 사용한다 생각 하자.

1,2 번은 반드시 해야하는거고, 여기까지가. 3 4 도 옵셔널하게 할 수 있음.

![image-20210429144153975](Javascript.assets/image-20210429144153975.png)

![image-20210429144408803](Javascript.assets/image-20210429144408803.png)

인자가 없는 경우

![image-20210429144537244](Javascript.assets/image-20210429144537244.png)

arrow 는 사실 'this' 랑 연관이 있어서 ES6부터 만들어진거고, 선언식과 약간 람다비스무리한 얘랑 완전히 같은게 아님. 단순히 짧게 쓰려고 만든게 아니고.

`함수안에 this 라는 말이 있으면 다르게 동작할거고, 없으면 상관 없다고 생각하자`

---

`배열`

리버스 리턴도 있고 원본도 바뀐다는게 차이.

![image-20210429145612826](Javascript.assets/image-20210429145612826.png)

푸시 리턴값은 length!! 라는것

파이썬에서 없던게 있는데, 앞에 추가하는게 됨. 좀 주의할게 unshift가 앞에 추가. 리턴값도 length

![image-20210429145756845](Javascript.assets/image-20210429145756845.png)

![image-20210429145926416](Javascript.assets/image-20210429145926416.png)

이건 있냐고 물어보는것.

![image-20210429150034391](Javascript.assets/image-20210429150034391.png)

없는애는 - 나옴

![image-20210429150259656](Javascript.assets/image-20210429150259656.png)

`주의`

파이썬 죠인은..? 자체가 스트링이거나 이터러블 요소들이 스트링이어야 하는데?

![image-20210429150434337](Javascript.assets/image-20210429150434337.png)

JS는 join 이 ? 좀 헐렁한데... 숫자지만 연결하면 강제로 문자열로 만들어버리는게 있음.

뭐 원본은 변화 없고

![image-20210429150509321](Javascript.assets/image-20210429150509321.png)

![image-20210429150616179](Javascript.assets/image-20210429150616179.png)

파이썬은 map 을 따로 함수로 뒀는데 얘는 배열 메서드임

![image-20210429150754463](Javascript.assets/image-20210429150754463.png)

이런애들이 어레이 헬퍼 메서드!

---

`Object` 객체지향프로그래밍쪽으로 생각이 빠지지 않게 주의. 걍 딕셔너리임 이거

딕셔너리 쪽에 좀 편리한게 많음.

![image-20210429151527091](Javascript.assets/image-20210429151527091.png)

키벨류가 같은 경우 그냥 생략해도 먹음

![image-20210429151930744](Javascript.assets/image-20210429151930744.png)

![image-20210429152509391](Javascript.assets/image-20210429152509391.png)

---

![image-20210429155252925](Javascript.assets/image-20210429155252925.png)

이건 그냥 그러려니 하고 넘기면 되는데 destructuring은 중요함

![image-20210429155814741](Javascript.assets/image-20210429155814741.png)

한방도 가능

![image-20210429155828977](Javascript.assets/image-20210429155828977.png)

언제 쓰냐면, 뭐 이런 경우에 원래 이렇게 써야하는데?

![image-20210429160009301](Javascript.assets/image-20210429160009301.png)

한방으로 가능

![image-20210429160043318](Javascript.assets/image-20210429160043318.png)

---

`JSON` 자바스크립트식 딕셔너리 표기법인데, 심지어 순수 JS 보다 뭔가 더 파이썬 스러움. json은 애초에 "" 이거 들어가줘야해서

![image-20210429160351621](Javascript.assets/image-20210429160351621.png)

![image-20210429160700082](Javascript.assets/image-20210429160700082.png)

---

`array helper method`

for each 문

![image-20210429161255948](Javascript.assets/image-20210429161255948.png)

각각의 요소에 대해 이 함수를 실행하겠구나!

map은 리턴값이 있고

![image-20210429161450690](Javascript.assets/image-20210429161450690.png)

![image-20210429161638535](Javascript.assets/image-20210429161638535.png)

약간 돌면서 한방에 가능

![image-20210429161800341](Javascript.assets/image-20210429161800341.png)

필터는 이런거

![image-20210429162033139](Javascript.assets/image-20210429162033139.png)



![image-20210429162823364](Javascript.assets/image-20210429162823364.png)

---

every => 하나씩 다 해봐서 하나라도 false 면 false 임. 

![image-20210429172307744](Javascript.assets/image-20210429172307744.png)

이게 return '뒤' 의 tf 로 판단하는거라 리턴 있어야함

some()

![image-20210429172414377](Javascript.assets/image-20210429172414377.png)

`reduce`  인자가 `2` 개 필요하다는게 특징임.

콜백함수도 인자 2개고 , 리듀스 자체도 인자 2개

![image-20210429172941019](Javascript.assets/image-20210429172941019.png)

재귀적으로 동작한다고 생각하면 되는데, 이전 함수 리턴값이 다음 회차의 acc에 들어감.

![image-20210429173023224](Javascript.assets/image-20210429173023224.png)

여러가지 구현 가능

![image-20210429173303568](Javascript.assets/image-20210429173303568.png)

![image-20210429173530232](Javascript.assets/image-20210429173530232.png)

![image-20210429173617799](Javascript.assets/image-20210429173617799.png)

![image-20210429174012923](Javascript.assets/image-20210429174012923.png)

파이썬도 이거 있음..

![image-20210429174504443](Javascript.assets/image-20210429174504443.png)

![image-20210429174542796](Javascript.assets/image-20210429174542796.png)

앤 이니셜 value 없으면 자동으로 acc = arr[0] 으로 시작해버림 (num = arr[1])

![image-20210429174918863](Javascript.assets/image-20210429174918863.png)

![image-20210429175125573](Javascript.assets/image-20210429175125573.png)

exclusive or...

![image-20210429175243719](Javascript.assets/image-20210429175243719.png)

![image-20210429175319673](Javascript.assets/image-20210429175319673.png)

---

## AJAX

`특성` 에 집중을 해보자면, 콜백쪽이 이슈가 아니라? blocking , non-blocking !!

콜백 function은 그냥 수단일 뿐이다.

세상의 어지간한 언어는 blocking임. (코드가 한줄이 끝날 때까지는 다음 줄로 넘어가지 않는다.)

![image-20210503130634076](Javascript.assets/image-20210503130634076.png)

여기서 모든 코드가 블럭킹 하다는게 중요. sleep(3)이 3초간 멈추니까.

![image-20210503130658194](Javascript.assets/image-20210503130658194.png)

일을 얼마나 빠르게 하느냐? CPU, 일을 얼마나 많이 하느냐? 메모리

우리의 프로그램을 실행하기 위해서 몇명이 일을 했을까? 1인임.

3초를 일꾼이 셈. 이 코드에서 일꾼이라곤 1명이라서.

근데 Javascript는 ? sleep 같은게 setTimeout() 함수가 있는데, 정수 숫자는 2번째 인자이고, 첫번째 인자는 함수여야 함.

밀리세컨 단위라 3000 적어줘야 하고? 

![image-20210503131334810](Javascript.assets/image-20210503131334810.png)

![image-20210503131444699](Javascript.assets/image-20210503131444699.png)

뭔가 이런 순서처럼 보이지만? 실제 순서는 이런 식.

![image-20210503131454122](Javascript.assets/image-20210503131454122.png)

2가 끝날때까지 기다린게 아니라 3부터 찍히고 4 됨. 이게 non-blocking

> 주의 : 파이썬은 모든게 다 blocking 한데?

Javascript는 몇몇 작업(시간, 요청 등 => 언제 끝날지 모르는 일들)이 non-blocking 한 요소들`도` 있음. 그래서 이전 줄이 완료되기 전에 다음줄이 실행 되는것 `처럼` 보인다.

자바스크립트 엔진이 보기에 언제 끝날지 모르는애들이 전부 non-blocking 하게 처리됨.

요청도 언제 끝날지 모르는 일의 대표적인 일인데?

그래서 아까 파이썬 일꾼은 하나고, 요청을 보내는것도 일꾼 하나고 요청 응답 받는것도 얘가 해야해서?  파이썬은 블록걸림 저기서

![image-20210503132059119](Javascript.assets/image-20210503132059119.png)

JS는 혼자 하는게 아니라, 지원군이 있음(브라우저)

`Single Thread` : 1명이 일하는 것. Js 도 결국 싱글 스레드긴 함.

근데 아무튼 이 싱글쓰레드가 시간, 요청 이런것들은 지가 당장 못할 거라고 생각하는 대표적인 일임. 시간 관련, 요청 관련은 나머지는 바로바로 할 수 있다고 하는것도 근데 싱글스레드의 착각일 수 있는데?

백만번 루핑해야 하는 이거 생각보다 오래 걸릴 수 있는데?

![image-20210503132532430](Javascript.assets/image-20210503132532430.png)

실제로 이건 오래 걸리더라도 지가 함. 이건 근데 blocking 한 요소임. 이걸 처리하는 동안 브라우저가 실제로 멈춤!! 

실제로 이건 파이썬마냥 while 처리 이후에 돎

![image-20210503132648440](Javascript.assets/image-20210503132648440.png)

그래서 JS도 결국 어지간한 경우에도 blocking 한데 타 언어처럼?

시간관련, 요청관련은 web api 에 넘겨버림.

JS의 싱글스레드 이 친구는, 브라우저에 관한 모든 일이 얘 소속임. window라고 부르는 그 객체(하나의 탭) => 이 윈도우의 모든걸 담당함 이 스크립트 코드 뿐만 아니라.

그래서 web api는 약간 도우미 같은거.

싱글 스레드는 document, event 이런 것들 전부 담당한다는 뜻인데? (검색창에 뭐 쓰는것도 다 이벤트니까?)

실제로 이거 하는 동안 클릭 하나도 안됨. 스크롤도 되는거 같지만 이상하게 나옴.

![image-20210503132922347](Javascript.assets/image-20210503132922347.png)

![image-20210503132947925](Javascript.assets/image-20210503132947925.png)

파이썬은? 쓰레드 추가 가능. (멀티 쓰레드 프로그래밍)

JS는 single Threaded 환경에서 일한다는게 이게 추가가 안돼서 그럼. 

근데 하드웨어 쓰레드가 4개라고 여기서 파이썬 쓰레드를 추가 한계가 4갠가? 이러면 안됨. 

1명이 4명어치 하는 느낌임 소프트웨어 적으로 쓰레드 프로그래밍 한다는건 (cpu에 쓰레드가 몇개인지 걱정하고 짜는 뭐 이런게 아님.)

![image-20210503133502844](Javascript.assets/image-20210503133502844.png)

thread 나눠서 프로그래밍 하기 시작하면 졸라 복잡함. 일도 하면서 사람관리 매니징이 추가 돼서.  잘못 짜면 이래됨. 우리가 짜는 방식이 좀 이렇게 짜는거. 

![image-20210503133740959](Javascript.assets/image-20210503133740959.png)

브라우저가 요청 권한이 뎁스까지 쭉 파고든다면? 브라우저가 컴퓨터에 모든걸 접근할 수 있는 위험한 상태가 됨. 보안성 문제가 있음. 브라우저 내부의 일은 이상한거 다운받고 뭐 이런게 아니라면 생각보다 컴퓨터 쪽으로 파고들지 못하게 되어 있음. 

![image-20210503133908682](Javascript.assets/image-20210503133908682.png)

클릭해서 뭐 해봤자? 아무 문제 없음.

![image-20210503134004753](Javascript.assets/image-20210503134004753.png)

클릭해서 들어간다음 뭔가 instruction 따라 하면 문제가 되겠지만. 동의하고 뭐 그러면.

그래서 무조건 죽을때까지 싱글 스레드 환경이 되는거고, 시간/요청 작업 등만 따로 빼서 브라우저가 도와주는거.

그럼 JS 처음부터 4명쯤두면 되지 않냐?

파이썬(컴퓨터를 조작하는 언어)은 내 환경에 대한 이해가 있으니까 쓰레드 추가해 나가면서 코드를 짜겠다는 베이스가 깔려 있는건데?

![image-20210503134219917](Javascript.assets/image-20210503134219917.png)

근데 JS의 경우엔?

요청이 100개 200개 뭐 몇개가 될 지 모르는데 요청 나눠 가지는것도 어렵고,
상대방 컴퓨터가 어떤 환경인진 모르니까(최소한 컴퓨터니까 1스레드는 지원 하겠지만)
멀티 쓰레드 던지면 안됨.

그래서 js는 비동기 가능

파이썬은 막 이런식으로 하나씩 순차적으로 해야겠지만?

![image-20210503134451030](Javascript.assets/image-20210503134451030.png)

다운로드 속도 있고 파싱 속도 있고, 다운로드 하고, css 받고 파싱 하고.. 등등 해야 문서가 완성이 될텐데 파이썬은, 그러면 사용자 경험이 망함.

JS는 이런식

![image-20210503134624504](Javascript.assets/image-20210503134624504.png)

그냥 이벤트루프 모델 안에선-> 걍 다 쏘고 프로세스따라 받음.

그래서 이벤트처럼 언제 끝날지 모르는 애들은 콜백 패턴을 따라야함.

언제 끝날지 모르니까 함수를 넘겨놔! 이거. 쟝고에서 url path 그것도 같은 논리였음.

![image-20210503134756736](Javascript.assets/image-20210503134756736.png)

document에 event리스너 `붙이는게 일의 끝`이라 이건 뭐 non block 이런게 아니고.  

setTimeout 경우엔? 얘도 실행 바로 끝남 함수 자체는 (즉시 실행 함수)

함수 자체는 브라우저 사이드킥에 일을 넘기는거 자체가 일임.

![image-20210503135025252](Javascript.assets/image-20210503135025252.png)

이걸 태스크 큐에 넣고, 이벤트 루프(눈) 보니까 일이 왔으면 스택 비어있는 경우 하는데?
실제로 이건 바로 실행이 되긴 하지만, 미뤄지고 해서 non blocking 하다 라고 함.

실행됨과 동시에 미루는것.

`!` 콜백 쓰면 논블러킹 하냐? 그렇지 않음. 쟝고도 콜백이었는데 앤 블러킹 했음. 파이썬으로 짰으니까 보통 언어랑 같았음.

`!` 웹 api 가 non-blocking 하고 이걸 구현하기 위해 콜백 구조를 쓸 수 밖에 없다.

---

자바스크립트는 객체를 만드는 객체인데, 클래스 기반 객체가 아니긴 한데?

new XMLHttpRequest() 뭐 이런거 결과도 객체(딕셔너리)임.

근데 좀 말장난 같긴 한데, 우리가 파이썬에서 알던 객체처럼 뭔가 그렇게 동작하긴 할거임.

파이썬 클래스는 약간 저 밑의 3줄을 가능하기 위한 방법이 클래스로 찍어내는 거고?

![image-20210503163743432](Javascript.assets/image-20210503163743432.png)

자바스크립트는 이러한 작업을 object (딕셔너리)로 하겠다는것

![image-20210503163841305](Javascript.assets/image-20210503163841305.png)

어쨌든 객체 안에서 행동 묘사가 가능함. 속성값도 줄수있고.

![image-20210503163912698](Javascript.assets/image-20210503163912698.png)

이런게 가능할거니까 JS에서도.

근데 막 생성자 함수나 상속같은건 어케 할꺼냐... 뭐 이런게 논의가 있었는데?
JS는 클래스 기반이 아니라 object 기반의 객체를 만들다 보니까?
Proto 같은 개념으로 상속 진행하고 그랬는데 이게 JS만의 특징임.

그래서 js 도 클래스 추가했는데, 키워드만 추가된 느낌이고 내부 동작은 하나도 안바뀐게 심지어 튀어나오는것도 결국 딕셔너리라서..? (본질은 object로 나옴)

그래서 class new 이런게 나옴. JS는 그래서 객체지향 기반 언어긴 함. 그 object가 키 벨류일 뿐.

---

`화면 전환 없는 요청` 이 AJAX 의! 핵심

만약 랜덤하게 개 화면 가져오고 싶다면 이런 방식이었음 기존에 알던 방식은.

![image-20210503165335709](Javascript.assets/image-20210503165335709.png)

근데 이렇게 중간이 없어도 되는거 아냐? 왜 서버 통해서 했냐?

자바스크립트 없이는 리퀘스트 + 파싱을 할 수 없었음 파이썬만으로는



![image-20210503165538685](Javascript.assets/image-20210503165538685.png)

일단 이렇게 하면?

![image-20210503165840020](Javascript.assets/image-20210503165840020.png)

근데 버튼 안에 a 태그 원하면 a b 순으로 해야함.

![image-20210503165903142](Javascript.assets/image-20210503165903142.png)

![image-20210503165919534](Javascript.assets/image-20210503165919534.png)

같은 폴더안에 있는 파일로 간거. 이게 기본 틀 그래서 index 에서 alt b로 키고 저거 버튼 눌러보면 result 가서 콘솔 켜보면 wow 찍혀있음.

이제 axios 가서 CDN 긁어올거, 긁어온건 script 태그의 무조건 최상단에 둬야함.

근데 axios 왜필요하다? 이거 클라이언트인데 엑시오스도.. 브라우저도 클라이언트인데 굳이 왜 필요한거야? 라고 생각할 수 있음.

![image-20210503170520299](Javascript.assets/image-20210503170520299.png)

저 위에 script에 axios 이미 잡혀있어서 아래선 할필요 없음. 아래 axios = 1 하고 콘솔로그 찍어보면 1 나옴. 재할당이 됨.

근데 여기서 저 axios.get 의 리턴값이 promise 가나옴!! 

const promise = axios.get() 이라고 써도 되지만 안씀.

promise는 특정 일이 성공적으로 이루어졌을때와 실패했을 때의 우리의 예언을 적는 곳임.

아직 일어나지 않은 일인데, (언제 끝날지 모르는 일인데) 됐을때? 안됐을때? 정도만 적을수밖에 없다는 의미인데?

`이게 .then 근데 얘는 ? 들여쓰기 함. `

![image-20210503170800009](Javascript.assets/image-20210503170800009.png)

![image-20210503170906249](Javascript.assets/image-20210503170906249.png)

~을 한다 식으로 동사(함수)를 적어야함. 이 아래 사진이 기본적인 틀. 

![image-20210503171141538](Javascript.assets/image-20210503171141538.png)

res는 알아서 실행하는 시점에 채워지도록 넘겨주는거 get이. 그 쟝고 request 같은거.

then 함수가 실행되는 시점에 res 넘긴다! 생각.

저 아래 err 도 res라고 써도 되지만 어차피 변수명이라 바꿔도 되는데 좀더 명시적으로 해주기 위해 err

res 정체 찍어보면? res는 `응답`인데 이걸 누가 보낸 응답일까? 그 개 사진 보내준 사이트의 서버가 보내줌.

![image-20210503171652331](Javascript.assets/image-20210503171652331.png)

사실 프리뷰만 보면 굉장히 적게 온거같지만?

![image-20210503171817737](Javascript.assets/image-20210503171817737.png)

![image-20210503171828936](Javascript.assets/image-20210503171828936.png)

사실 개많이 옴. 부가 정보가. 

axios 입장에서는 프리뷰만 있어선 안되고 데이터 까보면 config 아래 막 엄청 정보 많이 볼수있음.

![image-20210503171936224](Javascript.assets/image-20210503171936224.png)

쓸데없는거 좀 접어보면? data 안에 다 있음.

![image-20210503172008329](Javascript.assets/image-20210503172008329.png)

신기한건 JSON 으로 응답이 왔는데? 해석까지 끝내놨다는게 굉장히 의아한점. 파싱을 끝내 놓은거임. axios가 스트링 파싱까지 한거!! xhr 은 직접 파싱 해야하지만?

파싱 끝내서 data 키의 오브젝트 밸류로 넣어서 주는게 axios가 하는 일.

그래서 res.data 까지만 보면 되겠다 가 결론. 그리고 또 그중에서 메시지 라는것만 필요함 url 마지막으로 살발라낸거니까.![image-20210503172157658](Javascript.assets/image-20210503172157658.png)

`res.data` 까지는 axios가 고정시켜주고, 그다음 message는 이건 그 사이트에서 정한 값임.

그럼 이거 일일히 다 찍어서 열어봐야 하나?

`API 문서 보고 아는거임 애초에 API 문서 존재 이유가 그거니까`

![image-20210503172906924](Javascript.assets/image-20210503172906924.png)

근데 이건 왜 엑박일까?? 블록스코프라서 그런건 아님

![image-20210503173116764](Javascript.assets/image-20210503173116764.png)

web api 때문에.

![image-20210503173206444](Javascript.assets/image-20210503173206444.png)

성공했으니까! 넣겟다가 되어야 함.

![image-20210503173254882](Javascript.assets/image-20210503173254882.png)

그러면 시간때문에 그런가?

싱글스레드는 10초간 저 포문 처리위해 멈추지만 web api는 안멈추는데?

![image-20210503173601429](Javascript.assets/image-20210503173601429.png)

10초 도는동안 아웃소싱 돌린 web api 이건 됐을텐데? 

![image-20210503173656460](Javascript.assets/image-20210503173656460.png)

결국 시간이 중요한게 아니라 스택이 안비어서 큐에서 못올라와서 그럼.

포문 아래두면 사진 띄우는데 시간 좀더 걸림.

![image-20210503173946827](Javascript.assets/image-20210503173946827.png)

이런식으로 뎁스 ㄱㄱ

![image-20210503174134596](Javascript.assets/image-20210503174134596.png)

그럼 버튼 누르면 이걸 한다! 로 바꾸면 어떨까? 여태까지는 그냥 새로고침 하면 샤샥 됐지만?

![image-20210503174432141](Javascript.assets/image-20210503174432141.png)

`AJAX !!`

![image-20210503174608019](Javascript.assets/image-20210503174608019.png)

결과적으로 완성 됐는데, 이 모습을 처음 보고 있음. 화면 전환 없는 요청!!!

시작 엑박이 별로인 경우. 근데 setattribute로 해도 되고. 근데 두방식중 뭐가 더 빠르냐 이런것도 있는데? 초당 44번 돌았음. 그래서 style이 더 빠름.

![image-20210503175546650](Javascript.assets/image-20210503175546650.png)

![image-20210503175421564](Javascript.assets/image-20210503175421564.png)

![image-20210503174747904](Javascript.assets/image-20210503174747904.png)

url 요상하게 두면 에러 메시지 나옴. 위에 빨간 에러는 axios 실패를 브라우저가 실패 캐치해서 해준거고, 아래가 우리 메시지

![image-20210503174951951](Javascript.assets/image-20210503174951951.png)

console.error 하면 진짜 빨간색으로 출력해줌

![image-20210503175019827](Javascript.assets/image-20210503175019827.png)

이제 console.error(err) 이렇게 쓸거임.

근데 오래걸리게 짜면 안됨. 애초에 걍 그럼 잘못 짠거임. 빡센 연산 (알고리즘 문제 풀듯이)  이딴거 JS로 하면 안됨.

![image-20210503175135585](Javascript.assets/image-20210503175135585.png)

이벤트 리스너 붙이는게 사실 거의 엄청 대부분일텐데, 이거 자체는 콜백 함수 내부 로직이 길게 되면 문제가 생길 수 있음 (이벤트 리스너가 길다기보다)

그렇지만, 나중에 이벤트 발생하는거니까, 이벤트 안에 코드가 엄청나게 길더라도, 어차피 나중에 할거라고 밀기 때문에? 

인피니티 스크롤은 -> 페이지네이션의 응용

이거 콜스택이라는게 함수 콜스택이라 while 이런건 여기 들가지도 않음.

![image-20210504091059921](Javascript.assets/image-20210504091059921.png)

---

## AJAX 실습

> 쟝고 콜라보 해볼것 => 좋아요와 follow 가 어떻게 화면전환 없이 될까.

axios는 base.html에 두는게나음.

폼이 정상동작 해서 action 으로 쏴버리면 그게 새로고침이라 이걸 이제 없앨건데?

![image-20210504101811253](Javascript.assets/image-20210504101811253.png)

method POST도 없어져야함. 왜냐면, 폼자체가 지금 POST 방식으로 '어디로' 보내겠다 라는 구조로 되어 있는데, 액션 비운다 뭐 이런게 아니라 걍 다 없어져야함.

사실 form 지우고 버튼만 살려놔도 상관은 없는데?..? 근데 남겨두긴 해볼거. 이제 대신 id 속성을 줄거냐?. form id 이러면 저 위에 포문 있어가지고 id 여러개 찍어내게 됨.

그래서 어쩔 수 없이 클래스를 써야함 + 쿼리셀렉터all

---

이러면 안됨. 엑시오스 잡을수가 없음. 블럭 스크립트 따로 파야함

![image-20210504102242411](Javascript.assets/image-20210504102242411.png)

이렇게 해야 신택스 하이라이팅 제대로 가능

![image-20210504102654924](Javascript.assets/image-20210504102654924.png)

이제 기본세팅, class = likeForm 해두고

![image-20210504102836968](Javascript.assets/image-20210504102836968.png)

보면 리스트같은데 뭔가.. typeof 유사배열 object

![image-20210504102956034](Javascript.assets/image-20210504102956034.png)

근데 심지어 포문 돌려지니까 배열 같은데?

![image-20210504103035790](Javascript.assets/image-20210504103035790.png)

근데 유사배열 따리라서 array helper method 못씀

웃긴게 `forEach 만 지원함!!`

![image-20210504103200068](Javascript.assets/image-20210504103200068.png)

근데 폼 안의 버튼이니까 자동적으로 submit 기능 가지게 돼서 지금 어떤 이벤트를 다룰걸지 생각을 해보고 짜야함.

![image-20210504103903055](Javascript.assets/image-20210504103903055.png)

근데 이거 버튼 클릭하면 preventDefault() 안해서 폼의 기본기능 못막아가지고 콘솔 찍히고 바로 새로고침 되는데다가, csrf 토큰도 url에 남아버림.

![image-20210504104055302](Javascript.assets/image-20210504104055302.png)

이제는 누를때마다 submit 쌓여 나감.

![image-20210504104141324](Javascript.assets/image-20210504104141324.png)

그럼 이런거 17번 글 좋아요 했다고 console.log 찍힐수 있나? `이거 안됨..`

![image-20210504104438358](Javascript.assets/image-20210504104438358.png)

지금 포문 밖에 있어가지고...

포문 갯수 같으니까 아래서 새로 돌리면 되나? 이러면 절대안됨.

![image-20210504104610517](Javascript.assets/image-20210504104610517.png)

스크립트 안에 절대 DTL 넣는거 안됨.

---

그럼 어떻게 아냐?

`HTML dataset` 검색

![image-20210504110343090](Javascript.assets/image-20210504110343090.png)

data- 이후에 뭐 적으면 커스텀 가능한데, 이런거 하는 이유는 JS에서 쓰기 때문임.

![image-20210504110509949](Javascript.assets/image-20210504110509949.png)

![image-20210504110526963](Javascript.assets/image-20210504110526963.png)

돔스트링맵 => 유사 오브젝트

이게 좀 구현이 이상한게 data - {lunch = "단식"} 이렇게 변환된거 같은 느낌

![image-20210504110615397](Javascript.assets/image-20210504110615397.png)

그래서 이렇게도 할 수 있음.

![image-20210504110651332](Javascript.assets/image-20210504110651332.png)

표기방식도 뭐 저렇게 해도 됨. 근데 이러면 좀 신기한 일이 일어나는데?

![image-20210504110717603](Javascript.assets/image-20210504110717603.png)

![image-20210504111033369](Javascript.assets/image-20210504111033369.png)

![image-20210504111104434](Javascript.assets/image-20210504111104434.png)

브라우저가 신기하게 변환해줌 JS 스타일로

![image-20210504111037451](Javascript.assets/image-20210504111037451.png)

그대로 넣으면 막 마이너스 연산이 돼버릴 거니까 알아서 변환해 주는것.

![image-20210504111131542](Javascript.assets/image-20210504111131542.png)

---

axios get에 우리 쟝고 url 넣어주면 이제 우리꺼에 요청 간다는거 알 수 있음.

![image-20210504111338115](Javascript.assets/image-20210504111338115.png)

![image-20210504111431954](Javascript.assets/image-20210504111431954.png)

근데 막 이렇게 뜸 막상 눌러보면

![image-20210504111507766](Javascript.assets/image-20210504111507766.png)

axios.get 이라서 get요청이긴 함.

이걸 axios.post 해주면 됨.

![image-20210504111537841](Javascript.assets/image-20210504111537841.png)

근데 이제 csrf 없다고 옴. post 는 맞는데..

![image-20210504111602897](Javascript.assets/image-20210504111602897.png)

![image-20210504111715786](Javascript.assets/image-20210504111715786.png)

사실 csrf 정체는 저거였음. 사용자 몰래 input으로 토큰 넣어서 딴애들 갈때 지도 슬쩍 따라가는 애가 된거임. 그럼 알아서 미들웨어가 온애를 체크하고 이런 구조였는데?

지금은 form submit을 막았으니까(prevent) 애가 안넘어가는게 문제라는건데?

실제로 지금 날리는건 axios.post 가 날리는데? 저 랜덤한 문자열을 같이 보내야 한다는 건데, 이걸 골라내야함. 인풋 태그 잡아서 밸류값 잡아서 같이 보내야 한단 소리임.

폼이 여러개 있지만 csrf 토큰 값이 같은데? (이 문서 안에서는) 

![image-20210504111942403](Javascript.assets/image-20210504111942403.png)

![image-20210504111952516](Javascript.assets/image-20210504111952516.png)

좀 다르긴 한데...

이제 얘를 밖에 빼도 상관 없음 (어차피 폼은 안날라 가니까)

이걸 input 태그로 봐야함 input hidden 으로 만들어진 걍 태그임 이거

![image-20210504112012370](Javascript.assets/image-20210504112012370.png)

![image-20210504112128425](Javascript.assets/image-20210504112128425.png)

속성값중에 name 미들웨어토큰이라는 애를 찾아라 하는 셀렉터임. 이게 css selector 임.

아니면 저기 가서 우클릭 카피셀렉터  하면됨. (근데 좀 구구절절 나와서 구림)

근데 또 이거 토큰 매번 잡을 필요도 없고 어차피 문서당 csrf 토큰 하나라

![image-20210504112342728](Javascript.assets/image-20210504112342728.png)

![image-20210504112405196](Javascript.assets/image-20210504112405196.png)

최종 리팩토링

axios 요청 하는 방법이 두개가 있음.

axios(안에 인자로 딕셔너리를 넣어버려도 됨)

요청에 헤더를 싣는것. (메타데이터 같은건데)

X-CSRFToken 이건 표준임. 쟝고가 헤더에 이 키값을 기다림. 여기에 실어야지만 제대로 작동함

![image-20210504112622214](Javascript.assets/image-20210504112622214.png)

쏘려고 하는 곳과 저쪽 브라우저 url 저기랑 같아야함. 저게 만약 브라우저에서 127.00~ 이렇게 시작하면 실질은 같은거여도 다른 url로 인식하는 문제가 있음.

![image-20210504112919746](Javascript.assets/image-20210504112919746.png)

---

이 상태에서 응답을 보려면 어떻게 해야할까? console.log(res)?

![image-20210504124559743](Javascript.assets/image-20210504124559743.png)

뭐 이것도 좋은데, 네트워크 탭 가서 보는 연습

![image-20210504124728124](Javascript.assets/image-20210504124728124.png)

![image-20210504124741609](Javascript.assets/image-20210504124741609.png)

status code 302 라면 redirection 이라 articles로 넘어감

그래서 articles 쪽에 response 탭 가보면? 볼수있음.

![image-20210504124811705](Javascript.assets/image-20210504124811705.png)

왜냐면 좋아요 누를때?

![image-20210504124845032](Javascript.assets/image-20210504124845032.png)

html 응답으로 주는게 render. 비동기 요청의 결과가 render 결과인 html 주는거.

![image-20210504124909920](Javascript.assets/image-20210504124909920.png)

이런 사이클이었으니까?
이제 비동기로 할거면 리다이렉트 없애버리면 되나?

![image-20210504125007482](Javascript.assets/image-20210504125007482.png)

view 함수는 무조건 리턴을 해야함.  가장 심플한 응답 객체라도!

![image-20210504125109338](Javascript.assets/image-20210504125109338.png)

![image-20210504125139896](Javascript.assets/image-20210504125139896.png)

![image-20210504125330494](Javascript.assets/image-20210504125330494.png)

뭐 json dump data 해도 됨 여긴 파이썬이니까.

![image-20210504125352860](Javascript.assets/image-20210504125352860.png)

새로고침 안해도 됨. 새로고침은 html 의 변경사항이지 이건 파이썬 코드 저장하면 서버가 새로고침 한거라서? html은 그냥 이전 html로 서버에 그대로 보내는데? 서버가 새로고침 돼서 응답이 이제 달라지는거임.

![image-20210504125504451](Javascript.assets/image-20210504125504451.png)

여기까지 해주는게 서버 개발자의 일. json 잘 보내주기. 그럼 프론트는 합의해서 키값은 이거고 이렇게 내보내주면 그걸 받아서 뭘 할게! 이렇게 이어지는거

이거 쓰면 제이슨 파싱까지 해줌.

![image-20210504125935942](Javascript.assets/image-20210504125935942.png)

---

이제 여기도 좀 바꿔볼거

![image-20210504125846088](Javascript.assets/image-20210504125846088.png)

포문안에 있으니까 일단 버튼마다 아이디 새롭게 해주고? 어차피 이 if 분기 버튼은 하나만 보일거니까?

![image-20210504130202817](Javascript.assets/image-20210504130202817.png)

이걸 했으면 html 바꿨으니까 이건 새로고침 해야함.

이제 이게 스켈레톤 시나리오. 돌면서 귀 붙이고, 귀 건드리면 이벤트 일어날때 뭘 할지 정의하는것.

![image-20210504130610654](Javascript.assets/image-20210504130610654.png)



![image-20210504130707058](Javascript.assets/image-20210504130707058.png)

![image-20210504130912162](Javascript.assets/image-20210504130912162.png)

이게 훨씬 간편함 ? 이게

응답이 성공으로 왔을때만 이게 된거라서? 실제 db도 바뀌고 있음.

![image-20210504131007155](Javascript.assets/image-20210504131007155.png)

이걸 놔둬야 하는 이유는 최초 이 html에 도달했을때 좋아요 취소 할지 아닐지 그때가 중요해서!!

그 다음이야 뭐 js로 바뀌더라도!!

![image-20210504131036802](Javascript.assets/image-20210504131036802.png)

근데 저거 누르면 몇명이 이글 좋아하는지도 바뀌어야함.

이런식으로 연쇄적이게 어떤 것들을 이어주려면 진짜 일일히 다 생각해서 짜줘야함.

![image-20210504131643671](Javascript.assets/image-20210504131643671.png)

![image-20210504131718579](Javascript.assets/image-20210504131718579.png)



![image-20210504131723154](Javascript.assets/image-20210504131723154.png)



Q. 둘이 다른 계정일때? 

![image-20210504131816229](Javascript.assets/image-20210504131816229.png)

이게 보낸 시점에 카운트를 하게 됨.

![image-20210504131846800](Javascript.assets/image-20210504131846800.png)

내가 좋아요 누르기전엔 100이었는데 누르니까 막 300 이렇게 되거나 갑자기 점프도 가능.

근데 꽤나 모던한데? 아직 막 DTL 에서 axios 하고 막 innertext 바꾸고 난리가 나면서 복잡해짐.

일단 그 0명 바꾸기 위해서 또 이렇게 잡아오기 위해 이거 span 안에 id 값 주고 이런식으로.

![image-20210504132241398](Javascript.assets/image-20210504132241398.png)

응답 response 만들때 이렇게 했으니까? res.data 까지가 이 딕셔너리고?

![image-20210504132326978](Javascript.assets/image-20210504132326978.png)

![image-20210504132353050](Javascript.assets/image-20210504132353050.png)

![image-20210504132745720](Javascript.assets/image-20210504132745720.png)

근데 이건 일일히 찝어서 막 너는 누구고 넌 뭘 해야하고 뭐 이런게 다 쓰는 방식인데,

나중에 페이스북을 이런걸로 만든다고 하면 말도 안됨. 패러다임이 좀 바뀔건데,

함수형처럼 쓸거긴 한데, 선언형 프로그래밍이 도리거 a가 바뀌면 bcd는 이러이러한 모습일거야! 라고 해두는거.

위 저런 방식은 axios 로직을 쟝고에 녹이려고 억지로 한거고

최종은 그냥 catch 일경우 콘솔에 에러띄우는게 다.

![image-20210504133440445](Javascript.assets/image-20210504133440445.png)

.then은 순차적으로 진행될 때나 쓰는거고.. 요청 시간 이런거 내용이 순차적으로 순서를 보장하면서 가야할때나 .then 으로 체이닝 하는거.

근데 유의해야할게 이렇게 .then 으로 하면 콜백 지옥을 해결한게 아님!!

![image-20210504133806910](Javascript.assets/image-20210504133806910.png)

![image-20210504133823127](Javascript.assets/image-20210504133823127.png)

then 이 들어가는 콜백 지옥이 된거.

---

## JS 심화

인자에 너무 인자해서 좀 이렇게 쓸수도 있지만?

![image-20210504160315917](Javascript.assets/image-20210504160315917.png)

ES6 들어와서 생긴거긴 하지만?

![image-20210504160347277](Javascript.assets/image-20210504160347277.png)

> Rest Operator

![image-20210504160621146](Javascript.assets/image-20210504160621146.png)

> Spread Operator

거의 비슷한데?

![image-20210504161018069](Javascript.assets/image-20210504161018069.png)

![image-20210504160949568](Javascript.assets/image-20210504160949568.png)

![image-20210504161126213](Javascript.assets/image-20210504161126213.png)

파이썬도 뭐 이런거 있음.

![image-20210504161216059](Javascript.assets/image-20210504161216059.png)

---

`Js Class`

자바스크립트에서 new는 class 없이도 쓰는데 이게 좀 맘에 안들 수 있음.

그럼 이런걸 어떻게 JS로 만드냐?

![image-20210504161915853](Javascript.assets/image-20210504161915853.png)

new 라는건 클래스 없이도 있는 키워드인데?

![image-20210504162015181](Javascript.assets/image-20210504162015181.png)

그냥 car(options) 이러면 함수니까 아무것도 될리가 없지만?

![image-20210504162052366](Javascript.assets/image-20210504162052366.png)

![image-20210504162130726](Javascript.assets/image-20210504162130726.png)

무슨 변수에다 함수를 넣어놨는데 this 저게.. 이런게 됨.

![image-20210504162308449](Javascript.assets/image-20210504162308449.png)

![image-20210504162704107](Javascript.assets/image-20210504162704107.png)

그럼 이런걸 어떻게 하나? JS 에서 막 이런식으로 했는데 너무 별로라서 (공부도 하지말자)

이제 다른걸로 넘어감.

![image-20210504162917530](Javascript.assets/image-20210504162917530.png)

![image-20210504162946676](Javascript.assets/image-20210504162946676.png)

---

JS 클래스는 바로 그다음 중괄호 블럭이 옴.

그냥 클래스 문법임 constructor 할건데,  (생성자 함수) 앞에 함수  function 붙이는게 아니고,

좀 특수문법이라 이렇게 한다고 생각. 클래스 특수문법이라 앞에 function 이런거 안붙임.

this가 뭔가 self 의 영역인거 같은데? drive() 인자로 this 안넘겨도 됨. 좀 의아하지만

car.title 하면 세단 나옴

![image-20210504163329723](Javascript.assets/image-20210504163329723.png)

그럼 상속은? 상위 클래스의 constructor 함수 실행한다

굉장히 파이썬 스러워짐.

![image-20210504163528716](Javascript.assets/image-20210504163528716.png)

![image-20210504163604277](Javascript.assets/image-20210504163604277.png)

클래스 키워드지만 함수긴 함 ㅋㅋㅋ 그냥 신택틱 슈거임 이거.  그냥 사람들이 코드쓰는게 클래스 스럽게 바뀐거지 이게 내부적으로 파이썬처럼 클래스가 찍혔다는건 아님

![image-20210504163622524](Javascript.assets/image-20210504163622524.png)



그럼 this 는 객체 본인을 말하는 걸까?

`this 의 정체`

![image-20210504164228442](Javascript.assets/image-20210504164228442.png)

![image-20210504164052596](Javascript.assets/image-20210504164052596.png)

![image-20210504164113640](Javascript.assets/image-20210504164113640.png)

맨바닥 this도 윈도우, 블록 안에서도 window, function 안에서도 window

construct 함수 내부의 this 만큼은 이때만은!! 생성될 인스턴스를 가리킴.

메서드는 객체에 소속돼 있다는게 일반 함수랑 좀 다른점인데?

---

지금 뭘 하려하는거냐면

![image-20210504164533474](Javascript.assets/image-20210504164533474.png)

![image-20210504164602414](Javascript.assets/image-20210504164602414.png)

??????? 근데 이건 안됨.

![image-20210504164651680](Javascript.assets/image-20210504164651680.png)

왜냐면 이거 여기서 fullName 때 this 는 window 잡힘.

근데 this를 윈도우로 쓸일도 없음 윈도우 잡지도 않아서 생략하는 나머지..?

근데 this가 약간 에러 안나고 window가 있는거라서 아주 빡치는 상황이 많음.

객체 내에서 key -function 인 경우만 잘 가리키게 됨 this 는

---

`binding` 키워드가 등장함.

![image-20210504170054588](Javascript.assets/image-20210504170054588.png)

바인딩?  아까 가리킨다 = 바인딩된다 같은 거였음.

![image-20210504170149266](Javascript.assets/image-20210504170149266.png)

메서드는 .으로 호출 되니까?  약간 이렇게 바인드 된 느낌인데?

![image-20210504170243531](Javascript.assets/image-20210504170243531.png)

코드는 바뀐게 없는데? 여기 2번째줄에 콘솔로그 찍어보면 윈도우찍힘.

![image-20210504170414720](Javascript.assets/image-20210504170414720.png)

이거 키밸류 이름 같으면 줄여쓸수있어서 쓴거긴한데?

![image-20210504170455036](Javascript.assets/image-20210504170455036.png)

그래서 Js 에서는 execution context (실행문맥) 에 따라 this 가 바인드 되는 위치가 달라진다!

---

![image-20210504170920264](Javascript.assets/image-20210504170920264.png)

이거 [nan,nan,nan,nan] 나옴

콘솔로그 찍어보면 윈도우 네번찍힘

![image-20210504170944622](Javascript.assets/image-20210504170944622.png)

지금 파란 이부분이 문젠데? 함수인데 이게 메서드가 아님.

이렇게 하면 나옴.

![image-20210504171119020](Javascript.assets/image-20210504171119020.png)

이 함수 상위에 있는 this와 같은 this 였으면 좋겠다 라고 묶는거.

바인드 걸겠다고 따로 써줬어야 했음.

![image-20210504171156443](Javascript.assets/image-20210504171156443.png)

이거 콜백 콜백 하다보면 무슨 this에 붙이는건지 사람들이 헷갈리기 시작함.

그래서 arrow function 생김

![image-20210504171420167](Javascript.assets/image-20210504171420167.png)

.bind를 안써도 ! 이렇게 하면 됨.

![image-20210504171449357](Javascript.assets/image-20210504171449357.png)

저 인자로수의 함수가 되게 지저분한데..?

에로 펑션 안의 this 가 왼쪽의 this 와 바인드가 되게 됨.

![image-20210504171538575](Javascript.assets/image-20210504171538575.png)

메서드면 this 가 객체고, 아니면 this 가 윈도우다. construct 는 예외인것

---

`res` 이녀석 어디서 왔나. 그냥 채워진다고 했는데?

이 예제에서 들어갈 데가 없는데 ??????? make101(x=1) 이건 안됨. 인자 안받을 거라서.

![image-20210504173207844](Javascript.assets/image-20210504173207844.png)

![image-20210504173317164](Javascript.assets/image-20210504173317164.png)

뭐 어쨌든 같은 코드인데? 

arrow function 은 this 없으면 막 갖다 써도 됨.

파이썬이랑 자바스크립트는 (다른 언어는 아닐 수 있지만) 객체가 다 일급 객체여가지고 좀 헷갈릴 수 있음. 함수 = 1급 객체임. 할당가능, 리턴가능, 인자로 넘길수있었고

`map` 직접 만들어 본다면?

첫번째는 배열, 두번째 인자는 함수가 들어올거임 (콜백)

![image-20210504174321986](Javascript.assets/image-20210504174321986.png)

파이썬은 int 뭐이런게 앞에있어서 이렇게 써도 됨 헷갈리면

![image-20210504174403838](Javascript.assets/image-20210504174403838.png)

![image-20210504174435843](Javascript.assets/image-20210504174435843.png)

셋다 같은 코드

![image-20210504174558442](Javascript.assets/image-20210504174558442.png)

그러니까 main 질문은? num 그럼 왜 쓰는거며 어떻게 채워지나?

원본 함수 정의 할때, cb 가 뭐가 올진 모르겠지만, 실행 할거면서 각각 요소 elem 넣을건데? 

cb가 뭔지 모르니까 이거 할때는? 근데 모르는걸 실행을 함. 그냥 믿는거임 cb가 함수일 것이다 하고.

![image-20210504174859451](Javascript.assets/image-20210504174859451.png)

게다가 그 함수를 인자 하나를 박고 실행할거야! 하고 정의해둔거.

근데 callback 함수 정의되지도 않은 시점에서 인자 몇개가 될지도 모르는데 인자 1개 받을거라고 이미 정해버린거.

그래서 아래에서는 이미 plusOne 이런거 정의할때 num 하나 넣을수밖에 없음

![image-20210504174955173](Javascript.assets/image-20210504174955173.png)

path 이런 느낌이었겠다고 생각해 볼 수 있음.

![image-20210504175347321](Javascript.assets/image-20210504175347321.png)

`filter` 구현해보자

![image-20210504175704839](Javascript.assets/image-20210504175704839.png)

![image-20210506091659767](Javascript.assets/image-20210506091659767.png)

---

`promise`

콜백과 프로미스의 차이 ?

json placeholder 라고 치면 대충 제이슨가지고 놀때 더미 데이터 주는데가 있음.

axios 같은건데 fetch 라는게 있음.

셋 타임아웃은 리턴값이 이상함. 숫자 의미는 신경 ㄴㄴ

![image-20210504172302548](Javascript.assets/image-20210504172302548.png)

이게 막 null 나오는 이유는 ? 호다닥 넘어가서 먼저 출력했기 때문.

![image-20210504172607947](Javascript.assets/image-20210504172607947.png)

![image-20210504172548097](Javascript.assets/image-20210504172548097.png)

> 위의 1 2 번은 정확히 같은거고 호이스팅 일어남 아래 만들어 두더라도 캐치해가지고 올려줌.

아래 두개는 this 빼곤 확실한데, 선언 시기에 따라 잡아 올려주고 이런거 없음.

![image-20210506091019510](Javascript.assets/image-20210506091019510.png)

![image-20210506090934051](Javascript.assets/image-20210506090934051.png)

---

아무튼 프로미스는? 실행해보면 프로미스는 인자 없다고 에러 뜨는데? 근데 js는 에러 안난다며? 사실 내부적으로 트라이 캐치를 하고 있었던거.

![image-20210504172639254](Javascript.assets/image-20210504172639254.png)



---

## VUE.js 서론

![image-20210506101527800](Javascript.assets/image-20210506101527800.png)

![image-20210506101834857](Javascript.assets/image-20210506101834857.png)

CSR = Client Side Rendering / SSR = Server Side Rendering == HTML 만드는 주체가 누구냐?

쟝고 DTL이 포문 돌면서 태그들 만들어주면 이런게 SSR이고, 스크립트 넘겨서 클라이언트 브라우저가 
HTML 완성하게 된다면? 이게 CSR

`CSR != SPA` !! 

CSR 은 그냥 누가 HTML 만드냐를 말하는거.

![image-20210506103851433](Javascript.assets/image-20210506103851433.png)

![image-20210506103938637](Javascript.assets/image-20210506103938637.png)

![image-20210506104008638](Javascript.assets/image-20210506104008638.png)

서버응답 => 브라우저가 JS를 다운받는것! => 브라우저가 JS 실행 !

![image-20210506104039734](Javascript.assets/image-20210506104039734.png)

왜 트래픽이 감소할까? HTML 양이 줄었으니까

Search Engine Optimization? = 

구글에 네이버 치면 아래 막 쓸데없는거 뜨는데?

![image-20210506104210330](Javascript.assets/image-20210506104210330.png)

사람은 이런게 밖에 있었으면 좋을텐데 라고 생각?

![image-20210506104325321](Javascript.assets/image-20210506104325321.png)

스파이더 봇(?) 이 검색하면 막 html 마크업 돌면서 밖에 뭘 꺼내옴

front end 개발자는 우리 페이지가 검색엔진 상단에 나오려고 하면 이 구글 가이드를 따라야함.

`SEO` 검색

![image-20210506104441555](Javascript.assets/image-20210506104441555.png)

다나와는 심지어 검색창도 딸려나옴

![image-20210506104517788](Javascript.assets/image-20210506104517788.png)

robots.txt 가 돌아댕김. 보통 사람들은 url로 바로 오는게 아니라 검색해서 오니까? 

근데 로봇이 JS를 읽어서 분석해주진 않고 마크업을 보는데?  CSR 은 구글 포털 크롤러가 도착했을때 막 html 별로 없고 스크립트만 졸라 많으면 ? 그래서 문제가 생기는거.

또 이걸 해결할 수 있는 방법이 있다는것만 알고있자.

![image-20210506104741918](Javascript.assets/image-20210506104741918.png)

![image-20210506104747623](Javascript.assets/image-20210506104747623.png)

이미 SSR은 브라우저에서 받으면 완성 되는 시점이 빠름.

![image-20210506104809332](Javascript.assets/image-20210506104809332.png)

---

패러다임의 변화 -> 데이터가 반응한다!

데이터가 잡는다!! 데이터에 DOM이 반응 -> 그래서 reactive (선언형)

![image-20210506105253473](Javascript.assets/image-20210506105253473.png)

기존은 요소를 잡고 이걸 데이터를 바꾼다! 이렇게

![image-20210506105304050](Javascript.assets/image-20210506105304050.png)

![image-20210506105344444](Javascript.assets/image-20210506105344444.png)

DOM = `화면` 이라고 읽자. 

![image-20210506111310427](Javascript.assets/image-20210506111310427.png)

모델 뷰 뷰모델

여기 view는 쟝고의 view가 아니라 원래 그 MVC에서의 뷰임. 

원래 M 은 (모델은) 데이터베이스였는데? 지금 서버쪽도 아닌데 M 그럼 뭐냐? 걍 데이터라고 생각

![image-20210506111421169](Javascript.assets/image-20210506111421169.png)

여기서의 우리가 할일은 저 파란 박스 영역임. 결국 뷰모델 로직 작성이 전부고?

저 모델 저건 쟝고서버라면 DB 겠지만 그냥 JS object 심플하게 그냥 이거임. 그냥 딕셔너리 하나 있는거!

![image-20210506111457664](Javascript.assets/image-20210506111457664.png)

초록박스 코드 열심히 짜면 연결이 잘 됨  걍

![image-20210506111615228](Javascript.assets/image-20210506111615228.png)

![image-20210506111621782](Javascript.assets/image-20210506111621782.png)

![image-20210506111627876](Javascript.assets/image-20210506111627876.png)

![image-20210506111656853](Javascript.assets/image-20210506111656853.png)

여기서 데이터 로직이라는게 `뷰모델` 

---

## Vue.js

![image-20210506112230555](Javascript.assets/image-20210506112230555.png)

일단 우리는 개발 버전으로 갈거! 상용 버전은 에러메시지가 안나옴.

vue 는 2점대 버전으로 쓸건데, 사실 엄청 다름 3이랑은 그래도 레거시는 다 2로 이루어져 있어서 일단 이걸로.

아까 익스텐션 깐게 뭐냐면 저기까지만 script cdn 가져오고 개발자 탭 가보면 vue 가 생김!!

![image-20210506112341651](Javascript.assets/image-20210506112341651.png)

일단 디비젼 하나 만들어두고? vm 뭐 이렇게 써도 상관없고 뷰모델이라고

![image-20210506112555936](Javascript.assets/image-20210506112555936.png)

![image-20210506112647200](Javascript.assets/image-20210506112647200.png)

![image-20210506112656210](Javascript.assets/image-20210506112656210.png)

이거 새로고침 재빨리 하다보면 {{ message }} 살짝 보임 ㅋㅋㅋㅋ 이게 CSR

>  뷰모델은 뷰의 인스턴스다!!
>
> 모델은 오브젝트다!!

![image-20210506112812466](Javascript.assets/image-20210506112812466.png)

리액티브 한지 봅시다

![image-20210506112906839](Javascript.assets/image-20210506112906839.png)

![image-20210506112918269](Javascript.assets/image-20210506112918269.png)

밖에 쓰면 동작 안함. 뷰모델이 동작하는건 대상 element 

![image-20210506113048628](Javascript.assets/image-20210506113048628.png)

이거 근데 const vm 에 안닿아도 뭐 동작은 하는데? 설정을 해두면 접근 자유도가 올라감.

![image-20210506130643445](Javascript.assets/image-20210506130643445.png)

![image-20210506130730588](Javascript.assets/image-20210506130730588.png)

---

`뷰 특수문자`  = 쟝고 {{}} 이거 DTL 이랑 아무 상관이 없음. 

![image-20210506130848210](Javascript.assets/image-20210506130848210.png)

el 만 스트링이고.. 저런 키값들 꼭 이름을 맞춰줘야함. Vue 가 저 이름들을 읽는 거니까. 어쨌든 이런 키값들 보다 더 보긴 할건데? 요기 부분을 잘 만지는게 중요

![image-20210506130951435](Javascript.assets/image-20210506130951435.png)

obj는 여러가지 속성들.

스펠링 틀리면  콘솔 에러나고

![image-20210506131505191](Javascript.assets/image-20210506131505191.png)

Vue 탭도 같이 봐야하는데? 여긴 모니터링 하는것.

`v- 붙은애들은 그냥 스트링 따리가 아님. ` 

![image-20210506131650652](Javascript.assets/image-20210506131650652.png)

원래 v- ~ 이렇게 시작하는게 맞는데, directive 중에 좀 쉽게 쓰려고 {{ message }} 좀 쉽게 쓸수있게 만들어둔거

이걸 {{ data.message }} 이러면 안됨. 왠지 그럴거같지만?

![image-20210506132258181](Javascript.assets/image-20210506132258181.png)

엄청 에러많이 볼건데? 메시지라는 속성(키가)을 읽을 수 없습니다 undefined 로부터!
그러니까 이게 우리는 저런식으로 obj 넘기지만 안에서 뭔가 해체분석해서 한뎁스 밖으로 message  알아서 꺼내올 거라서 괜찮음.

그나저나 이것의 공식 명칭은? 

![image-20210506131834493](Javascript.assets/image-20210506131834493.png)

약간 이런 느낌. 

![image-20210506131910092](Javascript.assets/image-20210506131910092.png)

>  뷰 오브젝트 만들땐 쉼표가 엄청중요함

![image-20210506131958579](Javascript.assets/image-20210506131958579.png)

태그라는거 적고 이렇게 한다면?

마치 innerHTML 같은거

![image-20210506132122281](Javascript.assets/image-20210506132122281.png)

![image-20210506132853593](Javascript.assets/image-20210506132853593.png)

이건 그냥 innerHTML 이 취약한거.

---

### directives

`그럼 directives` 더 보자

**![image-20210506132929798](Javascript.assets/image-20210506132929798.png)**

이미지 완성되기 전까지는 기본적으로 style display none 하다가 채워지면 보이게 뭐 이렇게.

![image-20210506133116005](Javascript.assets/image-20210506133116005.png)

근데 만약 이렇게 하면???

![image-20210506133249719](Javascript.assets/image-20210506133249719.png)

![image-20210506133301717](Javascript.assets/image-20210506133301717.png)

그러면 어떻게 될까? 안나오는데?

![image-20210506133323277](Javascript.assets/image-20210506133323277.png)

뷰탭에서 바꿔보면 나옴

![image-20210506133334575](Javascript.assets/image-20210506133334575.png)

그냥 여기다가 해주면 true 바꿔주면 리액티브하게 바뀜.

기존 패러다임이랑 바뀐건 뭐냐면?

기존엔 버튼달고 이벤트리스너 달고 눌렀을때 그 속성값을 바꿔라~ 였는데?

![image-20210506133427677](Javascript.assets/image-20210506133427677.png)

이제는 이벤트리스너에 클릭시 isVisible:true 라고 해라! 라고 하면 이제는 저게 reactive 하게 바뀐다!!

그러니까 막 asdf 이렇게 쓰면 안됨. 

![image-20210506133554665](Javascript.assets/image-20210506133554665.png)

만약 이 디비전 밖에서 이렇게 쓰는건 괜찮음.  어차피 뷰 인스턴스가 모르니까 대충 띄워줌.

![image-20210506133614116](Javascript.assets/image-20210506133614116.png)

![image-20210506133630080](Javascript.assets/image-20210506133630080.png)

근데 division id app 안에서는??? 

디비전이 뷰 인스턴스가 `mount` 되어있기 때문에? => 디비전 안에서의 asdf는 에러나는거.

![image-20210506133653470](Javascript.assets/image-20210506133653470.png)

> v-if / else if / else ==> 조건식

![image-20210506133753770](Javascript.assets/image-20210506133753770.png)

![image-20210506134026192](Javascript.assets/image-20210506134026192.png)

![image-20210506134031044](Javascript.assets/image-20210506134031044.png)

실제로 이건 DTL처럼 어떤 평가태그 안에 따로 HTML 태그를 넣는게 아니라, 거의 합쳐버린건데?  if문 안걸린 애들은 아예 렌더링도 안됨. 넘어가지도 않음.

그럼 뭐 여기도 v-if 로 할수있었던거 아냐?

![image-20210506134203166](Javascript.assets/image-20210506134203166.png)



`v-for`

![image-20210506134224206](Javascript.assets/image-20210506134224206.png)

todos 라고 넣고 이제 뒤에 스트링이 아니고 배열 넣을건데, 배열 안의 요소는 딕셔너리로 해볼거

![image-20210506134332475](Javascript.assets/image-20210506134332475.png)

근데 v-for 만 `유.일.하.게` JS가 아닌 문법이 들어갈 수 있음.

파이썬 마냥 todo in todos 가능

![image-20210506134456622](Javascript.assets/image-20210506134456622.png)

`포가 붙은 애가 반복됨` 그러니까 이경우엔 div 요소 전체가 반복됨.

![image-20210506134625333](Javascript.assets/image-20210506134625333.png)

---

`V-bind`

이렇게 하고

![image-20210506134950428](Javascript.assets/image-20210506134950428.png)

v-for 같은 것들은 뷰 전용 속성이고, src는 원래 있는 네이티브 속성인데?

어떻게 링크하냐? 이렇게 써버리면 안먹을거임 됐으면 좋겠지만

![image-20210506135033526](Javascript.assets/image-20210506135033526.png)

그래서 뷰랑 연결고리를 만들어야 하는데?

![image-20210506135132497](Javascript.assets/image-20210506135132497.png)

src 속성은 V단이 연결 하겠다! 이런거.

이미지 디스크립션 넣어주고

![image-20210506135240189](Javascript.assets/image-20210506135240189.png)

이걸 alt에 넣고싶다?

![image-20210506135331382](Javascript.assets/image-20210506135331382.png)

만약 이렇게 하면 어떻게 바꿔야 할까?

![image-20210506135425309](Javascript.assets/image-20210506135425309.png)

![image-20210506135509941](Javascript.assets/image-20210506135509941.png)

---

### vm attribute

el, data 이런건데? (el 은 아이디가 app 인거랑 마운트 하겠구나~) 

![image-20210506141433239](Javascript.assets/image-20210506141433239.png)

이런거 함수정의 할수있었는데? 

arrow func 는 this 있느냐만 보라 그랬는데? 이제 여기선 this 등장함.

obj 내부에서 메서드 여기서 화살표 함수 안쓸거임!!

일단 이렇게 할거. 지금까지는 명사만 늘어틀여 놨는데, 이제 처음으로 동사가 등장한것. 이거 지금 alt b 로 연다음?

![image-20210506141624980](Javascript.assets/image-20210506141624980.png)

근데 이거 보니까 여기 없는데 메서드?

![image-20210506141713794](Javascript.assets/image-20210506141713794.png)

`뷰탭에서 메서드는 안보이는게 맞음!!!`

그냥 뷰에서 이렇게 해둬서 달러사인 쓰는게 아니라는 점 알아두자.

![image-20210506141752510](Javascript.assets/image-20210506141752510.png)

만약 이렇게 쓴다면 어떻게 될까? HTML 바꿨으니까 새로고침 하고

![image-20210506141840248](Javascript.assets/image-20210506141840248.png)

![image-20210506141926131](Javascript.assets/image-20210506141926131.png)

객체 안에 저장된 함수일땐 this 객체를 가리킨다 했는데, 여기서 this는 methods를 가리킴. 

![image-20210506142101678](Javascript.assets/image-20210506142101678.png)

근데 this.message 로 하려면 this가 methods 라고 했는데 methods 안에 지금 message 없잖아? message 는 data 안에 있는데???

어떻게 한단계 위로 올라갔다가 밑에까지 다시 왔을까?

뷰가 obj 인자로 받을때, 전부다 해체분석해서 뭔가 다르게 만드는데?

`여기서 헷갈리면 안되는게 6번줄 obj는 우리가 넘기기 전에 정의한거고`

`환경이 바뀌었다!!`

우리가 정의시점의 this 는 예전 배웠던대로 methods를 가리켜도, 

뭔가 이걸 Vue(obj)로 가서는 환경이 바뀌어버렸기 때문에 그때의 this는 저 vm 자체를 가리키게 됨. 그러니까 해체분석이 된 시점에서는 this가 vm을 가리키고 있기 때문에?

![image-20210506142329443](Javascript.assets/image-20210506142329443.png)

this.message가 되는것. 그러니까 data 안에 message 까지 건드려가지고 그걸 끌고 그 값을 바꾼것.

`주의` this.data.message 아님!!

그래서 최종적으로는 이런 느낌.

![image-20210506142541704](Javascript.assets/image-20210506142541704.png)

자 이제 버튼 누르면 바뀌게 하고싶은데,

옛날 기준으로는, btn 하나 쿼리셀렉터로 찝어오고, 여기 귀 달고, 인자에 'click'달고 콜백함수 달고 막 그랬는데??

버튼에 귀다는거 까지는 맞는데, v-on 을 쓸거

![image-20210506134726870](Javascript.assets/image-20210506134726870.png)

![image-20210506142753501](Javascript.assets/image-20210506142753501.png)

근데 이거  this.message 가 아닌것처럼? (그냥 뷰가 렌더링 로직이 그렇게 짜여 있음)

this.changeMessage 가 아님!!!!

---

`디렉티브 영역에서는 this 아예안나오고?`

`attribute 영역에서는 this가 등장함`

---

arrow func 하면 this가 윈도우가 뜨는데...?

![image-20210506143200837](Javascript.assets/image-20210506143200837.png)

![image-20210506143207582](Javascript.assets/image-20210506143207582.png)

arrow func 하면 this가 상위 컨텍스트에 바인딩 되는데? 

함수가 메서드가 아니면 윈도우로 가버리는데? 원래 this는

arrow func 는 메서드가 아니지만 너보다 한단계 위는 메서드니?  

아까 this가 vm 인데 arrow func(한스텝위) 가 되는순간 vm 상위에 바인드 되는데, 그 위는 윈도우임. 그래서 this가 이제는 윈도우 잡는거.

![image-20210506143420970](Javascript.assets/image-20210506143420970.png)

어쨌든 메서드 정의할때는 arrow func 쓰지 않는다!!

`obj가 Vue 인스턴스의 재료 되면 obj의 methods내의 this는 그 인스턴스를 가리킨다`

data 안에서 this 쓰면 안됨. 어차피 이거 Nan 나옴

![image-20210506144012825](Javascript.assets/image-20210506144012825.png)

함수에서 this 쓰는거.

![image-20210506144359791](Javascript.assets/image-20210506144359791.png)

![image-20210506144437783](Javascript.assets/image-20210506144437783.png)

![image-20210506144515248](Javascript.assets/image-20210506144515248.png)

![image-20210506144553323](Javascript.assets/image-20210506144553323.png)

![image-20210506144601066](Javascript.assets/image-20210506144601066.png)

포커스에서 벗어나면 체인지 받아 들임.

![image-20210506144742755](Javascript.assets/image-20210506144742755.png)

![image-20210506144921089](Javascript.assets/image-20210506144921089.png)

![image-20210506150509682](Javascript.assets/image-20210506150509682.png)

이벤트 리스너같아서 (귀다는거 같아서) 실제로 이렇게 숏컷으로 쓸수도있음!!

![image-20210506150612218](Javascript.assets/image-20210506150612218.png)

---

최종 v-on 들

![image-20210506150702128](Javascript.assets/image-20210506150702128.png)

---

`v-model`?

input 층위에서 이야기하는거. input 에서만 쓰는거!!

일단 이렇게 보자.

![image-20210506150858421](Javascript.assets/image-20210506150858421.png)

![image-20210506150937515](Javascript.assets/image-20210506150937515.png)

아까 v-on 은 조금더 수작업이 들어감.

이런 연관검색어는 어떻게 나오게 되나?

![image-20210506151138036](Javascript.assets/image-20210506151138036.png)

무슨 작업이 내부적으로 일어났을까?

브라우저가 인공지능을 들고있는건 아닌거 같고,

인풋 넣을때마다 구글 서버에 요청 넣고있는거임

콘솔 세팅 가서 log xhr 하면?

![image-20210506151401207](Javascript.assets/image-20210506151401207.png)

![image-20210506151433716](Javascript.assets/image-20210506151433716.png)

막 쓰는거 이상으로 데이터 가져감.

![image-20210506151516312](Javascript.assets/image-20210506151516312.png)

그래서 input changeName 이건 좀더 손이 가는만큼 이 함수 닿았을때 axios도 쓸수있고 그런 장점이 있는데,

아예 찐으로 동기화해버리는 v-model의 경우 이런 커스텀은 불가능함.

![image-20210506151656335](Javascript.assets/image-20210506151656335.png)

근데 좀 착각하면 안되는데 막 인풋에 뭐 넣어서 바꾼다고 해서 obj 저 값들이 바뀌는게 아니라 element가 바뀌게 보이는거임.

----

`computed `= 메서즈랑 좀 헷갈릴 소지가 있음.

일단 위는 이렇게 바꾸고

![image-20210506152133499](Javascript.assets/image-20210506152133499.png)

아래는

![image-20210506152332100](Javascript.assets/image-20210506152332100.png)

엄청 단순하게는 합치고 싶으면

![image-20210506152250763](Javascript.assets/image-20210506152250763.png)

뭔가 함수랑 체이닝 해야 좀 복잡하게 다룰 수 있는데?

이렇게도 할 수 있는데?

![image-20210506152455252](Javascript.assets/image-20210506152455252.png)

![image-20210506152449760](Javascript.assets/image-20210506152449760.png)

---

그냥 좀 자동 연산이 됐음 좋겠음.

안타깝게 이게 안되긴 함. 

![image-20210506152533606](Javascript.assets/image-20210506152533606.png)

여기서 computed가 등장함 여기 안에 함수 쓸건데, 스펠링 틀리면 안됨 getFullname 해줘야함

![image-20210506152639465](Javascript.assets/image-20210506152639465.png)

![image-20210506152652721](Javascript.assets/image-20210506152652721.png)

근데 이거 한글 유니코드 특성때문에 한글은 안뜰수도 있음.

![image-20210506152747725](Javascript.assets/image-20210506152747725.png)

> 그래서 메서드 컴퓨티드 둘중 어느걸 쓰냐, 장점은 뭐냐가 궁금한데?

애초에 computed 에는 무조건 리턴이 있어야 함.

methods 는 보통 모든 동작이긴 한데 데이터 세팅에 씀.

computed 는 데이터 getting만 하는게 아니라 좀 가공된걸 가져옴.

데이터를 좀 만져서 가져오는걸 하고싶으면 computed 에 적어야함.

---

파이썬에서도 보면 뭐 이런게 가능하긴 한데?

![image-20210506153358171](Javascript.assets/image-20210506153358171.png)

굳이 함수로 저거 해야해? 속성값인것처럼 동작 해줬으면 좋겠는데?

![image-20210506153413618](Javascript.assets/image-20210506153413618.png)

@property!

![image-20210506153552935](Javascript.assets/image-20210506153552935.png)

![image-20210506153606219](Javascript.assets/image-20210506153606219.png)

그래서 computed도.. 명사형으로 써줄거!!!!!!!!!!!!! computed 된 뭔가! 니까.

![image-20210506153852326](Javascript.assets/image-20210506153852326.png)

![image-20210506153928701](Javascript.assets/image-20210506153928701.png)

뷰탭에서 메서드는 안나오는데, computed 는 나옴!! 그러니까 깔끔한게 훨씬 좋음.

![image-20210506153909696](Javascript.assets/image-20210506153909696.png)

이 computed 내부 함수들은, this. ~ 이부분이 바꾸면 계산 알아서 끝내버림. 

로직만 함수지 그냥 이건 값이라고 생각.

이런 갖고 오는게 목적인 함수들을 ` getter `라고 함

함수정의 vs computed 한번 생각해보면 이게 뭔 차이냐면 캐싱에서 이득이 있다고 하는데?

![image-20210506154410969](Javascript.assets/image-20210506154410969.png)

![image-20210506154439081](Javascript.assets/image-20210506154439081.png)

대체 뭘 캐싱했다는 걸까?  아래가 훨씬 빠름.

![image-20210506154530012](Javascript.assets/image-20210506154530012.png)

함수는 무조건 그때끄때 실행되고, fullName 은 변경이 없다면!! 그냥 캐싱된거 가져옴. 메모리는 손해긴 함 어디서 메모리에 저장은 해둬야 하니까. 근데 연산량에서 엄청나게 이득을 봄.

![image-20210506154923577](Javascript.assets/image-20210506154923577.png)

아래는 this가 바뀐적이 없어서..

소속 this가 바뀔때마다 연산 한다고 생각 computed 는

![image-20210506155016065](Javascript.assets/image-20210506155016065.png)

---

### 고양이 실습

결국 MTV 에서 모델링이 제일 고민이었는데, 뷰에서도 로직이 같음. 애초에 제일 먼저 data 부분을 어떻게 정리해둬야할지가 고민 1번임

버튼 누르면 고양이 사진 나와야하는데, 그럼 반응을 해줘야 하는 데이터는 뭐가 있을까??

`사진`  일 테니까 일단 imgUrl 둘거!!

![image-20210506160841525](Javascript.assets/image-20210506160841525.png)

그러면 여기서, 속성값을 묶어 줘야함.

![image-20210506160859255](Javascript.assets/image-20210506160859255.png)

일단 바인딩 하고

![image-20210506161002452](Javascript.assets/image-20210506161002452.png)

버튼도 이거 v-on:click 으로 어쨌든 귀 달아줘야함

![image-20210506161024014](Javascript.assets/image-20210506161024014.png)

add eventlistener -> click -> callback 함수 인데 줄여서

![image-20210506161041647](Javascript.assets/image-20210506161041647.png)

근데 v-bind 도 진짜 엄청나게 자주 쓸건데? 숏컷이 있음

얜 걍 지우기만 하면 됨. 콜론만 쓰면 v-bind 의 약자가 됨!!

![image-20210506161101311](Javascript.assets/image-20210506161101311.png)

아무튼 그럼 함수는 methods 에 정의함

앞에 근데 get 붙이면 내가 이미 가지고 있는걸 리턴한다는 뉘앙스가 있어서?

fetch 쓰면 외부에서 가지고 오는거 !!

![image-20210506161404277](Javascript.assets/image-20210506161404277.png)

![image-20210506161429870](Javascript.assets/image-20210506161429870.png)

뭐 이렇게 제대로 바인딩 된건지 확인 해가면서 해야함

뭔가 대충 이렇게 해보고 res.data 찍어보니까 얘넨 array를 준다는걸 ㅏㅇㄹ수있음.

![image-20210506163149549](Javascript.assets/image-20210506163149549.png)

안에 까보면 또 url 있음

![image-20210506163221696](Javascript.assets/image-20210506163221696.png)

여기를 아주 대표적으로 this 써야함. fetch 함수안의 콜백 함수 안에 this 써야 원하는대로 동작함.

![image-20210506163319758](Javascript.assets/image-20210506163319758.png)

아니면 이렇게써야함.

![image-20210506163401501](Javascript.assets/image-20210506163401501.png)

원래는 찐함수식에서는 return 있어야 했고..

![image-20210506163502782](Javascript.assets/image-20210506163502782.png)

근데 엑박 뜨는 그런거 있으니까?

![image-20210506163647749](Javascript.assets/image-20210506163647749.png)

v-show 이런거로 리팩토링 가능 이렇게 해도되고

![image-20210506163705782](Javascript.assets/image-20210506163705782.png)

![image-20210506163716223](Javascript.assets/image-20210506163716223.png)

![image-20210506164027951](Javascript.assets/image-20210506164027951.png)

이게 근데 모델링이라고 불리는 이유는, 이게 나중에 막 methods 이런거 추가를 하는게 아님.

---

### WS5

파이썬은 import random 하면 됐는데? JS는 외부에서 막 가져와야함. JS는 난수발생은 할 수 있는데 직접 짜는건 힘들고, random 이런거 하고 싶으면 딴데서 가져와야함.

그래서 이런거 연산 시키는거 js 에서 별로인데.. uderscore라는게 있고 Lodash 가 있음. 근데 Lodash 가 훨씬 상위호환 임. (lowdash랑 헷갈리지 말자 대충 이거긴 한데) CDN 가져와서 쓰자.

![image-20210506165134082](Javascript.assets/image-20210506165134082.png)

그리고 틀 정비

![image-20210506165155685](Javascript.assets/image-20210506165155685.png)

![image-20210506165328277](Javascript.assets/image-20210506165328277.png)

그렇다면 이렇게 해도 되고?

![image-20210506165557987](Javascript.assets/image-20210506165557987.png)

computed 로는 못하나? 안됨

이러면 새로고침 할때만 바뀌게 됨.

![image-20210506165729479](Javascript.assets/image-20210506165729479.png)

lunchMenus가 킨 이후 고정값이 돼버려서? 바뀌면 랜덤하게 뽑겠지만 바뀌는 코드가 없어서.

이거도 가능?

![image-20210506170232210](Javascript.assets/image-20210506170232210.png)

로또 해볼거

![image-20210506170625445](Javascript.assets/image-20210506170625445.png)

이거 소팅도 됨.

![image-20210506170714955](Javascript.assets/image-20210506170714955.png)

js 는 원본도 바뀌고 이거 리턴값도 있음. 그래서 이런 표기가 가능한거 리턴이 있으니까.

![image-20210506170752920](Javascript.assets/image-20210506170752920.png)

다만, 이게 문자열 소팅이어서 1 2 2 4 7 9 기준으로 소팅된거..

![image-20210506170901671](Javascript.assets/image-20210506170901671.png)

이게 숫자소팅

![image-20210506170943272](Javascript.assets/image-20210506170943272.png)

초창기 없을때 안나오게  {{ menu }}

![image-20210506171636860](Javascript.assets/image-20210506171636860.png)

js 는 또 빈배열 true라고 인식해서 난리남.

![image-20210506171938571](Javascript.assets/image-20210506171938571.png)

이렇게 해야 안나옴.

![image-20210506171958058](Javascript.assets/image-20210506171958058.png)

![image-20210506172025426](Javascript.assets/image-20210506172025426.png)

---

크롬은 그냥 event 가 인자로 안넘겨와도 지원해준거. 이거 왜잡지 문제였음. 걍 운이 좋아서 잡혔었다.

![image-20210506172344510](Javascript.assets/image-20210506172344510.png)

![image-20210506172411939](Javascript.assets/image-20210506172411939.png)

![image-20210506202629211](Javascript.assets/image-20210506202629211.png)

























---

## 프로젝트

> Query 개선

prep =  seed 너무 랜덤하게 들가고, Faker로 할거

![image-20210507093147087](Javascript.assets/image-20210507093147087.png)

![image-20210507093223386](Javascript.assets/image-20210507093223386.png)

쟝고 debug tool bar 설치해볼거

![image-20210507093301668](Javascript.assets/image-20210507093301668.png)

![image-20210507093314655](Javascript.assets/image-20210507093314655.png)

순서상 이 아래 넣어라 라고 함. import 하고 하라는게 많음.

![image-20210507093348985](Javascript.assets/image-20210507093348985.png)

![image-20210507093421195](Javascript.assets/image-20210507093421195.png)

![image-20210507093439929](Javascript.assets/image-20210507093439929.png)

끝나면 디버그 툴바 생기고 SQL 확인해볼거

![image-20210507093519334](Javascript.assets/image-20210507093519334.png)

반복되는 이런거 생김.

![image-20210507093608699](Javascript.assets/image-20210507093608699.png)

length 보다 count가 좀더 효율적이긴 한데

![image-20210507093826813](Javascript.assets/image-20210507093826813.png)

1 + N 쿼리 문제 라고 함. 

![image-20210507093850691](Javascript.assets/image-20210507093850691.png)

리뷰마다 전부 댓글!? 

![image-20210507093907938](Javascript.assets/image-20210507093907938.png)

annotate 활용하면 됨. 지금 테이블 2개인데?

리뷰쪽에 가상콜롬 만들면 저쪽 comment 콜럼 또 안뒤져도 됨.

![image-20210507094005171](Javascript.assets/image-20210507094005171.png)

일단 이거 가져오고

![image-20210507094042978](Javascript.assets/image-20210507094042978.png)

이렇게 31번 리뷰스로 바꾸면?

![image-20210507094106451](Javascript.assets/image-20210507094106451.png)

![image-20210507094132518](Javascript.assets/image-20210507094132518.png)

![image-20210507094146790](Javascript.assets/image-20210507094146790.png)

엄청 좋아짐. Count() 여기 안엔 31번줄에, 그냥 모델 넣으면 됨.

같은 논리로 만약 유저 출력하면, 글마다 유저 테이블 가서 뒤져야함

![image-20210507094242377](Javascript.assets/image-20210507094242377.png)

SQL join 할거! 죠인 개념??

만약 분리돼있는 테이블 두개를 죠인하면 묶어주는 기준이 뭐냐면 포린키 설정 돼있는걸 기준으로 모아줌

![image-20210507094547761](Javascript.assets/image-20210507094547761.png)

쿼리 개선 가능

![image-20210507094634857](Javascript.assets/image-20210507094634857.png)

연결돼있다 == 관계 설정이 되어있다 == 관계설정이 되어있는 데이터베이스 끼리만 연결이 가능함.



![image-20210507094853048](Javascript.assets/image-20210507094853048.png)

리뷰가 유저를 참조하면 이건 정참조고

![image-20210507094921252](Javascript.assets/image-20210507094921252.png)

이렇게 넣어주면 유저 테이블과 inner join 가능

![image-20210507094952293](Javascript.assets/image-20210507094952293.png)

나아짐!

![image-20210507095006834](Javascript.assets/image-20210507095006834.png)

이것도 한번 해볼건데, 비효율적인거 개선. 근데 아까랑 다른점은 이건 역참조라가지고 아까 select_related로 못함

![image-20210507095326188](Javascript.assets/image-20210507095326188.png)

![image-20210507095408875](Javascript.assets/image-20210507095408875.png)

prefetch related  ㄱㄱ

![image-20210507095533616](Javascript.assets/image-20210507095533616.png)

![image-20210507095549529](Javascript.assets/image-20210507095549529.png)

Select => SQL 환경 안에서 inner join

prefetch =>  파이썬 내부 join 씀

테이블 하나를 합치는거라서

이거보면 prefetch 는 이너죠인 없음

![image-20210507095727240](Javascript.assets/image-20210507095727240.png)

---

이게 이런 상황도 있음. 중복너무심한거

![image-20210507095834163](Javascript.assets/image-20210507095834163.png)

코드는 이건데

![image-20210507095810612](Javascript.assets/image-20210507095810612.png)

![image-20210507095820311](Javascript.assets/image-20210507095820311.png)

보면 엄청나게 쿼리 많이날림.

![image-20210507095936434](Javascript.assets/image-20210507095936434.png)

두개 이어주면 됨.

![image-20210507100011368](Javascript.assets/image-20210507100011368.png)

![image-20210507100025068](Javascript.assets/image-20210507100025068.png)

---

## Infinite scroll(Vanilla Js)

![image-20210507102336902](Javascript.assets/image-20210507102336902.png)

우선 prep

![image-20210507102531534](Javascript.assets/image-20210507102531534.png)

![image-20210507102626136](Javascript.assets/image-20210507102626136.png)

2페이지 가고싶다 라고 하면? 가줌.

![image-20210507102651080](Javascript.assets/image-20210507102651080.png)

![image-20210507102748364](Javascript.assets/image-20210507102748364.png)

대충 이런 느낌으로 할거

스크롤이 중요하다는걸 알 수 있는데, 이벤트 리스터 달때 스크롤 기준

찍어보면 무지하게 찍힘

![image-20210507102847623](Javascript.assets/image-20210507102847623.png)

`이 스크롤이 어디 있는지 체크가` 되어야함.

![image-20210507102920268](Javascript.assets/image-20210507102920268.png)

일단 document.documentElement 찍어보면? 우리가 보고있는 html 인데?

![image-20210507102946647](Javascript.assets/image-20210507102946647.png)

애는 여러가지 속성들을 가지고있음.

![image-20210507103047076](Javascript.assets/image-20210507103047076.png)

![image-20210507103106074](Javascript.assets/image-20210507103106074.png)

스크롤 관련도 있고

스크롤 높이는 =  눈에 안보이는 ??? 공간들 있는데? 

height 자체는 전체 높이를 이야기함.

![image-20210507103142990](Javascript.assets/image-20210507103142990.png)

`scrollTop = 내가 있는 위치로부터 문서 최상단까지의 높이.`

clientHeight = 전체 문서에서 지금 내가 있는 화면의 높이.

이 destructuring 문법으로, scrrollTop 이런애들은 저 document.documentElement 의 키들인데 키 적어주면 const 랑 같이, 그러면 밸류값 저기 할당해줌

![image-20210507103405516](Javascript.assets/image-20210507103405516.png)

이게 맨처음 스크롤탑은 0에서 점점 줄게 되고, 852 2109 저건 고정인데?

![image-20210507103536194](Javascript.assets/image-20210507103536194.png)

2109는 스크롤 전체의 길이라서? 계속 고정이고, clientHeight 는 브라우저 크기를 줄이지 않는 한 고정임.

그래서 스크롤 탑과 내가 보고있는 정보까지의 길이가 같으면 아마도 스크롤을 끝까지 내렸을 것이다.

![image-20210507104235411](Javascript.assets/image-20210507104235411.png)

이게 근데 브라우저마다 조금 다르게 작동하든가, 확대 축소 과정에서 값이 변경되는게 좀 있어서? 막 정확하지는 않음

![image-20210507104254745](Javascript.assets/image-20210507104254745.png)

![image-20210507104432210](Javascript.assets/image-20210507104432210.png)

![image-20210507104415298](Javascript.assets/image-20210507104415298.png)

쭉 내리다가 보면 이렇게 됨.

그러면 쟝고 서버에게 아래 도착했으니 더 달라고 요청해야함.

![image-20210507104708888](Javascript.assets/image-20210507104708888.png)

![image-20210507104739424](Javascript.assets/image-20210507104739424.png)

좋아요 팔로우에선, json data 내보낼때? 직접 dict 만들어서 반환. true false 정도? count 정도만 데이터 넘겼는데? 지금은 클라이언트한테 movies 라는 쿼리셋 오브젝트 덩어리를 제이슨으로 바꿔서 내보내야함. 원래 시리얼라이저 쓰고 쿼리셋 -> 제이슨 이렇게 보냈는데.

여기선 일단 DRF 말고 그냥 쟝고 내부적으로 있는 기본 시리얼라이저 쓸거

![image-20210507105213658](Javascript.assets/image-20210507105213658.png)

movies 를 json으로 바꾼걸 data 변수에 담아주고? HttpResponse 가져오고

![image-20210507105252502](Javascript.assets/image-20210507105252502.png)

![image-20210507105321286](Javascript.assets/image-20210507105321286.png)

이러면?

왼쪽 보면 이상하게 뜸.

![image-20210507105345032](Javascript.assets/image-20210507105345032.png)

일단 1~10은 html 을 보내야함.

![image-20210507105409587](Javascript.assets/image-20210507105409587.png)

그래서 상황에따라 분기 처리를 해줘야함.

![image-20210507105430857](Javascript.assets/image-20210507105430857.png)

request.is_ajax() 라는 메서드를 들고있음 request 객체는

![image-20210507105510621](Javascript.assets/image-20210507105510621.png)

좀 헷갈릴수도 있는 부분이 `axios 로 요청 보낸다고 해서 이게 Ajax 인건 아님.`

이게 스크로 다 내리면 분명 js가 axios 보내는데 여기까지만 하면 여전히 html 뜨는걸 확인할 수 있는데, 이게 무슨 소리냐면 is_ajax 에서 제대로 안걸렸단 소리.

![image-20210507105658745](Javascript.assets/image-20210507105658745.png)

그럼 쟝고는 is_ajax 판단 기준이 뭐냐?

추가정보 하나 넣어줘야함 헤더스에

![image-20210507105842638](Javascript.assets/image-20210507105842638.png)

![image-20210507105858947](Javascript.assets/image-20210507105858947.png)

이제는 스크롤 다 내리면 여기 잘 걸림.

![image-20210507105912118](Javascript.assets/image-20210507105912118.png)

![image-20210507105905846](Javascript.assets/image-20210507105905846.png)

근데 이러니까 내가 원하는건 1번 pk가 포함된 10개의 글들이 있는 1페이지 이후에 2페이지부터 json으로 받아야하는데? 그냥 스크롤 다 내리게 되면 여전히 동일페이지 제이슨 버전을 주게됨. 그래서 let pageNum = 2 로 일단 초기화(그다음장부터 받아야 하니까)

![image-20210507110014049](Javascript.assets/image-20210507110014049.png)

![image-20210507110100911](Javascript.assets/image-20210507110100911.png)

2부터 늘려가면서 받을거임, 이러면 

![image-20210507110132691](Javascript.assets/image-20210507110132691.png)

11번부터 줌

![image-20210507110140118](Javascript.assets/image-20210507110140118.png)

response.data 안에는 이런 영화 정보가 개당 들어있게 돼서?

![image-20210507110241218](Javascript.assets/image-20210507110241218.png)

보아하니 data는 array 니까 forEach 써서? 개별 영화 정보를 movie라고 인자 설정해주고,

확인차 지어보면 이렇게 됨.

![image-20210507110328294](Javascript.assets/image-20210507110328294.png)

![image-20210507110334157](Javascript.assets/image-20210507110334157.png)

완성 코드들. 위에 html좀 정비해주고 쿼리셀렉팅 해야해서?

![image-20210507110720259](Javascript.assets/image-20210507110720259.png)

저 movie.fields.title은 json 열어보면서 찾아야함

![image-20210507110628707](Javascript.assets/image-20210507110628707.png)

![image-20210507110812487](Javascript.assets/image-20210507110812487.png)

스크롤 내리면 요청 붙여주고 등등

이제 똑같은거 안나오게 += 1 해주면 됨.

![image-20210507110838240](Javascript.assets/image-20210507110838240.png)

![image-20210507110849569](Javascript.assets/image-20210507110849569.png)

정확히 출력 조절해줄수 없는게 쟝고가 보니까 이걸 드라마 범죄라고 주는게 아니라 숫자값으로 주는데, 이 숫자값이 뭔지 또 쟝고한테 보내야함.

![image-20210507110921451](Javascript.assets/image-20210507110921451.png)

이렇게 해주면 더 깔끔하게 보임

![image-20210507111015861](Javascript.assets/image-20210507111015861.png)

근데 이거 맨 아래로 내려가면? += 해도 오류는 안나는데 그다음부턴 같은거 보여주게됨

끊어줘야 하는데, 데이터 몇개 있고, 내가 몇번 받았고 이런것도 서버에 날려야해서?

---

## Infinite scroll(View)

![image-20210507111239278](Javascript.assets/image-20210507111239278.png)

뷰 제일 기본

![image-20210507111853855](Javascript.assets/image-20210507111853855.png)

지금 루트 영역이 이정도.

![image-20210507111940245](Javascript.assets/image-20210507111940245.png)

아까랑 나머지는 같고

![image-20210507112318706](Javascript.assets/image-20210507112318706.png)

동작하는지 한번 보면,

![image-20210507112349443](Javascript.assets/image-20210507112349443.png)

![image-20210507112400701](Javascript.assets/image-20210507112400701.png)

![image-20210507112412693](Javascript.assets/image-20210507112412693.png)

response.data 까지 하면 발라냄.

![image-20210507112441535](Javascript.assets/image-20210507112441535.png)

이제 아까 만들어줬던 리스트에 하나씩 밀어넣을건데,

![image-20210507112521750](Javascript.assets/image-20210507112521750.png)

이렇게 써버리면 리스트 안의 리스트에 10개 담기게 됨.

![image-20210507112614875](Javascript.assets/image-20210507112614875.png)

그래서 풀어서 넣어야 하는데? ... 으로 넣음 js 는

![image-20210507112625489](Javascript.assets/image-20210507112625489.png)

![image-20210507112636664](Javascript.assets/image-20210507112636664.png)

이러면 깔끔해짐.

한번 보면,

![image-20210507112809489](Javascript.assets/image-20210507112809489.png)

근데, 루트 눌러보면 data 들어간건 맞는데, 출력이 안됨 왼쪽보면

![image-20210507112821991](Javascript.assets/image-20210507112821991.png)

인스펙션 켜보면 실제로 div 10개도 생겼는데? v-for 돌면서?

![image-20210507112844248](Javascript.assets/image-20210507112844248.png)

근데 열어서 보면 빈 h5 태그만 있음. 저 interpolation 생각해보면

`DTL 도 저거쓰고 뷰도 저거씀`  이게 겹쳐버렸기 때문에 쟝고가 먼저 렌더링해버린거. 

쟝고 입장에선 저게 뭔지 모름.

그래서 뭐 이런 방법도 있고 interpolation 대체로 v-text

![image-20210507113014938](Javascript.assets/image-20210507113014938.png)

아니면 충돌 안하게 바꿀 수 있음. 근데 뭐 이거 할일은 없다고 생각하자. 어차피 html 안던질거니까 쟝고는

![image-20210507113044668](Javascript.assets/image-20210507113044668.png)

![image-20210507113055742](Javascript.assets/image-20210507113055742.png)

여기까지 하면 메서드 실행하면 getmovie 해서 데이터 가져오고, 이걸 html 넣는 거까지한건데, 얘도 += 1 처리 해줘야함

![image-20210507113209509](Javascript.assets/image-20210507113209509.png)

이제 귀 달아줄건데, 스크롤 떨어지면 함수 실행하게

그래서 함수 하나 더 붙여줄거

![image-20210507113414064](Javascript.assets/image-20210507113414064.png)

created 는 뭐냐면 인스턴스는 라이프사이클이 있는데, 생성이 되면 뭘 해~ 라는걸 만드는거

화면 보여주는 순간 일단 한번은 실행을 해야 초기 10개가 보이니까

그다음 최상위 객체에 귀

![image-20210507113638583](Javascript.assets/image-20210507113638583.png)

![image-20210507113744946](Javascript.assets/image-20210507113744946.png)

그래서 document 에 붙이자

![image-20210507113815287](Javascript.assets/image-20210507113815287.png)

 인피니티 스크롤이 항상 써야되는건 아니니까 UX 생각.

새로고침하면 다시 아래로 스크롤해야하고 짜증남



































