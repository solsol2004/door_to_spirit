var HOME_PATH = window.HOME_PATH || ".";
var missonSpot = new naver.maps.LatLng(37.557687, 126.976935),
  map = new naver.maps.Map("mission-map", {
    center: missonSpot,
    zoom: 20,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: missonSpot,
  });

var contentString = [
  '<div class="iw_inner">',
  "   <h3>1번 문제 장소</h3>",
  "   <p>📍중구 퇴계로 37-2",
  "   </p>",
  "</div>",
].join("");

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 140,
  border: "1px double #ffb005e6",
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
