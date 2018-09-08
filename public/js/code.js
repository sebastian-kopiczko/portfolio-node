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

UISelectors.changeLang.addEventListener('click', (e) => {
    if (e.target.dataset.lang === 'pl') {
        setLanguage(e.target.dataset.lang);
    } else {
        setLanguage(e.target.dataset.lang);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = document.documentElement.lang;
    document.querySelector(`.navbar__language .${currentLang}`).style.display = 'none';
})