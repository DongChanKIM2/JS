/*
  JS의 배열
  1. 리스트로 구현되 있어서(크기 제한 없음)
  2. 음수인덱싱, 슬라이싱 불가능
*/

const nums = [1, 2, 3, 4]
nums[0] // 가능
nums.length // 길이
nums.reverse() // 파이썬과 다르게 return도 있고 값도 변경됨
nums.push('a') // append인데 nums.length를 return 함 5
nums.pop() // pop한 'a'가 나옴
nums.unshift('a') // ['a', 1, 2, 3, 4] insert(0) 앞에 append해줌 nums.length을 return 5
nums.shift() // 'a' : shift(dequeue) 함
nums // [1, 2, 3, 4]

// 조회만 해서 변경 없는것들
nums.includes(4) // True 4가 nums에 있는지 없는지만 확인
nums.indexOf(2) // 1: 요소의 idx 반환
nums.indexOf() // -1 (빈값)
nums.indexOf(12312415) // -1 (없는값)

// 
nums.join('-') // '1-2-3-4'
nums // 변화없음 [1, 2, 3, 4]

nums[-1] // 불가능(슬라이싱도 불가능)


for (const num of nums) {
  console.log(num)
}