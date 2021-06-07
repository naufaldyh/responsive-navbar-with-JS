var navMenuAnjing = document.getElementById('nav')
var hamburger = document.getElementById('hamburger')
var navLink = document.querySelectorAll('.nav-link')

console.log(navMenuAnjing)
console.log(hamburger)

hamburger.addEventListener('click', function () {
    console.log('dipencet')
    navMenuAnjing.classList.toggle('active')
})

function ilangin () {
    navMenuAnjing.classList.remove('active')
}

navLink.forEach(n => n.addEventListener ('click', ilangin))