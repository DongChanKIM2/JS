let i = 0
while (i < 10){
  console.log('hi')
  i++
  // i += 1
}

const arr = [1, 2, 3, 4 ,5]

// 전통적인 for
for (let i=0; i<arr.length; i++) {
  console.log(arr[i])
}


// const number가 for문안에서는 재할당이 아니라 블록단위로 지정이됨
// 요소를 꺼내는 for - of
for (const number of arr) {
  console.log(number)
}

// dict key값 뽑아내기는 for - in
// key에 string 이여도 되고 아니여도 됨
const person = {'name': 'neo', address: 'seoul'}
for (const key in person) {
  console.log(key, person[key])
}