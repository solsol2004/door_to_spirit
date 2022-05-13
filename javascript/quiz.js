//현 챕터//
let chapter = parseInt(localStorage.getItem("chapter"));

//다음 장소로 가는 지시사항아 보였는 지 확인법//
let directionDeoksuShowed = localStorage.getItem("direction-deoksu-showed");
let directionSesilShowed = localStorage.getItem("direction-sesil-showed");
let directionRestShowed = localStorage.getItem("direction-rest-showed");
let directionDonyiShowed = localStorage.getItem("direction-donyi-showed");
let directionTrainShowed = localStorage.getItem("direction-train-showed");
let directionCallShowed = localStorage.getItem("direction-call-showed");
let directionRiverShowed = localStorage.getItem("direction-river-showed");

//불이 보였는 지 확인법//
let fireShowed = localStorage.getItem("fire-showed");
let lottieFireSrc = "https://assets8.lottiefiles.com/packages/lf20_myxwinqq.json"


//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();

//경도 위도 Firebase에서 불러올때//
let lat = null;
let long = null;

let mapTitle = null;
let mapAddress = null;

window.onload = function() {
  setTimeout (function () {
    scrollTo(0,0);

  },100);

}

if(chapter === 2) {
  $(".quiz1-background").hide();
  $(".black-fire-page").show();
  $(".black-red-fire-text").show();
}


if(chapter === 6) {
  if(directionDeoksuShowed !== "true"){
    $(".quiz1-background").hide();
    $(".lottie-fire-page").show();
    $(".lottie-red-fire").show();
    $(".first-story-show").show();
  }}

if(chapter === 8) {
  $(".quiz1-background").hide();
  $(".black-fire-page").show();
  $(".black-pink-fire-text").show();
}

if(chapter === 12) {
  if(directionSesilShowed !== "true"){
    $(".quiz1-background").hide();
    $(".direction-sesil").show();
    sesilMap();
    $(".map-link").attr("src", "https://m.place.naver.com/place/1644478135/location?subtab=location");
  }}


if(chapter === 14) {
    if(directionRestShowed !== "true"){
      $(".quiz1-background").hide();
      $(".fire-active-text h3:first-child").text("네가 나를 깨워준거야?");
      $(".fire-active-text h3:nth-child(2)").text("생각났어! 정말 순수했었고 행복했었던 그때 그 기억이.");
      $(".lottie-fire-page").show();
      $(".lottie-pink-fire").show();
      $(".second-story-show").show();
    }}

if(chapter === 15) {
    if(directionDonyiShowed !== "true"){
      $(".quiz1-background").hide();
      $(".direction-donyi").show();
    }}

if(chapter === 16) {
    $(".quiz1-background").hide();
    $(".black-fire-page").show();
    $(".black-green-fire-text").show();
}
if(chapter === 20) {
$(".quiz-context").hide();
    $(".gurakbu").show();
}

if(chapter === 21) {
  if(directionTrainShowed !== "true"){
    $(".quiz1-background").hide();
    $(".direction-train").show();
    trainMap();
    $(".map-link").attr("src", "https://m.map.naver.com/search2/search.naver?query=%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%8B%A0%EB%AC%B8%EB%A1%9C2%EA%B0%80%201-15&sm=hty&style=v5#/map")}}

if(chapter === 22) {
  if(directionCallShowed !== "true"){
    $(".quiz1-background").hide();
    $(".fire-active-text h3:first-child").text("뭐지? 네가 내 기억을 찾아준거야?");
    $(".fire-active-text h3:nth-child(2)").text("뭔가 엄청나게 신나고 무모했던 것 같은 기억이 났어!");
      $(".lottie-fire-page").show();
      $(".lottie-green-fire").show();
      $(".third-story-show").show();
    } else if (directionCallShowed === "true" && directionRiverShowed !== "true") {
      $(".quiz1-background").hide();
      $(".direction-river").show();
      riverMap();
      $(".map-link").attr("src", "https://m.map.naver.com/search2/search.naver?query=%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5&sm=hty&style=v5#/map/1/13543936");
    } else {
      $(".quiz-context").hide();
    $(".chapter-22").show();
    }}

   
if(chapter === 24) {
  window.location.href = "final.html";
  localStorage.setItem("hint-clicked", false);
  localStorage.setItem("answer-clicked", false);}




