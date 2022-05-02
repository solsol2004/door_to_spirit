
$(".image-button").click(function () {
    $(".nav-bar-details").show();
    $(".image-detail").toggle(); 
    $(".map-detail").hide(); 
    $(".hint-toggle").hide();
    $('.hint-description').hide();
    $('.answer-description').hide();
});

$(".map-button").click(function () {
    $(".nav-bar-details").show();
    $(".map-detail").toggle(); 
    $(".image-detail").hide(); 
    $(".hint-toggle").hide();
    $('.hint-description').hide();
    $('.answer-description').hide();
});

$(".hint-select-button").click(function () {
    $(".nav-bar-details").show();
    if ( $('.hint-description').css('display') !== 'none' || $('.answer-description').css('display') !== 'none') { 
        $('.hint-description').hide();
        $('.answer-description').hide();}
    $(".hint-toggle").toggle(); 
    $(".map-detail").hide(); 
    $(".image-detail").hide();
    makeAnswerWhite();
});


$(".hint-button").click(function () {
    $(".select-answer-inactive").attr("src", "images/answer-white.png");
    $(".hint-selection").hide();
    $(".hint-description").show();
});

$(".answer-button").click(function () {
        $(".hint-selection").hide();
        $(".answer-description").show();
});

$(document).on('click', function (e) {
    if ($(e.target).closest(".nav-bar").length === 0) {
        $(".nav-bar-details").hide();
    }

});