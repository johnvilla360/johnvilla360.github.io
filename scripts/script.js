$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(function () {
    $('#box1').hover(function () {
        $('#box1').css('opacity', '0.7');
        $('#boxText1').css('visibility', 'visible');
        $('#link1').css('visibility', 'visible');
    }, function () {
        $('#box1').css('opacity', '1');
        $('#boxText1').css('visibility', 'hidden');
        $('#link1').css('visibility', 'hidden');
    });
});

$(function () {
    $('#box2').hover(function () {
        $('#box2').css('opacity', '0.7');
        $('#boxText2').css('visibility', 'visible');
        $('#link2').css('visibility', 'visible');
    }, function () {
        $('#box2').css('opacity', '1');
        $('#boxText2').css('visibility', 'hidden');
        $('#link2').css('visibility', 'hidden');
    });
});

$(function () {
    $('#box3').hover(function () {
        $('#box3').css('opacity', '0.7');
        $('#boxText3').css('visibility', 'visible');
        $('#link3').css('visibility', 'visible');
    }, function () {
        $('#box3').css('opacity', '1');
        $('#boxText3').css('visibility', 'hidden');
        $('#link3').css('visibility', 'hidden');
    });
});

$(function () {
    $('#box4').hover(function () {
        $('#box4').css('opacity', '0.7');
        $('#boxText4').css('visibility', 'visible');
        $('#link4').css('visibility', 'visible');
    }, function () {
        $('#box4').css('opacity', '1');
        $('#boxText4').css('visibility', 'hidden');
        $('#link4').css('visibility', 'hidden');
    });
});