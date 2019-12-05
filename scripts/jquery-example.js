$(document).ready(function () {
  $('#secondo').width('20px')

  // const a = $(`
  //   <a
  //     href="https://www.google.it"
  //     target="_blank"
  //     class="anchor">
  //       Google
  //   </a>
  // `)
  const a = $('<a>', {
    href: "https://www.google.it",
    target: "_blank",
    'class': "anchor",
    html: 'Vai su Google',
  })
  a.attr('title', 'Google')

  const p = $('<p id="mioParagrafo">Contenuto del paragrafo: </p>')
  p.css('backgroundColor', 'red')
  a.appendTo(p)
  $('body').append(p)
})
