const hintBtn = document.querySelector(".hint-selection");
const hintWhiteBtn = document.querySelector(".hint-description");
const answerWhiteBtn = document.querySelector(".answer-description");
const hideBox = document.querySelector(".hide");
const hintDetailId = document.querySelector(".hint-detail");
const mapDetail = document.querySelector(".map-detail");
const imageDetail = document.querySelector(".image-detail");
const hideandseek = document.querySelector(".nav-bar-details");
let usedHintCount = 0;

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
  document.getElementById("select-answer").src = "images/answer-white.png";
  if (hintWhiteBtn.style.display === "none") {
    hintWhiteBtn.style.display = "flex";
    hintBtn.style.display = "none";
  } else {
    hintWhiteBtn.style.display = "none";
  }
}

function answerFunction() {
  if (answerWhiteBtn.style.display === "none") {
    answerWhiteBtn.style.display = "flex";
    hintBtn.style.display = "none";
  } else {
    answerWhiteBtn.style.display = "none";
  }
}

function mapFunction() {
  mapDetail.style.display = "none";
  hintBtn.style.display === "none";
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
  hintBtn.style.display === "none";
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
    e.target.id !== "nav-bar-top" &&
    e.target.id !== "select-hint" &&
    e.target.id !== "select-answer" &&
    e.target.id !== "navbardetail"
  ) {
    answerWhiteBtn.style.display = "none";
    hintWhiteBtn.style.display = "none";
  }
};
