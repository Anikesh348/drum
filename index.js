var numberofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    addAnimation(buttoninnerhtml);

    //  default : console.log(innerHTML);


  });

}
document.addEventListener("keydown", function(a) {
  //var key = this.innerHTML;
  makesound(a.key);
  addAnimation(a.key);

});

function makesound(key1) {
  switch (key1) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

  }
}

function addAnimation(button) {
  var thepressedbutton = document.querySelector("." + button);
  thepressedbutton.classList.add("pressed");
  // document.querySelector("."+button).classlist.add("pressed");
  setTimeout(function() {
    thepressedbutton.classList.remove("pressed");
  }, 100);


}
