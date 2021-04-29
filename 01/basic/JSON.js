// JSON == JavaScript Object Notation (내장되있음)

const objData = {
  coffee: 'Americano',
  iceCream: 'Cookie&Cream',

}
// string 화
const jsonData = JSON.stringify(obj)
// object 화
const backToObj = JSON.parse(jsonData)