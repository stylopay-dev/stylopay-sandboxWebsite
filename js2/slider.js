// const sliderWrapper = document.querySelector('.swiper-wrapper');
// const swiperPaginations=document.querySelector('.swiper-pagination').children;
 
// var c = 1;

// function slider() {
//     if (c ===4) {
//         swiperPaginations[c-1].classList.remove('swiper-pagination-bullet-active');
//         sliderWrapper.style.transform = `translateX(${-100*c}%)`;
//         c = 0;
//         swiperPaginations[c].classList.add('swiper-pagination-bullet-active');
//         setTimeout(() => {
            
            
//             sliderWrapper.classList.remove('sliding');
//             sliderWrapper.style.transform = `translateX(${-100*c}%)`;
//             c++;
//         }, 400)

//     } else {
//         swiperPaginations[c-1].classList.remove('swiper-pagination-bullet-active');
//         swiperPaginations[c].classList.add('swiper-pagination-bullet-active');
//         sliderWrapper.classList.add('sliding');
//         sliderWrapper.style.transform = `translateX(${-100*c}%)`;
//         c++;
        
//     }

// }


var c=1;

const headers=document.querySelectorAll('.carousel-header');
const carouselDots=document.querySelectorAll('.carouselDot');
carouselDots[c-1].classList.add('swiper-pagination-bullet-active');
function slider(){
if(c===4){
    carouselDots[c-1].classList.remove('swiper-pagination-bullet-active');
             
             for(i=0;i<headers.length;i++){
                headers[i].classList.add('sliding');
                headers[i].style.transform = `translateX(${-100*c}%)`;
                
            }
            c = 0;
    carouselDots[c].classList.add('swiper-pagination-bullet-active');

            setTimeout(
                ()=>{
                    for(i=0;i<headers.length;i++){
                        headers[i].classList.remove('sliding');
                        headers[i].style.transform = `translateX(${-100*c}%)`;
                        
                    }
                   
                    c++;
                   
                },400);
}
else{
    for(i=0;i<headers.length;i++){
        headers[i].classList.add('sliding');
        headers[i].style.transform = `translateX(${-100*c}%)`;
        
    }
    carouselDots[c-1].classList.remove('swiper-pagination-bullet-active');
    c++;
    carouselDots[c-1].classList.add('swiper-pagination-bullet-active');
}
}
window.addEventListener('load', function () {
    setInterval(slider, 6000)
});