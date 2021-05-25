$(function(){
    changeSlide();
    
        function changeSlide(){
            let currentIndex = 0;
            let maxIndex = $('.main-display .imgbanner').length;
            let delay = 4000;
            setInterval(function(){
            $('.main-display .imgbanner').eq(currentIndex).fadeOut(2000);
            currentIndex++;
            if(currentIndex == maxIndex){
                currentIndex = 0;
            }
            $('.main-display .imgbanner').eq(currentIndex).fadeIn(2000);
             },delay);
        }
    
})