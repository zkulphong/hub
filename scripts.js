$(document).ready(function() {
    $("#more-info-btn-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#info-page").offset().top
        }, 1000);
    });

    $("#go-home").click(function() {
        $('html, body').animate({
            scrollTop: $("#home-page").offset().top
        }, 1000);
    });

    $("#go-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
    });

    $("#go-involved").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#go-partners").click(function() {
        $('html, body').animate({
            scrollTop: $("#partners").offset().top
        }, 1000);
    });
});
