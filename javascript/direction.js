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

$(".rest-finish-confirm").click(function () {
    $(".donyi-arrive").hide();
    $(".donyi-ticket").show(); 
});

$(".donyi-arrive-confirm").click(function () {
    $(".donyi-ticket").hide();
    $(".donyi-start").show(); 
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

$(".close-direction-donyi").click(function () {
    $(".direction-donyi").hide();
    localStorage.setItem("direction-donyi-showed", true);
    location.reload();
});

$(".close-train").click(function () {
    $(".direction-train").hide();
    localStorage.setItem("direction-train-showed", true);
    location.reload();
});

$(".close-river").click(function () {
    $(".direction-river").hide();
    localStorage.setItem("direction-river-showed", true);
    location.reload();
});

$(".blue-yellow").click(function () {
    $(".quiz-input").val("DEATH");
});

$(".blue-red").click(function () {
    $(".quiz-input").val("LIFE");
});

$(".yellow-red").click(function () {
    $(".quiz-input").val("BIRTH");
});

$(".blue-green").click(function () {
    $(".quiz-input").val("MEMORY");
});

$(".haechi-face-1").click(function () {
    $(".quiz-input").val("LAST");
});

$(".haechi-face-2").click(function () {
    $(".quiz-input").val("STAGE");
});

$(".haechi-face-3").click(function () {
    $(".quiz-input").val("FINAL");
});

$(".haechi-face-4").click(function () {
    $(".quiz-input").val("CHANCE");
});
