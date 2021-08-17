function aparecerScroll () {
    let html = document.getElementsByTagName("html")[0];
    let elemento1 = document.getElementsByClassName("section2__content__img");

    document.addEventListener("scroll", function () {
        let topVent = html.scrollTop;
        for(i=0; i < elemento1.length; i++) {
            let tope1 = elemento1[i].offsetTop;
            if(topVent > tope1 - 400) {
                elemento1[i].style.opacity = 1;
            }
        }
    })
}

aparecerScroll();