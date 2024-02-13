const link = document.querySelectorAll('.link');
const tab = document.querySelectorAll('.tab');



for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        for (let ix = 0; ix < link.length; ix++) {
            link[ix].classList.remove('active');
            tab[ix].classList.remove('active-tab');
        }
        tabs(this, tab[i]);
        
    })
}

function tabs(link, tab) {
    link.classList.add('active');
    tab.classList.add('active-tab');
}