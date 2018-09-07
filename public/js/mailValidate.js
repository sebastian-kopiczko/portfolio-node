const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        toggleValidationClass(emailInput, regex);
    })
function toggleValidationClass(element, regex) {
    const invalidClass = 'input--danger';
    if (!regex.test(element.value)) {
        element.classList.add(invalidClass);
    } else {
        element.classList.remove(invalidClass);
    }
}