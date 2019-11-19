let submit = document.getElementById('submit')

let email = document.getElementById('email')
let name = document.getElementById('name')
let subject = document.getElementById('subject')
let message = document.getElementById('message')
let contactForm = document.getElementById('contactForm')

let feedback = document.querySelector('.feedback')

if (submit) {
    submit.disabled = true
    submit.style.backgroundColor = "lightgray"
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function readyToSubmit() {
    return validateEmail(email.value) && name.value && subject.value && message.value
}

function inputValue (e) {
    if (feedback.innerText) {
        feedback.innerText = null
    }
    if (readyToSubmit()) {
        submit.style.backgroundColor = "rgb(20, 225, 197)"
        submit.disabled = false
    } else if (submit.style.backgroundColor !== 'lightgray') submit.style.backgroundColor = 'lightgray'
}


if (submit && contactForm) {
    email.oninput = inputValue
    name.oninput = inputValue
    subject.oninput = inputValue
    message.oninput = inputValue
    submit.onclick = contactForm.submit
}
