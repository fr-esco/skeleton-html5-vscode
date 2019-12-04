const button1 = document.getElementById('my-button-1')
const button2 = document.getElementById('my-button-2')
const button3 = document.getElementById('my-button-3')
const paragraph = document.getElementById('my-paragraph')

let counter = 0

if (button1 && button2 && button3 && paragraph) {
  button1.addEventListener('click', function btnClick1(event) {
    counter += 1
    updateParagraph()
  })
  button2.addEventListener('click', function btnClick2(event) {
    counter += 2
    updateParagraph()
  })
  button3.addEventListener('click', function btnClick3(event) {
    counter += 3
    updateParagraph()
  })

  function updateParagraph() {
    paragraph.textContent = counter
    if (counter % 2 === 0) {
      paragraph.classList.add('pari')
    } else {
      paragraph.classList.remove('pari')
    }
    if (counter % 6 === 0) {
      paragraph.classList.add('divisibile-per-6')
    } else {
      paragraph.classList.remove('divisibile-per-6')
    }
  }
} else {
  console.warn('Elementi non trovati')
}
