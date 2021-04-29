/*
  함수를 정의하는 3가지 방법
  1. 선언식
  2. 표현식
  2.1 function
  2.2 arrow function =>
*/

// 1. 선언식 : function funcName() {}
function add(n1, n2) {
  return n1, n2
}

// 2.1 표현식 : const funcName = function () {}
const sub = function (n1, n2) {
  return n1 - n2
}

// 2.2 표현식 arrow: const funcName = 
/*
  1. function 키워드 지우기
  2. ()와 {} 사이에 => 넣어주기
  option: 
  인자가 1개라면 괄호 생략가능
  블록 안에 return 구문만 있으면 {} 와 return 모두 삭제 가능
*/
const mul = (n1, n2) => {
  return n1 * n2
}