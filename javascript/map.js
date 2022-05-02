var HOME_PATH = window.HOME_PATH || ".";
var missonSpot = new naver.maps.LatLng(37.5579733, 126.9772788),
  map = new naver.maps.Map("sample-map", {
    center: missonSpot,
    zoom: 16,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: missonSpot,
  });
var contentString = [
  '<div class="iw_inner">',
  "   <h3>시험 출발 장소</h3>",
  "   <p>📍회현역 5번 출구",
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