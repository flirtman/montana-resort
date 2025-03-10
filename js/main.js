$(window).on('scroll', function() {
    /** Animation **/
    const topScroller = $('.top-scroller');
    const scroller = $(window).scrollTop();
    const mainHeader = $('.main-header').height();

    const sectionAbout = $('.section-about');
    if(scroller > mainHeader - mainHeader / 2) {
        sectionAbout.attr('data-show', 'true');
    } else {
        sectionAbout.attr('data-show', 'false');
    }

    const sectionOffers = $('.our-offers');
    if(scroller > sectionOffers.height() / 2 + sectionAbout.height()) {
        sectionOffers.attr('data-show', 'true');
    } else {
        sectionOffers.attr('data-show', 'false');
    }

    if(scroller > (mainHeader - 100)) {
        topScroller.show()
    } else {
        topScroller.hide()
    }
});

$(document).ready(function () {
    /** Mobile Nav ***/
    const topScroller = $('.top-scroller');
    const mainHeader = $('.main-header nav');
    const mobileNav = $('.mobile-nav');

    mobileNav.on('click', function () {
        let state = mainHeader.attr('data-open');
        if(state === 'true') {
            state = false;

            setTimeout(function () {
                $('body').removeClass('no-scroll');
            }, 500)
        } else {
            state = true;
            $('body').addClass('no-scroll');
        }
        mainHeader.attr('data-open', state);
    });

    $('li a', mainHeader).on('click', function () {
        $('body').removeClass('no-scroll');
        mainHeader.attr('data-open', 'false');
    });

    /** ToTop Scroller ***/
    topScroller.on('click', function () {
        $('html').animate({ scrollTop: 0 }, 800);
    });

    /** Video ***/
    const videoModal = $(".video-modal");
    function videoHide () {
        videoModal.hide();
        $(".video-modal iframe").attr("src", $(".video-modal iframe").attr("src"));
    }

    $(".video-open-btn").on("click", function () {
        videoModal.css({display: 'flex'});
    });
    $(".video-hide-btn").on("click", function () {
        videoHide();
    });
    videoModal.on("click", function(event) {
        if ($(event.target).is(".video-modal")) {
            videoHide();
        }
    });
})

