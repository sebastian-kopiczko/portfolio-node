const UISelectors = {
    menu: document.querySelector("#menu-overlay"),
    menuBtn: document.querySelector("#menu-btn"),
    menuTrigger: document.querySelector(".menu__trigger"),
    changeLang: document.querySelector("#change-lang")
};

UISelectors.changeLang.addEventListener('click', (e) => {
    if (e.target.dataset.lang === 'pl') {
        setLanguage(e.target.dataset.lang);
    } else {
        setLanguage(e.target.dataset.lang);
    }
})

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
    fetch('/set', {
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
}