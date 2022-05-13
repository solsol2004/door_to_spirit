let codeForm = document.getElementById("code-bottom");
let nameForm = document.getElementById("name-bottom");
const myName = document.getElementById("name-input");
let codeEntered = localStorage.getItem("code-entered");

const HIDDEN_CLASSNAME = "hidden";

//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();

//Firebase에 있는 코드를 만료하기 위해 사용하는 키//
let userCodeEntered = localStorage.getItem("user-code");


if (codeEntered === "true") {
  $(".resume-test").show();
  $(".code-already-entered").show();
  $("#code-bottom").hide();}

function firstPage(event) {
  event.preventDefault();
  const code = document.getElementById("code-input");
  const codeNum = code.value;
  const pageOne = document.getElementById("first-page");
  const pageTwo = document.getElementById("second-page");
  if (codeNum === "1") {
    pageOne.classList.add(HIDDEN_CLASSNAME);
    pageTwo.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("used-hint", 0);
    localStorage.setItem("chapter", 1);
    localStorage.setItem("code-entered", true);
  } else if (codeNum === "") {

  } else {
    //alert("이미 사용했거나 유효하지 않은 코드입니다");
    code.value = "";
  }

  db.collection("questCode").where("Random", "==", codeNum)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          localStorage.setItem("user-code", doc.id);
      });
  })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    
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
