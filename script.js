
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
    // console.log("timeDisplayEl")
    // console.log('MMM DD, YYYY [at] hh:mm:ss a')
  }
  //lets the page load and the once document is ready this funtion runs 
  $(document).ready(function () {
    //connecting to the saveBtnEl and crwading the ecent 
    $(".saveBtn").on('click', function( ) {
      console.log(this)
    
      //gets the user input and the hour and sends it to the local storage in a json string. local storage cant save objects
      userInputEl = $(this).siblings(".description").val();
      console.log("userInputEl", userInputEl)
      
      hourUsedEl = $(this).siblings(".description").attr("id");
      console.log("hourUsedEl", hourUsedEl)
      
      localStorage.setItem(hourUsedEl, userInputEl);
      
    
  });
  });

  // $(document).on("pagecreate",function(){
  //   $("#8am .description").val(localStorage.getItem("8am"));
  //  });
  
  $("#9am").val(localStorage.getItem("9am"));


  

  //this calls the displaytime function and shows every second on the screen 
  setInterval(displayTime, 1000);