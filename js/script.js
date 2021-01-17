$(document).ready(function() {
    $('.pre-loader').fadeOut(400, function() {
        $(this).remove();
    });

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
            $(".navbar-nav").css('visibility', 'visible');
            $(".navbar-brand").css('visibility', 'visible');
            $(".navbar").addClass("container");

        } else {
            $(".custom-nav").addClass("position-absolute container");
            $(".custom-nav").removeClass("position-fixed container-fulied");
            $(".navbar").removeClass("container");
        }
    });

    $('footer #send').click(function() {
        var email = $('footer #email').val();

        if (email == '') {
            $('.alert-dismissible').remove();
            $('.newsletter').append(`
                <div class="alert mt-4 alert-danger alert-dismissible fade show" role="alert">
                    Enter Your <strong>Email!</strong> Please.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `);
        } else {
            $('.alert-dismissible').remove();
            $('.newsletter').append(`
                <div class="alert mt-4 alert-success alert-dismissible fade show" role="alert">
                    Sent <strong>Email!</strong> Succesfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `);
        }
    });
});