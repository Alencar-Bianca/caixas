$(function(){
    $('nav li a').click(function(){
        let href = $(this).attr('href');

        $('html,body').animation({'scrollTop':top});
         
        return false;
    })
})