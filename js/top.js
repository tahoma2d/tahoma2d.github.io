$(function() {
    $('.top').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});