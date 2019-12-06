document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', () => {
    const paragraph = document.querySelectorAll('p').item(1)
    if (paragraph) {
      // paragraph.style.display = 'none'
      // paragraph.style.visibility = 'hidden'
      paragraph.classList.toggle('hidden')
    } else {
      console.error('Secondo paragrafo non trovato.')
    }
  })
});
