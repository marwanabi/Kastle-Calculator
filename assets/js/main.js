var output = 0;
var currentEntry = '0';

function updateScreen(displayValue) {
  output = $('#input-box').text(displayValue.substring(0, 10));
}

function calc() {
  var total = output.text() / 8;
  console.log(total);
  $('#result-box').text((total).toFixed(0));
};


$(document).ready(function() {
  $('.button').on('click', function() {
    var buttonPressed = $(this).text();
    console.log(buttonPressed);
    if (isNaN(buttonPressed) && (buttonPressed != '.')) {
      output = 0;
      currentEntry = '0';
    }
    else {
      if (currentEntry === '0') {
        currentEntry = buttonPressed;
      } else {
        currentEntry = currentEntry + buttonPressed;
      }
    }
    updateScreen(currentEntry);
    calc();
  });
});
