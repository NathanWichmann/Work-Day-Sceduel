// this shows the time and calls right now to show the month day year and seconds 
var timeDisplayEl = $('#time-display');
//ths is populated with the value of whats put in the description by the user 
var userInputEl;
//this is on the imput line and has an individual id for each hour, shows the hour used with the description 
var hourUsedEl;
//initially i was going to use these to get the local storage but i found a quicker way online 
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
      //sets the hour used as the key and the user input as the value 
      localStorage.setItem(hourUsedEl, userInputEl);
      
    
  });
  });

  // $(document).on("pagecreate",function(){
  //   $("#8am .description").val(localStorage.getItem("8am"));
  //  });
  
  
  $("#9am").val(localStorage.getItem("9am"));


  

  //this calls the displaytime function and shows every second on the screen 
  setInterval(displayTime, 1000);