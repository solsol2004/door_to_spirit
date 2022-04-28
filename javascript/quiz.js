const hintBtn = document.querySelector(".hint-selection");
const hintWhiteBtn = document.querySelector(".hint-description");
const answerWhiteBtn = document.querySelector(".answer-description");
const hideBox = document.querySelector(".hide");
const hintDetailId = document.querySelector(".hint-detail");
const mapDetail = document.querySelector(".map-detail");
let usedHintCount = 0;

function hintSelectFunction() {
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
  if (mapDetail.style.display === "none") {
    mapDetail.style.display = "flex";
  } else {
    mapDetail.style.display = "none";
  }
}

document.onclick = function (e) {
  if (
    e.target.id !== "hint-detail-id" &&
    e.target.id !== "select-hint" &&
    e.target.id !== "select-answer" &&
    e.target.id !== "navbardetail"
  ) {
    answerWhiteBtn.style.display = "none";
    hintWhiteBtn.style.display = "none";
  }
};
