let hamburguer = document.querySelector('.hamburger')
let navbar = document.querySelector('.navbar')
let triangulo = document.querySelector('.triangulo')
let imgHamburger = document.querySelector('.hamburger img')
let quitar = document.querySelector('.hamburger div')

hamburguer.addEventListener('click', (e) => {
  navbar.classList.toggle('mostrar-menu')
  triangulo.classList.toggle('mostrar-triangulo')
  quitar.classList.toggle('mostrar-quitar')
  imgHamburger.classList.toggle('ocultar')
  quitar.classList.toggle('mostrar')
})