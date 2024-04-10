let btn = document.querySelector('[data-btn-sahare]');
    box = document.querySelector('[data-box-sahare]');

    btn.addEventListener('click',function() {

        btn.classList.toggle('active')
        box.classList.toggle('active')
    });