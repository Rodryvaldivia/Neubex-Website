
function aparecerScroll(){
    let html = document.getElementsByTagName("html")[0];
    let elemento1 = document.getElementsByClassName("glass");

    document.addEventListener("scroll",function (){
        let topVent = html.scrollTop;
        for(i=0; i < elemento1.length; i++){
            let tope1 = elemento1[i].offsetTop;
            if(topVent > tope1 - 500){
                elemento1[i].style.opacity = 1;
            } 
        }
    })                                      
}

aparecerScroll();


window.onload= function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

