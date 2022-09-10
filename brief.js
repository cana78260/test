let test = document.getElementsByClassName("hidden");


for(let i=0; i<test.length; i++) {
     test[i].addEventListener('click', function(e) { 
        if (test[i].classList.contains('hidden')) {
          
    if (test[i].style.display === "none") {
      test[i].style.display = "block";
    } else {
      test[i].style.display = "none";
    }
}
     })
}
