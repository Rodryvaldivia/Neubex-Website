function aparecerScroll(){
    let html = document.getElementsByTagName("html")[0];
    let elemento1 = document.getElementsByClassName("section1__content");
    let elemento2 = document.getElementsByClassName("section2");
    let elemento3 = document.getElementsByClassName("contacto")

    document.addEventListener("scroll",function (){
        let topVent = html.scrollTop;
        for(i=0; i < elemento1.length; i++){
            let tope1 = elemento1[i].offsetTop;
            if(topVent > tope1 - 500){
                elemento1[i].style.opacity = 1;
            } 
        }
        for(i=0; i < elemento2.length; i++){
            let tope2 = elemento2[i].offsetTop;
            if(topVent > tope2 - 800) {
                elemento2[i].style.opacity = 1;
            }
        }
        for(i=0; i < elemento3.length; i++){
            let tope3 = elemento3[i].offsetTop;
            if(topVent > tope3 - 800) {
                elemento3[i].style.opacity = 1;
            }
        }
    })                                      
}

aparecerScroll();
