const hintBtn = document.querySelector(".hint-selection");
const hintWhiteBtn = document.querySelector(".hint-detail");
const hideBox = document.querySelector(".hide");
const hintDetailId = document.querySelector(".hint-detail");

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

document.onclick = function (e) {
  if (
    e.target.id !== "hint-detail-id" &&
    e.target.id !== "select-hint" &&
    e.target.id !== "select-answer" &&
    e.target.id !== "select-answer-active" &&
    e.target.id !== "navbardetail"
  ) {
    hintDetailId.style.display = "none";
  }
};