db.collection("quiz")
  .doc(chapter.toString())
  .get()
  .then((result) => {
    console.log(result.data());
    $(".title").html(`제 ${chapter.toString()} 장`);
    $(".quiz-text").attr("src", result.data().text);
    if (result.data().image==="0") {
      $(".place-image").hide(); 
    } else { $(".place-image").attr("src", result.data().image);}
    $(".image-detail-text").html(`🔎 ${result.data().imageText}`);
    $(".hint-description-text").html(`💡 ${result.data().hint}`);
    $(".answer-description-text").html(`✔️ ${result.data().hintAnswer}`);
    $(".map-link").attr("href", result.data().mapLink);
    lat = parseFloat(result.data().lat);
    long = parseFloat(result.data().long);
    map();
    $(".map-title").html("hi");
    $(".map-description").html("hola");


    if(chapter <6){
      $(".quiz1-background").css({"background-image":"url(images/7017.jpg)"});
    }
     else if(chapter >=6 && chapter <14) {
      $(".quiz1-background").css({"background-image":"url(images/덕수궁.jpg)"}); 
    } else if(chapter >= 14 && chapter <22) {$(".quiz1-background").css({"background-image":"url(images/돈의문.jpg)"}); }
    

    if (chapter < 7) {
      $(".red-fire").attr("src", `images/fire/red_${chapter.toString()}.png`);
    } else if (chapter >= 7 && chapter < 16) {
      $(".red-fire").attr("src", "images/fire/red_6.png");
      $(".pink-fire").attr("src", `images/fire/pink_${chapter.toString()}.png`);
    } else if (chapter > 15 && chapter < 24) {
      $(".red-fire").attr("src", "images/fire/red_6.png");
      $(".pink-fire").attr("src", "images/fire/pink_15.png");
      $(".green-fire").attr(
        "src",
        `images/fire/green_${chapter.toString()}.png`
      );
    } else {
      $(".green-fire").attr("src", "images/fire/green_24.png");
    }

    if (chapter === 4) {
      $(".piano").show();} else {$(".piano").hide();}

    if (chapter === 13) {
      $(".sesil-gusaegun").show();
      $('.image-detail').css('height', 60 + "vh");} else {$(".sesil-gusaegun").hide();
   }  

    if (chapter === 18) {
     $(".history-museum").show();
     $('.image-detail').css('height', 60 + "vh");} else {$(".history-museum").hide();
   }

   if(chapter === 23) {
    $(".chapter-23").show();
    $(".quiz1-background").css({"background-image":"url(images/background-forloading.jpg)"});
    $('body').css('height', 190 + "vh");
    $('quiz1-background').css('height', 190 + "vh");
  }

    $(".quiz-enter").click(function () {
      //정답 맞을 때 //
      if($(".quiz-input").val().toUpperCase().replace(/ /g, '')===result.data().answer){
        localStorage.setItem("chapter", ++chapter);
        localStorage.setItem("hint-clicked", false);
        localStorage.setItem("answer-clicked", false);

        location.reload();
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

  });


function map(){
  var HOME_PATH = window.HOME_PATH || ".";
var missonSpot = new naver.maps.LatLng(lat, long),
  map = new naver.maps.Map("mission-map", {
    center: missonSpot,
    zoom: 16,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: missonSpot,
  });
}

function sesilMap(){
  var HOME_PATH = window.HOME_PATH || ".";
var sesilSpot = new naver.maps.LatLng(37.56670600, 126.97596600),
  map = new naver.maps.Map("sesil-map", {
    center: sesilSpot,
    zoom: 16,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: sesilSpot,
  });

}

function trainMap(){
  var HOME_PATH = window.HOME_PATH || ".";
var trainSpot = new naver.maps.LatLng(37.57002400, 126.97596600),
  map = new naver.maps.Map("train-map", {
    center: trainSpot,
    zoom: 16,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: trainSpot,
  });
}


function riverMap(){
  var HOME_PATH = window.HOME_PATH || ".";
var riverSpot = new naver.maps.LatLng(37.56919300, 126.97754600),
  map = new naver.maps.Map("river-map", {
    center: riverSpot,
    zoom: 16,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: riverSpot,
  });
}

