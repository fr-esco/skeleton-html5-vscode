$(document).ready(function () {
  let counter = 0

  $('#my-button-1').on('click', function btn1() {
    increment(1)
  })
  $('#my-button-2').on('click', function btn2() {
    increment(2)
  })
  $('#my-button-3').on('click', function btn3() {
    increment(3)
  })

  function increment(amount) {
    counter += amount
    $('#my-paragraph')
      .text(counter)
      .toggleClass('pari', counter % 2 === 0)
      .toggleClass('divisibile-per-6', counter % 6 === 0)
    $('#my-button-2')
      .attr('disabled', counter % 2 === 0 || null)
  }
})
