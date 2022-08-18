const namePattern = /^[a-zA-Z ]+$/;
const phoneNumberPattern = /^\d{10}$/;
const cityPattern = /^[a-zA-Z]{1,}$/;

document.getElementById('submit-form').addEventListener('click', event => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let city = document.getElementById('city').value;

    if (!namePattern.test(name)) {
        event.preventDefault();
        document.getElementById('name').nextElementSibling.classList.add('d-block');
    }
    if (!validateEmail(email)) {
        event.preventDefault();
        document.getElementById('email').nextElementSibling.classList.add('d-block');
    }
    if (!phoneNumberPattern.test(phoneNumber)) {
        event.preventDefault();
        document.getElementById('phoneNumber').nextElementSibling.classList.add('d-block');
    }
    if (!cityPattern.test(city)) {
        event.preventDefault();
        document.getElementById('city').nextElementSibling.classList.add('d-block');
    }
});

document.getElementById('name').addEventListener('focusin', event => {
    document.getElementById('name').nextElementSibling.classList.remove('d-block');
});

document.getElementById('email').addEventListener('focusin', event => {
    document.getElementById('email').nextElementSibling.classList.remove('d-block');
});

document.getElementById('phoneNumber').addEventListener('focusin', event => {
    document.getElementById('phoneNumber').nextElementSibling.classList.remove('d-block');
});

document.getElementById('city').addEventListener('focusin', event => {
    document.getElementById('city').nextElementSibling.classList.remove('d-block');
});

let validateEmail = email => {
    let firstAtPos = email.indexOf('@');
    let lastAtPos = email.lastIndexOf('@');
    let lastDotPos = email.lastIndexOf('.');

    return ((lastDotPos - lastAtPos) > 1
            && lastAtPos > 0 && firstAtPos === lastAtPos
            && (email.length - lastDotPos) > 2);
};