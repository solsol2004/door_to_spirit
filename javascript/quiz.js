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

if(chapter === 6) {
  if(directionDeoksuShowed !== "true"){
  $(".quiz1-background").hide();
  $(".direction-deoksu").show();
}}

if(chapter === 12) {
  if(directionSesilShowed !== "true"){
    $(".quiz1-background").hide();
    $(".direction-sesil").show();
    sesilMap();
  }}


if(chapter === 14) {
    if(directionRestShowed !== "true"){
      $(".quiz1-background").hide();
      $(".direction-rest").show();
    }}

if(chapter === 15) {
    if(directionDonyiShowed !== "true"){
      $(".quiz1-background").hide();
      $(".direction-donyi").show();
    }}

if(chapter === 20) {
    $(".quiz-context").hide();
    $(".gurakbu").show();
}

if(chapter === 21) {
  if(directionTrainShowed !== "true"){
    $(".quiz1-background").hide();
    $(".direction-train").show();
    trainMap();
  }}

if(chapter === 22) {
  if(directionCallShowed !== "true"){
    window.location.href = "phone.html";
    } else if (directionCallShowed === "true" && directionRiverShowed !== "true") {
      $(".quiz1-background").hide();
      $(".direction-river").show();
      riverMap();
    } else {
      $(".quiz-context").hide();
    $(".chapter-22").show();
    }}

   
if(chapter === 24) {
  window.location.href = "final.html";}




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
    lat = parseFloat(result.data().lat);
    long = parseFloat(result.data().long);
    mapTitle = result.data().mapTitle;
    mapAddress = result.data().mapAddress;
    map();

    if(chapter <6){
      $(".quiz1-background").css({"background-image":"url(images/7017.jpg)"});
    }
     else if(chapter >=6 && chapter <15) {
      $(".quiz1-background").css({"background-image":"url(images/덕수궁.jpg)"}); 
    } else if(chapter >= 15) {$(".quiz1-background").css({"background-image":"url(images/돈의문.jpg)"}); }
    

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
      if($(".quiz-input").val().toUpperCase()===result.data().answer){
        localStorage.setItem("chapter", ++chapter);
        localStorage.setItem("hint-clicked", false);
        localStorage.setItem("answer-clicked", false);

        if (chapter > 1) {
        $(".map-title").text(mapTitle);
        $(".map-description").text(`📍 ${mapAddress}`);}

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
var contentString = [
  '<div class="iw_inner">',
  '<h3 class="map-title">',
  "   1번 문제 장소</h3>",
  '<p class="map-description">',
  "   📍중구 퇴계로 37-2",
  "   </p>",
  "</div>",
].join("");
var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 140,
  borderColor: "#606060e6",
  borderWidth: 1,
  borderStyle: "double",
  backgroundColor: "white",
  padding: 3,
  anchorColor: "white",
  pixelOffset: new naver.maps.Point(20, -10),
});
naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
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
var contentString = [
  '<div class="iw_inner">',
  '<h3 class="map-title">',
  "   12번 문제 장소</h3>",
  '<p class="map-description">',
  "   📍중구 세종대로19길 16",
  "   </p>",
  "</div>",
].join("");
var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 140,
  borderColor: "#606060e6",
  borderWidth: 1,
  borderStyle: "double",
  backgroundColor: "white",
  padding: 3,
  anchorColor: "white",
  pixelOffset: new naver.maps.Point(20, -10),
});
naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
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
var contentString = [
  '<div class="iw_inner">',
  '<h3 class="map-title">',
  "   21번 문제 장소</h3>",
  '<p class="map-description">',
  "   📍종로구 신문로2가 1-15",
  "   </p>",
  "</div>",
].join("");
var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 140,
  borderColor: "#606060e6",
  borderWidth: 1,
  borderStyle: "double",
  backgroundColor: "white",
  padding: 3,
  anchorColor: "white",
  pixelOffset: new naver.maps.Point(20, -10),
});
naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
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
var contentString = [
  '<div class="iw_inner">',
  '<h3 class="map-title">',
  "   비밀의 장소</h3>",
  '<p class="map-description">',
  "   📍중구 청계광장 부근",
  "   </p>",
  "</div>",
].join("");
var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 140,
  borderColor: "#606060e6",
  borderWidth: 1,
  borderStyle: "double",
  backgroundColor: "white",
  padding: 3,
  anchorColor: "white",
  pixelOffset: new naver.maps.Point(20, -10),
});
naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
});
}

