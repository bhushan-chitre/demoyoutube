// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  $("#myModal").fadeIn();
  $("#myModal").addClass("intro");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  $("#myModal").fadeOut();
  $("#myModal").removeClass("intro");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    $("#myModal").fadeOut();
    $("#myModal").removeClass("intro");
  }
}



// Progress bar

const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});