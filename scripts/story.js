// window.addEventListener('load', onLoad)
document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  const form = document.getElementById('my-form')
  // const form = document.querySelector('form')

  const modello = 'C’erano 95 gradi Fahrenheit quando :protagonista: uscì per una passeggiata al centro di :luogo:.'
  const protagonisti = ['Aldo', 'Giovanni', 'Giacomo']
  const luoghi = ['Roma', 'Napoli', 'Torino']

  if (form) {
    form.addEventListener('submit', function onSubmit(event) {
      event.preventDefault()

      const inputProtagonista = form['protagonista'].value

      const nuovoProtagonista = inputProtagonista
        || protagonisti[rnd(0, protagonisti.length - 1)]

      // const nuovoProtagonista = inputProtagonista
      //   ? inputProtagonista
      //   : protagonisti[rnd(0, protagonisti.length - 1)]

      // let nuovoProtagonista
      // if (inputProtagonista) {
      //   nuovoProtagonista = inputProtagonista
      // } else {
      //   nuovoProtagonista = protagonisti[rnd(0, protagonisti.length - 1)]
      // }

      const nuovoLuogo = luoghi[rnd(0, luoghi.length - 1)]

      let nuovaStoria = modello
        .replace(':protagonista:', nuovoProtagonista)
        .replace(':luogo:', nuovoLuogo)

      const inputMisura = form.unit.value

      if (inputMisura === 'UK') {
        nuovaStoria = nuovaStoria.replace('95 gradi Fahrenheit', '35 gradi Celsius')
      }

      form.story.value = nuovaStoria

      // const p = document.getElementById('story')
      // if (p) {
      //   p.textContent = nuovaStoria
      // } else {
      //   console.error('Output node not found')
      // }
    })
  } else {
    console.error('Form not found')
  }

}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
