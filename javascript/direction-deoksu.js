$(".see-direction-deoksu").click(function () {
    $("#direction-page").hide();
    $("#maru-direction").show(); 
});

$(".maru-direction-confirm").click(function () {
    $("#maru-direction").hide();
    $(".deoksu-arrive").show(); 
});

$(".deoksu-arrive-confirm").click(function () {
    $(".deoksu-arrive").hide();
    $(".deoksu-ticket").show(); 
});

$(".deoksu-ticket-confirmation").click(function () {
    window.location.href='quiz.html';
});