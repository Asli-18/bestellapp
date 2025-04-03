window.addEventListener("DOMContentLoaded", scrollToTop);
function scrollToTop() {
    let upButton = document.getElementById("upBtn");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 1720) {
            upButton.style.display = "block";
        } else {
            upButton.style.display = "none";
        }
    });
    upButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

window.addEventListener("resize", toggleBasketSection);
function toggleBasketSection() {
    let basketSection = document.getElementById('basketSection');
    let header = document.getElementById('header');
    if (window.innerWidth < 1200) {  
        if (!basketSection.classList.contains('open')) {
            basketSection.classList.add('dNone');
        }
        header.classList.add('mobilHeader', 'header-mobile');
    } else {
        basketSection.classList.remove('dNone');
        header.classList.remove('mobilHeader', 'header-mobile');
    }
}

function toggleBasket() {
    let basketSection = document.getElementById('basketSection');
    if (!basketSection) return;
    basketSection.classList.toggle('dNone');
    basketSection.classList.toggle('open');
}