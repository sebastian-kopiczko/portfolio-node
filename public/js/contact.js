const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailForm = document.querySelector('.contact__form');
const submitButton = document.querySelector('.form__button');
const inputs = Array.from(document.querySelectorAll('.form__input'));

const sendMail = () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    fetch('/send', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: name, email: email, message: message})
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    clearInputs();
};

const clearInputs = () =>{
    inputs.forEach(input => {
        input.value = '';
    });
};

const toggleValidationClass = (element, regex) => {
    const invalidClass = 'input--invalid';
    const validClass = 'input--valid';
    if (!regex.test(element.value)) {
        element.classList.add(invalidClass);
        element.classList.remove(validClass);
    } else {
        element.classList.add(validClass);
        element.classList.remove(invalidClass);
    };
};

const checkIfEmpty = () => {
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
        return true;
    }
    return false;
};

const checkIfInvalid = () => {
    if(nameInput.classList.contains('input--invalid') || emailInput.classList.contains('input--invalid') || messageInput.classList.contains('input--invalid')){
        return true;
    }
    return false;
};

nameInput.addEventListener('input', () => {
    const regex = /^[a-z ,.'-]+$/i;
    toggleValidationClass(nameInput, regex);
});

emailInput.addEventListener('input', () => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    toggleValidationClass(emailInput, regex);
});

messageInput.addEventListener('input', () => {
    const regex = /^.{1,256}$/;
    toggleValidationClass(messageInput, regex);
})

inputs.forEach((input) => {
    if (input.value) {
        e.target.parentElement.lastElementChild.classList.add('form__label--active')
    };
    input.addEventListener('focus', (e) => {
        e.target.parentElement.lastElementChild.classList.add('form__label--active');
    });
    input.addEventListener('focusout', (e) => {
        if (!e.target.value) {
            e.target.parentElement.lastElementChild.classList.remove('form__label--active');
        };
    });
});
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(checkIfEmpty() || checkIfInvalid()){
        console.log('form invalid');
        return false;
    }else{
        console.log('form valid, msg sent');
        sendMail();
    }    
});