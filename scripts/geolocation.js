const gelocationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('btn')
    .addEventListener('click', event => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function posSuccess(pos) {
            console.log(pos)
            document.getElementById('link')
              .setAttribute('href', `https://www.openstreetmap.org/#map=19/${pos.coords.latitude}/${pos.coords.longitude}`)
            document.getElementById('link-container')
              .classList.remove('hidden')
          },
          function posError(err) {
            console.error('Geolocation Position Error', err)
            const p = document.getElementById('error-container')
            p.textContent = err.message
            p.classList.remove('hidden')
          },
          gelocationOptions
        )
      } else {
        console.error('Geolocation not available')
      }
    })
});


// const url = ['https://www.openstreetmap.org/#map=9',
//   'latitudine',
//   'longitudine'
// ].join('/')
