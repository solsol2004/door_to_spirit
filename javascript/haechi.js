document.getElementById("haechi1_Btn").onclick = function () {
  document.getElementById("fifth-page").style.display = "none";
  document.getElementById("sixth-page").classList.remove("hidden");
};

document.getElementById("haechi2_Btn").onclick = function () {
  document.getElementById("sixth-page").style.display = "none";
  document.getElementById("seventh-page").classList.remove("hidden");
};

document.getElementById("haechi3_Btn").onclick = function () {
  document.getElementById("seventh-page").style.display = "none";
  document.getElementById("eigth-page").classList.remove("hidden");
};

document.getElementById("gotoquiz").onsubmit = function () {
  document.getElementById("gotoquiz").submit();
};
