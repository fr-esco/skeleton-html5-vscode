document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('btn')
    .addEventListener('click', function (event) {
      setTimeout(function fn() {
        alert('Ciao')
      }, 2000)

      let i = 0
      const intervalId = setInterval(() => {
        console.log(i++)
        if (i === 10) {
          clearInterval(intervalId)
        }
      }, 1000)
    })
});
