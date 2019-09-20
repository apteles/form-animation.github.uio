const btnLogin = document.querySelector('.btn-login')
const form = document.querySelector('form')

btnLogin.addEventListener('click', function (event) {
  event.preventDefault()

  const fields = [...document.querySelectorAll('.input-block input')]

  fields.forEach(field => {
    if (field.value === "") form.classList.add('validate-error')
  })

  const formError = document.querySelector('.validate-error')

  if (!formError) {
    form.classList.add('form-hide')
    return
  }

  formError.addEventListener('animationend', (event) => {
    if (event.animationName === "wrong") {
      formError.classList.remove('validate-error')
    }
  })


})

form.addEventListener('animationstart', function (event) {
  if (event.animationName === "down") {
    document.querySelector('body').style.overflow = "hidden";
  }
})

form.addEventListener('animationend', function (event) {
  if (event.animationName === "down") {
    form.style.display = "none"
    document.querySelector('body').style.overflow = "none";
  }
})

/** background squares */

const squares = document.querySelector('ul.squares')

for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li')
  const size = Math.floor(Math.random() * (120 - 10)) + 10
  const delay = Math.floor(Math.random() * (2 - 0.1)) + 0.1
  const duration = Math.floor(Math.random() * (24 - 12)) + 12
  const position = Math.floor(Math.random() * (1 - 99)) + 99

  li.style.width = `${size}px`
  li.style.height = `${size}px`
  li.style.bottom = `-${size}px`
  li.style.left = `${position}%`
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()} )`
  console.log(li)
  squares.appendChild(li)
}