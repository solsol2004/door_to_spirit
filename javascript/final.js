let lastQuizEntered = localStorage.getItem("last-quiz-entered");
let usedHintResult = parseInt(localStorage.getItem("used-hint"));
let myAnimal = '../../images/인간.png'

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
            $(".card-front").attr("src", "images/호랑이.png");
            myAnimal = 'https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600'
        } else if(usedHintResult >5 && usedHintResult >=10) {
            $(".hint-used-rating").text("우");
            $(".card-front").attr("src", "images/호랑이.png");
            myAnimal = 'https://media.moddb.com/images/members/5/4550/4549205/duck.jpg'
        } else if(usedHintResult >10 && usedHintResult >=15) {
            $(".hint-used-rating").text("미");
            $(".card-front").attr("src", "images/토끼.png");
            myAnimal = '../../images/토끼.png'
        } else {
            $(".hint-used-rating").text("양");
            $(".card-front").attr("src", "images/강아지풀.png");
            myAnimal = '../../images/강아지풀.png'
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
        $('body').css('height', 100 + "vh");
        $('body').css('width', 100 + "vw");
        $('.very-last-haechi').delay(300).fadeIn('slow');
        $('.very-final-word-video').playbackRate = 0.5; 
        setTimeout(function(){
            $('.end-test').show();
         }, 10000);
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
        url: myAnimal
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } 
  });