let codeEntered = localStorage.getItem("code-entered");

//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();

let enteredUsername = localStorage.getItem("username");



if (codeEntered === "true") {
  $(".resume-test").show();
  $(".code-already-entered").show();
  $(".code-bottom-page").hide();
}


$("#enter-the-test").click(function () {
  $("#code-top").css('opacity', 0.2)
  $(".code-bottom-page").css('opacity', 0.2)
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
        }});
  })
    .catch(
      $('.code-wrong-answer').delay(1800).fadeIn('slow'),
      $('.code-wrong-answer-close').delay(1800).fadeIn('slow')
    )
  });

  $(".resume-test").click(function () {
    $("#first-page").hide();
    $("#second-page").show();
    $(".name-input").val() = enteredUsername;
  });


  $(".wrong-answer-close").click(function () {
    $(".wrong-answer").hide()
    $(".wrong-answer-close").hide()
    $("#code-top").css('opacity', 1)
    $(".code-bottom-page").css('opacity', 1)
  });

  $(".name-enter").click(function () {
    if ($(".name-input").val()==="") {
      $('.name-wrong-answer').delay(300).fadeIn('slow');
      $('.name-wrong-answer-close').delay(300).fadeIn('slow');
    } else {
      localStorage.setItem("username", $(".name-input").val());
      window.location.href = "intro.html";}
  })
