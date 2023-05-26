const form = document.querySelector('form')
const trialBtn = document.querySelector('.submit-btn')
const inputFields = document.querySelectorAll('input')
const inputEmail = document.querySelector('#email')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

trialBtn.addEventListener('click', () => {
    const checkedEmail = inputEmail.value

    inputFields.forEach((input) => {
        const filledInput = input.value
        const inputWithErro = input.classList.contains('erro-validation')

        if (inputWithErro) {
            input.classList.remove('erro-validation')
            input.nextElementSibling.style.visibility = "hidden"
        }

        if (!filledInput) {
            input.classList.add('erro-validation')
            input.nextElementSibling.style.visibility = "visible"

        }
    })

    if (!validateEmail(checkedEmail)) {
        inputEmail.classList.add('erro-validation')
        inputEmail.nextElementSibling.style.visibility = "visible"
    }
})

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/

    return emailRegex.test(email)
}
