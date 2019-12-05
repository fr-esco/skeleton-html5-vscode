localStorage.setItem('my-key', JSON.stringify({
  a: 0,
  b: false
}))

console.log(JSON.parse(localStorage.getItem('my-key')))
