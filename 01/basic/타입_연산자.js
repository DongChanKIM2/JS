/*
  primitive Types
  1. Number

  2. String

  3. Empty

  4. Boolean

*/

console.log(
  'NUMBER TYPE: ',
  Infinity, -Infinity, 10 / 0,
  NaN // Not a Number -> 좌우 타입이 맞지 않을 때
)

console.log(
  'string Type: ',
  'hello', 'world', 'ssafy' + '5th',
  `1 + 1 = ${1 + 1}` // Template literal
)


console.log(
  'Empty values: ',
  undefined, null
)

console.log(
  true, false
)


/*
  operands
  1. unary (단항 연산자) 앞뒤로 하나만 올 수 있는 것
  -number, typeof
  ++, --, !

  2. binary (이형 연산자) 앞뒤로 하나씩 오는 것
  +, -, *, /, +=, -=, *=, /=, ++, --, >, >=, <, <=
  &&(and), ||(or)

  3. ternary (삼항 연산자)
  ? :

  1. 산술연산자
  2. 비교연산자
  3. 동등/일치 연산자
  동등 == (사용x js는 허점이 많은 친구) 
 일치 === (사용o)

  4. 논리연산자

*/

console.log(
  'Unary Operator',
  -1
)

// 가치 평가 True면 크다 False면 작다
console.log(1 > 2 ? '크다' : '작다')