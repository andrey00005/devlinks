function toggle () {
  let mode = document.body
  mode.classList.toggle('claro')

  let img = document.querySelector('#profile img')

  if ( mode.classList.contains('claro')) {
    img.setAttribute('src', './assets/Avatar2.png')
  } else {
    img.setAttribute('src', './assets/Avatar.png')
  }
}