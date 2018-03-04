$(window).scroll(function () {
    if ($('.skill-list').isInViewport()) {
        $('.progress .progress-bar').css("width",
                function () {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    }
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.top-link').addClass('active');
    } else {
        $('.top-link').removeClass('active');
    }
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    if (elementBottom > viewportTop && elementTop < viewportBottom) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });

    var typed = new Typed('.developer-typed', {
        strings: ["developer by mind."],
        typeSpeed: 100,
        fadeOut: true,
        showCursor: false,
        onComplete: (self) => {
            var typed1 = new Typed('.developer-sub-typed', {
                strings: ["Front End Developer who focuses on writing clean, elegant and efficient code."],
                typeSpeed: 50,
                fadeOut: true,
                showCursor: false,
                onComplete: (self) => {
                    var typed2 = new Typed('.designer-typed', {
                        strings: ["designer by heart."],
                        typeSpeed: 100,
                        fadeOut: true,
                        showCursor: false,
                        onComplete: (self) => {
                            var typed3 = new Typed('.designer-sub-typed', {
                                strings: ["UX+UI Designer with a passion for designing beatuiful and functional user experiences."],
                                typeSpeed: 50,
                                fadeOut: true,
                                showCursor: false
                            });
                        }
                    });
                }
            });
        }
    });

    $('.active-link-switcher .nav-link').on('click', function () {
        $('.active-link-switcher .nav-link').removeClass('active');
        $(this).addClass('active');
        $('.cst-navbar').removeClass('active');
    });

    $('.btn-menu').on('click', function () {
        $('.cst-navbar').addClass('active');
    });
    $('.btn-close').on('click', function () {
        $('.cst-navbar').removeClass('active');
    });
    $('.btn-close2').on('click', function () {
        $('body').css('overflow', 'auto');
        $(this).parent().removeClass('active');
    });
    $('.portfolio-item').on('click', function () {
        var itemName = "";
        var itemName = $(this).data('item');
        if (itemName) {
            itemName = "#" + itemName;
            $('body').css('overflow', 'hidden');
            $('.work').find(itemName).addClass('active');
        }
    });
});