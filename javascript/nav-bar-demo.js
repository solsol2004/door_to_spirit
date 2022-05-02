$(".image-button").click(function () {
    $(".image-detail").toggle(); 
    $(".map-detail").hide(); 
    $(".hint-toggle").hide();
});

$(".map-button").click(function () {
    $(".map-detail").toggle(); 
    $(".image-detail").hide(); 
    $(".hint-toggle").hide();
});

$(".hint-select-button").click(function () {
    $(".hint-toggle").toggle(); 
    $(".map-detail").hide(); 
    $(".image-detail").hide();
});