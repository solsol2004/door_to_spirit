let codeForm = document.getElementById("code-bottom");
let nameForm = document.getElementById("name-bottom");
const myName = document.getElementById("name-input");
let codeEntered = localStorage.getItem("code-entered");

const HIDDEN_CLASSNAME = "hidden";

//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();



if (codeEntered === "true") {
  $(".resume-test").show();
  $(".code-already-entered").show();
  $("#code-bottom").hide();}


  $("#enter-the-test").click(function () {
    codeNum =  $("#code-input").val();
    db.collection("questCode").where("Random", "==", codeNum)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().Used === "true"){
          localStorage.setItem("user-code", doc.id);
          localStorage.setItem("used-hint", 0);
          localStorage.setItem("chapter", 1);
          localStorage.setItem("code-entered", true);
          $("#first-page").hide();
          $("#second-page").show();
        } else if (codeNum === ""){}
        else {
          alert("이미 사용했거나 유효하지 않은 코드입니다");
          codeNum = "";
        }});
  })
    .catch(function(error) {
      alert("이미 사용했거나 유효하지 않은 코드입니다");
      codeNum = "";
    });
  });




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


if (nameForm !== null) {
  nameForm.addEventListener("submit", secondPage);
}
