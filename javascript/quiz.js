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
    $(".title").html(`제 ${chapter.toString()} 장`);
    chapterAnswer = result.data().answer;

    if (chapter < 6) {
      $(".red-fire").attr("src", `images/fire/red_${chapter.toString()}.png`);
    } else if (chapter > 6 && chapter < 15) {
      $(".red-fire").attr("src", "images/fire/red_6.png");
      $(".pink-fire").attr("src", `images/fire/pink_${chapter.toString()}.png`);
    } else if (chapter > 15 && chapter < 24) {
      $(".pink-fire").attr("src", "images/fire/pink_15.png");
      $(".green-fire").attr(
        "src",
        `images/fire/green_${chapter.toString()}.png`
      );
    } else {
      $(".green-fire").attr("src", "images/fire/green_24.png");
    }
  });
