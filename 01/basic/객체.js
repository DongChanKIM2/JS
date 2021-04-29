/*
  {key: value} => object(객체)
  python dict와 차이점
  1. key 문자열의 ''따옴표 삭제 가능
  2. 접근할 때, ['key'] 와 .key 모두 가능
  3. 
*/



const me = {
  name: '홍길동',
  phoneNumber: '01023451234',
  friends: [
    '도우너', '마이콜', '또치'
  ],
  home: {
    address: '서울',
    owner: '고길동',
  }
}

// me.home.owner -> 편하다 부르기

const books = []
