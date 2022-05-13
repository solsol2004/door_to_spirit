const pageThree = document.getElementById("third-page");
const pageFour = document.getElementById("page-four");
const pageFive = document.getElementById("fifth-page");
const haechiForm = document.getElementById("gotohaechi");
let yes = document.getElementById("materials-yes");
const fourBtn = document.getElementById("fourBtn");
const realUsername = document.getElementById("username-change");

const savedUsername = localStorage.getItem("username");

//Firebase에 있는 코드를 만료하기 위해 사용하는 키//
let userCodeEntered = localStorage.getItem("user-code");

realUsername.innerText = `${savedUsername}님 안녕하세요!`;

function thirdPage(event) {
  event.preventDefault();
  pageThree.classList.add("hidden");
  pageFour.classList.remove("hidden");
  realUsername.innerText = `${savedUsername}님 안녕하세요!`;
  db.collection("questCode")
    .doc(userCodeEntered)
    .update({
      Used: "true"
    });
}

function forthPage(event) {
  event.preventDefault();
  haechiForm.submit();
}

if (yes !== null) {
  yes.addEventListener("click", thirdPage);
}

if (haechiForm !== null) {
  haechiForm.addEventListener("submit", forthPage);
}
