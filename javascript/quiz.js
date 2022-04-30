//현 챕터//
let chapter = parseInt(localStorage.getItem("chapter"));
let chapterAnswer = null;
const db = firebase.firestore();
const storage = firebase.storage();

db.collection("quiz")
  .doc(chapter.toString())
  .get()
  .then((result) => {
    console.log(result.data());
    $(".place-image").attr("src", result.data().image);
    $(".image-detail-text").html(`🔎 ${result.data().imageText}`);
    $(".hint-description-text").html(`💡 ${result.data().hint}`);
    $(".answer-description-text").html(`✔️ ${result.data().hintAnswer}`);
    $(".quiz-text").attr("src", result.data().text);
    chapterAnswer = result.data().answer;
  });
