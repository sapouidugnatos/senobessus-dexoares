document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("menu").onclick = function() {
    if (document.getElementById("side").style.visibility === "hidden") {
        document.getElementById("side").style.visibility = "visible";
    } else {
        document.getElementById("side").style.visibility = "hidden";
    }
  }
});