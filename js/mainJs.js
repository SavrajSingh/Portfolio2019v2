$( document ).ready(function() {

    $('a.scroll').click(function(){
        $('html, body').animate({
        scrollTop: $('#about').offset().top - 20}, 'slow');
    });

    $('a.resume').click(function(){
        $('html, body').animate({
        scrollTop: $('#resume').offset().top - 20}, 'slow');
    });

    $('a.contact').click(function(){
        $('html, body').animate({
        scrollTop: $('#contact').offset().top - 20}, 'slow');
    });
})
