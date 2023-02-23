function toggle () {
  let mode = document.body
  mode.classList.toggle('claro')

  let img = document.querySelector('#profile img')

  if ( mode.classList.contains('claro')) {
    img.setAttribute('src', './assets/avatar02.png')
  } else {
    img.setAttribute('src', './assets/avatar01.png')
  }
}