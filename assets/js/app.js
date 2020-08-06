$(document).ready(function () {
    $("#menu-responsive").click(function () {
        $("body").toggleClass("active");
    });

    $(".mark-bg").click(function () {
        $("body").toggleClass("active");
    });

    $(document).scroll(function () {
        let scrollHeader = $(window).scrollTop();

        if (scrollHeader > 50) {
            $(".header").addClass("header__bg");
        } else {
            $(".header").removeClass("header__bg");
        }
    });

    $(".course-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".testimobial__list").slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        speed: 300,
    });

    $(document).ready(function ($) {
        $(".counter-item").counterUp({
            delay: 10,
            time: 800,
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $("#go-to-top").fadeIn();
        } else {
            $("#go-to-top").fadeOut();
        }
    });

    $("#go-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            "slow"
        );
    });
});
