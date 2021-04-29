const id = 'admin'

if (id === 'admin') {
  console.log('관리자님, 웰콤')
} else if (id === 'manager') {
  console.log('매니저님  ㅎㅇ')
} else {
  console.log(`${id}님, 웰콤`)
}

// 하나 가지고 비교할땐 if보다 switch가 좀 더 깔끔
switch (id) {
  case 'admin': {
    console.log('관리자님, 환영')
    break
  }
  case 'manager': {
    console.log('매니저님, 환영')
    break
  }
  default: {
    console.log(`${id}님, 웰콤`)
    break
  }
}

if (a === 1) {}
else if (a !== 1 && b === 1) {}