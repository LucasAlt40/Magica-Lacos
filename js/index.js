const clickEmail = document.querySelector('#email')

clickEmail.addEventListener('click', () => {
  navigator.clipboard.writeText('magicalacos@gmail.com')
  alert('Copiado!')
})