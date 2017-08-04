let consoleEl;
let captionLength = 0;
let phase = 0;

let hostElement = document.getElementById("stringDataDivHidden"); 
let hostname = hostElement.getAttribute("data-hostname")
let name = hostElement.getAttribute("data-first-name")
let loginName = hostElement.getAttribute("data-login")

let string1 = "login: "+loginName+"";
let string2 = "login: "+loginName+" <br> password:";
let string3 = "login: "+loginName+" <br> password:<br>"+name+"@"+hostname+":~$";

$(document).ready(function() {
  consoleEl = $('#consoleText');

  setInterval("cursorAnimation()", 800);
  setTimeout(type(), 1000);

});

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');

}

function type() {
  switch (phase) {
    case 0:
      consoleEl.html(string1.substr(0, captionLength++ + 7));
      if (captionLength + 7 < string1.length + 1) {
        setTimeout("type()", 60);
      } else {
        phase = 1;
        captionLength = 0;
        setTimeout("type()", 2000)
      }
      break;
    case 1:
      consoleEl.html(string2);
      setTimeout("type()", 4000);
      phase = 2;
      break;
    case 2:
      consoleEl.html(string3);
  }
}
