var HOME_PATH = window.HOME_PATH || ".";

var place = new naver.maps.LatLng(37.557687, 126.976935),
  map = new naver.maps.Map("mission-map", {
    center: place.destinationPoint(0, 500),
    zoom: 15,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: place,
  });

var contentString = [
  '<div class="pad20 map-font">',
  "   <span>1번 문제 장소</span>",
  "   <p>중구 퇴계로 37-2</p>",
  "</div>",
].join("");

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
});

naver.maps.Event.addListener(marker, "click", function (e) {
  (position = place.getPosition()),
    (url =
      "http://map.naver.com/index.nhn?enc=utf8&level=2&lng=" +
      position.lng() +
      "&lat=" +
      position.lat() +
      "&pinTitle=야탑중학교&pinType=SITE");

  window.open(url);
});
