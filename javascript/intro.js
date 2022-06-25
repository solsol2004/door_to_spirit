const savedUsername = localStorage.getItem("username");

//Firebase//
const db = firebase.firestore();
const storage = firebase.storage();

//Firebase에 있는 코드를 만료하기 위해 사용하는 키//
let userCodeEntered = localStorage.getItem("user-code");


$("#materials-yes").click(function () {
    $("#username-change").text(`${savedUsername}님 안녕하세요!`);
    db.collection("questCode")
    .doc(userCodeEntered)
    .update({
      Used: "true",
      날짜: new Date(+new Date() + 3240 * 10000)
        .toISOString()
        .replace("T", " ")
        .replace(/\..*/, "")
    })
    .then((result) => {
      $("#third-page").hide();
      $("#page-four").show();
    })
  })

