$(function(){
    let currentIndex = 0;
    let maxIndex = $('.imgbanner').length;
    let delay = 4000;

    initSlide();

        function initSlide(){
            $('.imgbanner').eq(0).length;
            setInterval(function(){
                changeSlide();
            },delay);
        }

        function changeSlide(){
            $('.imgbanner').eq(currentIndex).fadeOut(2000);
            currentIndex++;
            if(currentIndex == maxIndex){
                currentIndex = 0;
            }
            $('.imgbanner').eq(currentIndex).fadeIn(2000);
        }
    
})