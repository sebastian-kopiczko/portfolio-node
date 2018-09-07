const UISelectors = {
    menu: document.querySelector("#menu-overlay"),
    menuBtn: document.querySelector("#menu-btn"),
    menuTrigger: document.querySelector(".menu__trigger"),
    changeLang: document.querySelector("#change-lang")
};

UISelectors.menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__trigger')) {
        UISelectors.menuBtn.classList.toggle('button-active');
        UISelectors.menu.classList.toggle('active');
    };
});

const inputs = document.querySelectorAll('.form__input');
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
        }
    });
});

const setLanguage = lang => {
    fetch('/language', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            language: lang
        })
    })
    .then(res => {
        if(res.ok){ 
            window.location.reload(true); 
        }
    });
};

UISelectors.changeLang.addEventListener('click', (e) => {
    if (e.target.dataset.lang === 'pl') {
        setLanguage(e.target.dataset.lang);
        document.documentElement.setAttribute.lang === 'pl';
    } else {
        setLanguage(e.target.dataset.lang);
        document.documentElement.setAttribute('lang', 'en') 
    }
});

const showAlert = (type, content) => {
    const alertDiv = document.createElement('div');
    const text = document.createTextNode(content);
    const form = document.querySelector('.form')
    alertDiv.appendChild(text);
    alertDiv.classList.add('form__alert', type);
    form.insertAdjacentElement('beforebegin', alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 2500);
}

document.querySelector('.form').addEventListener('submit', (e) => {
    if(document.getElementById('email').classList.contains('input--danger')){
        e.preventDefault();
        showAlert('alert--danger', 'sth wrong');        
    }
    showAlert('alert--success', '')
});