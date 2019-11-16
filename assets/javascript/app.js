var seconds = 60;
var intervalId;
var correct = 0;
var totalQuestions = 5;
var timeUp;




window.onload = function() {
    console.log("window loaded");
setTimeout(timeUp, 1000 * 60);
    // Start function 
    function start() {
        intervalId = setInterval(count, 1000);    
    }
    // Count function
    function count() {
        seconds--;
        var converted = timeConverter(seconds);
        console.log(converted);
        $("#time-left").text(converted);
      }    
      start();
    function timeUp() {
        $("#time-left").text("Time's up!");
        clearInterval(intervalId);
        if ($("#sight").prop("checked")) {
          correct++;
        }
        if ($("#4000").prop("checked")) {
          correct++; 
        }
        if ($("#relaxing").prop("checked")) {
          correct++;
        }
        if ($("#food").prop("checked")) {
          correct++;
        }
        if ($("#italianG").prop("checked")) {
          correct++;
        }
        $("#questions").text("Your score is " + (correct/totalQuestions*100) + "%");
        $("#questions").css('text-align', 'center');
    }
  };

  function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}