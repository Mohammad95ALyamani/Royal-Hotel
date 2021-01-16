$(document).ready(function() {
    $('.nav-link').click(function() {
        $(this).addClass('active-link');
        $(this).parent().siblings().children().removeClass('active-link');
    });

    var nav_offset_top = $('.navbar ').height() + 50;
    console.log(nav_offset_top);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
            $(".custom-nav").removeClass("position-absolute container");

            $(".custom-nav").addClass("position-fixed container-fulied");
            $(".navbar").addClass("container");

        } else {
            $(".custom-nav").addClass("position-absolute container");
            $(".custom-nav").removeClass("position-fixed container-fulied");
            $(".navbar").removeClass("container");
        }
    });
});