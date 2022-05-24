let finalHaechiSaid = localStorage.getItem("final-haechi-said");
let lastQuizEntered = localStorage.getItem("last-quiz-entered");
let usedHintResult = parseInt(localStorage.getItem("used-hint"));
let userAnimal = "https://i.ibb.co/TwtKNNy/image.png";

window.onload = function() {
    setTimeout (function () {
      scrollTo(0,0);
  
    },100);
  
  }

$(document).ready(function(){if(lastQuizEntered === "true"){
      $(".final-first").hide();
      $(".quiz1-background").hide();
      $(".haechi-final-words").show();
} else if (finalHaechiSaid === "true") {
    $(".final-first").hide();
    $(".quiz1-background").show();
}

});


$(".paste-final-answer").click(function () {
    $(".quiz-input").val("YOU WERE KILLED BY YOURSELF");
    $(".nav-bar-details").hide();
});

$(".show-last-quiz").click(function () {
    $(".final-first").hide();
    $(".quiz1-background").show();
    localStorage.setItem("final-haechi-said", true);
});


$(".quiz-enter").click(function () {
    //정답 맞을 때 //
    if($(".quiz-input").val().toUpperCase().replace(/ /g, '')==="YOUWEREKILLEDBYYOURSELF")
    {
        localStorage.setItem("last-quiz-entered", true);
        $(".quiz1-background").hide();
        $('.haechi-final-words').delay(1000).fadeIn('slow');

    } 
    //정답이 비어있을 때 //
    else if ($(".quiz-input").val().toUpperCase() === "") {return false;} 

    //정답 틀릴 때 //
    else {
    $(".wrong-answer").show();
    $(".wrong-answer-close").show();
    $(".nav-bar").css('opacity', 0.2);
    $(".quiz").css('opacity', 0.2);}

    });

    $(".wrong-answer-close").click(function () {
      $(".wrong-answer").hide();
      $(".wrong-answer-close").hide();
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
           } else if(usedHintResult >5 && usedHintResult <=10) {
            $(".hint-used-rating").text("우");
            $(".card-front").attr("src", "images/호랑이.png");
            userAnimal = "https://i.ibb.co/PYHBWjZ/image.png";
        } else if(usedHintResult >10 && usedHintResult <=15) {
            $(".hint-used-rating").text("미");
            $(".card-front").attr("src", "images/토끼.png");
            userAnimal = "https://i.ibb.co/pWJ306B/image.png";
        } else {
            $(".hint-used-rating").text("양");
            $(".card-front").attr("src", "images/강아지풀.png");
            userAnimal = "https://i.ibb.co/kh7GnDs/image.png";
        }
    });

    $(".view-my-animal").click(function () {
        $(".reborn-animation").hide();
        $(".reborn-animal").show();});


     $(".view-flip-coin").click(function () {
        $(".reborn-animal").hide();
        $(".flip-coin").show();});
    

    $(".close-flip-coin").click(function () {
        $(".flip-coin").hide();
        window.location.href = "final-words.html";
       
    } );

    $(".end-test").click(function () {
        window.location.href = "menu.html";
    })


const title = document.title;
const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;
const shareButton = document.querySelector(".saveThisAnimal")

shareButton.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: '나의 환생',
        url: userAnimal
      })
      .catch(console.error);
    } 
  });