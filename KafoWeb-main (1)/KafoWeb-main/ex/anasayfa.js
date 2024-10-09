const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const rightslider = document.getElementById("sliderrightbtn");
const leftslider = document.getElementById("sliderleftbtn");
const bg1 = document.getElementById("ap1");
const bg2 =document.getElementById("ap2");
const bg3 = document.getElementById("ap3");
const bg4 = document.getElementById("ap4");
const bg5 = document.getElementById("ap5");
const bg6 = document.getElementById("ap6");
const textdiv = document.getElementById("h2slider");
const textdiv2 = document.getElementById("pslider");
let index = 0;
let slider = 0;



function sliderright2(){
  if (slider == 0) {
    slider++;
    textdiv.innerText="KAHVE FOTOĞRAFLARI ÇEKİM TÜYOLARI"
    gsap.from(textdiv, .7, {x: 20, ease: 'power3.out'})
    gsap.from(textdiv2, .7, {x: 20, ease: 'power3.out'})
  }
  else {
    slider--;
    textdiv.innerText="5 DAKİKADA EV YAPIMI ICE LATTE"
    gsap.from(textdiv, .7, {x: 20, ease: 'power3.out'})
    gsap.from(textdiv2, .7, {x: 20, ease: 'power3.out'})

  }
}
function sliderleft2(){
  if (slider == 1) {
    slider--;
  textdiv.innerText="5 DAKİKADA EV YAPIMI ICE LATTE"
  gsap.from(textdiv, .7, {x: -20, ease: 'power3.out'})
  gsap.from(textdiv2, .7, {x: -20, ease: 'power3.out'})

  }
  else {
    slider++;
    textdiv.innerText="KAHVE FOTOĞRAFLARI ÇEKİM TÜYOLARI"
    gsap.from(textdiv, .7, {x: -20, ease: 'power3.out'})
    gsap.from(textdiv2, .7, {x: -20, ease: 'power3.out'})

  }
}

leftslider.addEventListener("click", sliderleft2)
rightslider.addEventListener("click", sliderright2);

function slideRight(){
    if (index == 0){
        index = 1;
        bg2.style.zIndex ="0"
        bg1 .style.zIndex ="-3" 
        bg1.style.display ="none"
        bg2.style.display ="block"

        bg2.addClass('is-visible');
    
        setTimeout(function () {
          bg2.addClass('is-open');
        }, 20);
    }

    else if (index == 1) {
        index = 2;
        bg2.style.zIndex ="-3"
        bg2.style.display = "none"
        bg3.style.display ="block"
        bg3.style.zIndex ="0"
        bg3.addClass('is-visible');
    
        setTimeout(function () {
          bg3.addClass('is-open');
        }, 20);
    } 
    else if (index == 2){
        index = 3;
        bg3.style.zIndex ="-3"
        bg3.style.display ="none"
        bg4.style.display ="block"
        bg4.style.zIndex ="0"
        bg4.addClass('is-visible');
    
        setTimeout(function () {
          bg4.addClass('is-open');
        }, 20);
    }
    else if (index == 3){
        index = 4;
        bg4.style.zIndex ="-3"
        bg4.style.display ="none"
        bg5.style.display ="block"
        bg5.style.zIndex ="0"
        bg5.addClass('is-visible');
    
        setTimeout(function () {
          bg5.addClass('is-open');
        }, 20);
    }
    else if (index == 4){
        index = 5;
        bg5.style.zIndex ="-3"
        bg5.style.display="none"
        bg6.style.display="block"
        bg6.style.zIndex ="0"
        bg6.addClass('is-visible');
    
        setTimeout(function () {
          bg6.addClass('is-open');
        }, 20);
    }
    else if (index == 5){
        index = 0;
        bg6.style.zIndex ="-3"
        bg6.style.display="none"
        bg1.style.display="block"
        bg1.style.zIndex ="0"
        bg1.addClass('is-visible');
    
        setTimeout(function () {
          bg1.addClass('is-open');
        }, 20);
    }
    
    
    
}
function slideLeft(){
    if (index == 1) {
        index--;
        bg2.style.zIndex ="-2"
        bg1.style.display = "block"
        bg1.style.zIndex = "0"
        bg1.addClass('is-visible');
    
        setTimeout(function () {
          bg1.addClass('is-open');
        }, 20); 
    }
    
    else if (index == 2) {
        index--;
        bg2.style.zIndex ="0"
        bg2.style.display ="block"
        bg3.style.zIndex ="-3"
        bg2.addClass('is-visible');
    
        setTimeout(function () {
          bg2.addClass('is-open');
        }, 20); 
    }
    else if (index == 3) {
        index--;
        bg3.style.zIndex ="0"
        bg3.style.display ="block"
        bg4.style.zIndex ="-3"
        bg3.addClass('is-visible');
    
        setTimeout(function () {
          bg3.addClass('is-open');
        }, 20); 
    }
    else if (index == 4) {
        index--;
        bg4.style.zIndex ="0"
        bg4.style.display ="block"
        bg5.style.zIndex ="-3"
        bg4.addClass('is-visible');
    
        setTimeout(function () {
          bg4.addClass('is-open');
        }, 20); 
    }
    else if (index == 5) {
        index--;
        bg5.style.zIndex ="0"
        bg5.style.display ="block"
        bg6.style.zIndex ="-3"
        bg5.addClass('is-visible');
    
        setTimeout(function () {
          bg5.addClass('is-open');
        }, 20); 
    }
    else if (index == 0) {
        index = 5;
        bg6.style.zIndex ="0"
        bg6.style.display ="block"
        bg1.style.zIndex ="-3"
        bg6.addClass('is-visible');
    
        setTimeout(function () {
          bg6.addClass('is-open');
        }, 20); 
    }
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);