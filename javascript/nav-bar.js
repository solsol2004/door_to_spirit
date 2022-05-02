
const hintBtn = document.querySelector(".hint-selection");
const hintWhiteBtn = document.querySelector(".hint-description");
const answerWhiteBtn = document.querySelector(".answer-description");
const hideBox = document.querySelector(".hide");
const hintDetailId = document.querySelector(".hint-detail");
const mapDetail = document.querySelector(".map-detail");
const imageDetail = document.querySelector(".image-detail");
const hideandseek = document.querySelector(".nav-bar-details");

//힌트를 사용했었는지 확인하는 코드//
let hintClicked = localStorage.getItem("hint-clicked");
//정답을 사용했었는지 확인하는 코드//
let answerClicked = false;
//사용한 총 힌트수//
let usedHint = parseInt(localStorage.getItem("used-hint"));

function hintSelectFunction() {
  imageDetail.style.display = "none";
  mapDetail.style.display = "none";
  if (
    hintBtn.style.display === "none" ||
    hintWhiteBtn.style.display === "flex"
  ) {
    hintBtn.style.display = "flex";
    hintWhiteBtn.style.display = "none";
  } else {
    hintBtn.style.display = "none";
    hintWhiteBtn.style.display = "none";
  }
}

function hintFunction() {
  if (hintClicked !== "true") {
    localStorage.setItem("used-hint", ++usedHint);
    document.querySelector(".select-answer-inactive").src =
      "images/answer-white.png";
    localStorage.setItem("hint-clicked", true);
    hintWhiteBtn.style.display = "flex";
    hintBtn.style.display = "none";
  } else {
    hintWhiteBtn.style.display = "flex";
    hintBtn.style.display = "none";
  }
  console.log(usedHint);
}

function answerFunction() {
  if (hintClicked !== "true") {
    return false;
  } else {
    if (answerClicked === false) {
      localStorage.setItem("used-hint", ++usedHint);
    }
    answerWhiteBtn.style.display = "flex";
    hintBtn.style.display = "none";
    answerClicked = true;
  }
  console.log(usedHint);
}

function mapFunction() {
  imageDetail.style.display = "none";
  hintBtn.style.display = "none";
  answerWhiteBtn.style.display = "none";
  hintWhiteBtn.style.display = "none";
  if (mapDetail.style.display === "none") {
    mapDetail.style.display = "flex";
  } else {
    mapDetail.style.display = "none";
  }
}

function imageFunction() {
  mapDetail.style.display = "none";
  hintBtn.style.display = "none";
  answerWhiteBtn.style.display = "none";
  hintWhiteBtn.style.display = "none";
  if (imageDetail.style.display === "none") {
    imageDetail.style.display = "flex";
  } else {
    imageDetail.style.display = "none";
  }
}


document.onclick = function (e) {
  if (
    e.target.className !== "nav-bar-top" &&
    e.target.className !== "select-hint" &&
    e.target.className !== "select-answer-inactive" &&
    e.target.className !== "nav-bar-details"
  ) {
    answerWhiteBtn.style.display = "none";
    hintWhiteBtn.style.display = "none";
  }
};