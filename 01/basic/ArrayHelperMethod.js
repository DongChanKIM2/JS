const arr = [1, 2, 3]

// forEach() 가 of보다 더 많이 사용!
arr.forEach(function (num){
  console.log(num)
})

for (const num of arr) {
  console.log(num)
}

// .map()

arr.map(function (num) {
  return num * 3
})

// 이렇게도 표현 가능
arr.map(num => num * 2)

const contents = ['hello', 'world']
contents.map(function (content) {
  return 
})

// .filter()
// 홀수만 모아서 배열로 리턴
arr.filter(num => num % 2)

const movies = [
  {title: 'Martix', isAdult: false},
  {title: 'kingsman', isAdult: true}
]

const adultMovies = movies.filter(movie => movie.isAdult)
// 같은 거
const adultMovies = movies.filter(function (movie) {
  return movie.isAdult
})


// .find()
arr.find(function (num) {
  return num === 2
})

arr.find(num => num % 2)