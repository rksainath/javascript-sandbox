document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('pincode').addEventListener('blur', validatePincode)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('mobile').addEventListener('blur', validateMobile)



function validateName() {
    const name = document.getElementById('name')
    // sample: Sainath
    let re = /^[A-Za-z]{2,7}$/

    if (!re.test(name.value)) {
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
    }

}

function validatePincode() {
    const pincode = document.getElementById('pincode')
    // sample : 600-033
    let re = /^(6)\d{2}[- ]?\d{3}$/

    if (!re.test(pincode.value)) {
        pincode.classList.add('is-invalid')
    } else {
        pincode.classList.remove('is-invalid')
    }
}

function validateEmail() {
    const email = document.getElementById('email')
    // sample: sainath_rk@example-12.com

    let re = /^([a-zA-z0-9\-\_\.]{10})@([a-zA-z0-9\-\_\.]{10})\.([a-zA-z0-9\-\_\.]{3})$/

    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
}

function validateMobile() {
    const mobile = document.getElementById('mobile')
    //sample +91-92525 09202

    let re = /^\+?(91)?\-?([0-9]{5})[ ]?[0-9]{5}$/

    if (!re.test(mobile.value)) {
        mobile.classList.add('is-invalid')
    } else {
        mobile.classList.remove('is-invalid')
    }
}