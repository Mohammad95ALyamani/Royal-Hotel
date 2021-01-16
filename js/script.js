$(document).ready(function() {
    $('.nav-link').click(function() {
        $(this).addClass('active-link');
        $(this).parent().siblings().children().removeClass('active-link');
    });
});