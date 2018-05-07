$(document).ready(function () {
    $('.material-input input').on('focus', function () {
        $(this).parent().find('.material-label').addClass('active');
    });
    $('.material-input input').on('blur', function () {
        if (this.value === "") {
            $(this).parent().find('.material-label').removeClass('active');
        }
    });
    $('.testimonial').slick({
        centerMode: true,
        slidesToShow: 3,
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }

});