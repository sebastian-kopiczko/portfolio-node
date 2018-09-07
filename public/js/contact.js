const emailInput = document.getElementById('email');
const inputs = document.querySelectorAll('.form__input');

emailInput.addEventListener('blur', () => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    toggleValidationClass(emailInput, regex);
});
toggleValidationClass = (element, regex) => {
    const invalidClass = 'input--danger';
    if (!regex.test(element.value)) {
        element.classList.add(invalidClass);
    } else {
        element.classList.remove(invalidClass);
    };
};
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