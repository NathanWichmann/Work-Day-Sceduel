
var timeDisplayEl = $('#time-display');

var userInputEl;
var hourUsedEl;

var nineAmEl = $('#9am')
var tenAmEl = $('#10am')
var elevenAmEl = $('#11am')
var twelvePmEl =$('#12pm')
var onePmEl = $('#1pm')
var twoPmEl = $('#2pm')
var threePmEl = $('#3pm')
var fourPmEl = $('#4pm')
var fivePmEl = $('#5pm')


//display the current date and time to the second in the hero/header 
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    console.log("timeDisplayEl")
    // console.log('MMM DD, YYYY [at] hh:mm:ss a')
  }
  //lets the page load and the once document is ready this funtion runs 
  $(document).ready(function () {
    //connecting to the savebTEl and crwading the ecent 
    $(".btn").on('click', function( ) {
    
      //gets the user input and the hour and sends it to the local storage in a json string. local storage cant save objects
      userInputEl = $(this).siblings(".form-control").val();
      console.log("userInputEl")
      
      hourUsedEl = $(this).siblings(".input-group-text").val();
      localStorage.setItem(hourUsedEl, json.stringify(userInputEl));
    
  });
  });

  //this calls the displaytime function and shows every second on the screen 
  setInterval(displayTime, 1000);