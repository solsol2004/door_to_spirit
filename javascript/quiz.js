//현 챕터//
let chapter = parseInt(localStorage.getItem("chapter"));


//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();

//경도 위도 Firebase에서 불러올때//
let lat = null;
let long = null;

let mapTitle = null;
let mapAddress = null;

self.navigationController?.interactivePopGestureRecognizer?.isEnabled = false

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

      if(chapter === 6) {
        window.location.href='direction-deoksu.html';
      }

      if(chapter === 12) {
        window.location.href='sesil.html';
      }

      if(chapter === 14) {
        window.location.href='direction-donyi.html';
      }

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

