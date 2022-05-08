let lastQuizEntered = localStorage.getItem("last-quiz-entered");
let usedHintResult = parseInt(localStorage.getItem("used-hint"));

window.onload = function() {
    setTimeout (function () {
      scrollTo(0,0);
  
    },100);
  
  }

$(document).ready(function(){if(lastQuizEntered === "true"){
      $(".final-first").hide();
      $(".quiz1-background").hide();
      $(".animation-background").show();
      $('body').css('height', 100 + "vh");
        $('body').css('width', 100 + "vw");
        $('.animation-background').delay(300).fadeIn('slow');  
        $('.animation-background').delay(4500).fadeOut('slow'); 
        setTimeout(function(){
            $('.haechi-final-words').show();
            $('body').css('height', 150 + "vh");// or fade, css display however you'd like.
         }, 4800);
      }});


$(".paste-final-answer").click(function () {
    $(".quiz-input").val("YOU WERE KILLED BY YOURSELF");
    $(".nav-bar-details").hide();
});

$(".show-last-quiz").click(function () {
    $(".final-first").hide();
    $(".quiz1-background").show();
});


$(".quiz-enter").click(function () {
    //정답 맞을 때 //
    if($(".quiz-input").val().toUpperCase().replace(/ /g, '')==="YOUWEREKILLEDBYYOURSELF")
    {
        localStorage.setItem("last-quiz-entered", true);
        $(".quiz1-background").hide();
        $('body').css('height', 100 + "vh");
        $('body').css('width', 100 + "vw");
        $('.animation-background').delay(300).fadeIn('slow');  
        $('.animation-background').delay(4500).fadeOut('slow'); 
        setTimeout(function(){
            $('.haechi-final-words').show();
            $('body').css('height', 150 + "vh");// or fade, css display however you'd like.
         }, 4800);
    } 
    //정답이 비어있을 때 //
    else if ($(".quiz-input").val().toUpperCase() === "") {return false;} 

    //정답 틀릴 때 //
    else {
    $(".wrong-answer").show();
    $(".nav-bar").css('opacity', 0.2);
    $(".quiz").css('opacity', 0.2);}

    });

    $(".wrong-answer").click(function () {
      $(".wrong-answer").hide();
    $(".nav-bar").css('opacity', 1);
    $(".quiz").css('opacity', 1)});

    $(".haechi-reborn").click(function () {
    $(".haechi-final-words").hide();
    $(".haechi-final-words2").show();});

    $(".ready-reborn").click(function () {
        $(".haechi-final-words2").hide();
        $(".reborn-animation").show();
        $(".hint-used-number").text(usedHintResult);
        if(usedHintResult <=5) {
            $(".hint-used-rating").text("수");
        } else if(usedHintResult >5 && usedHintResult >=10) {
            $(".hint-used-rating").text("우");
        } else if(usedHintResult >10 && usedHintResult >=15) {
            $(".hint-used-rating").text("미");
        } else {
            $(".hint-used-rating").text("양");
        }
    });

    $(".view-my-animal").click(function () {
        $(".reborn-animation").hide();
        $(".reborn-animal").show();});

     $(".close-animal").click(function () {
        $(".reborn-animal").hide();
        $(".flip-coin").show();});
