let codeEntered = localStorage.getItem("code-entered");

//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();



if (codeEntered === "true") {
  $(".resume-test").show();
  $(".code-already-entered").show();
  $(".code-bottom-page").hide();
}


$("#enter-the-test").click(function () {
    db.collection("questCode").where("Random", "==", $(".code-input").val())
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().Used === "false"){
          localStorage.setItem("user-code", doc.id);
          localStorage.setItem("used-hint", 0);
          localStorage.setItem("chapter", 1);
          localStorage.setItem("code-entered", true);
          $("#first-page").hide();
          $("#second-page").show();
        } else if (codeNum === ""){}
        else {
          alert("이미 사용한 코드입니다");
          codeNum = "";
        }});
  })
    .catch(function() {
      alert("이미 사용했거나 유효하지 않은 코드입니다");
      codeNum = "";
    });
  });


  $(".name-enter").click(function () {
    if ($(".name-input").val()==="") {
      alert("이름을 입력해주세요");
    } else {
      localStorage.setItem("username", $(".name-input").val());
      window.location.href = "intro.html";}
  })
