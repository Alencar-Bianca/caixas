$(function(){
    changeSlide();
    
        function changeSlide(){
            let currentIndex = 0;
            let maxIndex = $('.imgbanner').length;
            let delay = 4000;
            setInterval(function(){
            $('.imgbanner').eq(currentIndex).fadeOut(2000);
            currentIndex++;
            if(currentIndex == maxIndex){
                currentIndex = 0;
            }
            $('.imgbanner').eq(currentIndex).fadeIn(2000);
             },delay);
        }
    
})