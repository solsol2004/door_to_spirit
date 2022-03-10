document.getElementById("haechi1_Btn").onclick = function () {
  document.getElementById("fifth-page").style.display = "none";
  document.getElementById("page-six").classList.remove("hidden");
};

document.getElementById("haechi2_Btn").onclick = function () {
  document.getElementById("page-six").style.display = "none";
  document.getElementById("page-seven").classList.remove("hidden");
};

document.getElementById("haechi3_Btn").onclick = function () {
  document.getElementById("page-seven").style.display = "none";
};

document.getElementById("gotoquiz").onsubmit = function () {
  document.getElementById("gotoquiz").submit();
};
