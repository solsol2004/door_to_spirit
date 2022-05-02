let hintClicked = localStorage.getItem("hint-clicked");
//정답을 사용했었는지 확인하는 코드//
let answerClicked = localStorage.getItem("answer-clicked");
//사용한 총 힌트수//
let usedHint = parseInt(localStorage.getItem("used-hint"));



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
    if(hintClicked !== "true"){
    localStorage.setItem("used-hint", ++usedHint);
    $(".select-answer-inactive").attr("src", "images/answer-white.png");
    localStorage.setItem("hint-clicked", true);}
    $(".hint-selection").hide();
    $(".hint-description").show();
});

$(".answer-button").click(function () {
    if (hintClicked !== "true") {
        return false;
      } else {
        if (answerClicked !== "true") {
          localStorage.setItem("used-hint", ++usedHint);
          localStorage.setItem("answer-clicked", true);
        }
        $(".hint-selection").hide();
        $(".answer-description").show();
      }
});

$(document).on('click', function (e) {
    if ($(e.target).closest(".nav-bar").length === 0) {
        $(".nav-bar-details").hide();
        if ( $('.hint-description').css('display') !== 'none' && answerClicked !== "true") { 
            this.location.reload();}
    }

});

function makeAnswerWhite() {
    if (hintClicked === "true") {
        $(".select-answer-inactive").attr("src", "images/answer-white.png");
      }
}