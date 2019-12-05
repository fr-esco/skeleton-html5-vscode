const form = document.getElementById('my-form')
const input = document.getElementById('my-text')

if (form) {
  form.addEventListener('submit', function frmValidate(event) {
    // console.log(event)
    if (!form.reportValidity()) {
      event.preventDefault()
    } else {
      event.preventDefault()
      const valore = form.myText.value.trim()
      console.log('Nel campo c\'è scritto', valore)
      const par = document.getElementById('my-par')
      if (par) {
        const testoPar = par.textContent
        console.log('Nel paragrafo c\'è scritto', testoPar)
        const nuovoTestoPar = testoPar.replace(':colore:', valore)
        par.textContent = nuovoTestoPar
      } else {
        console.error('Paragraph not found')
      }
      // const input = document.getElementById('my-text')
      // if (input) {
      //   console.log(input.value)
      // } else {
      //   console.error('Input not found')
      // }
    }
  })
} else {
  console.error('Form not found')
}

if (input) {
  input.addEventListener('invalid', function invalid(event) {
    event.preventDefault()
  })
} else {
  console.error('Input not found')
}
