let codeForm = document.getElementById("code-bottom");
let nameForm = document.getElementById("name-bottom");
const myName = document.getElementById("name-input");

const HIDDEN_CLASSNAME = "hidden";

function firstPage(event) {
  event.preventDefault();
  const code = document.getElementById("code-input");
  const codeNum = code.value;
  const pageOne = document.getElementById("first-page");
  const pageTwo = document.getElementById("second-page");
  if (codeNum === "1") {
    pageOne.classList.add(HIDDEN_CLASSNAME);
    pageTwo.classList.remove(HIDDEN_CLASSNAME);
  } else if (codeNum === "") {
    alert("코드를 입력해주세요!");
  } else {
    alert("이미 사용했거나 유효하지 않은 코드입니다");
    code.value = "";
  }
}

function secondPage(event) {
  event.preventDefault();
  const username = myName.value;
  if (username === "") {
    alert("이름을 입력해주세요");
  } else {
    localStorage.setItem("username", username);
    nameForm.submit();
  }
}

if (codeForm !== null) {
  codeForm.addEventListener("submit", firstPage);
}

if (nameForm !== null) {
  nameForm.addEventListener("submit", secondPage);
}
