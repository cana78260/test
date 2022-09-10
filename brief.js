let test = document.getElementById("box");

test.addEventListener ("click", function myFunction() {
  var x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})
