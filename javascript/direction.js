$(".see-direction-deoksu").click(function () {
    $(".direction-page").hide();
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

$(".close-direction-deoksu").click(function () {
    $(".direction-deoksu").hide();
    localStorage.setItem("direction-deoksu-showed", true);
    location.reload();
});

$(".close-sesil").click(function () {
    $(".direction-sesil").hide();
    localStorage.setItem("direction-sesil-showed", true);
    location.reload();
});

$(".close-rest").click(function () {
    $(".direction-rest").hide();
    localStorage.setItem("direction-rest-showed", true);
    location.reload();
});