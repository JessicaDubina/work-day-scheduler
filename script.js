$(document).ready(function () {

  //set header to today's date
  let todaysDate = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(todaysDate);

  //function to save user input along with the cooresponding hour-x time block for storage key
  let saveUserInput = (event) => {
    let timeBlock = $(event.target).parent().attr("id");
    let userEventInput = $(event.target).siblings("textarea");
    localStorage.setItem(timeBlock, userEventInput.val());
    //set text area to whatever the user input was
    localStorage.getItem(timeBlock, userEventInput.val());
    userEventInput.text = userEventInput.val();
  }

  $('.saveBtn').on("click", saveUserInput);

    
  //calculate current time and compare to each time slow to set to past, present, or future
  let now = dayjs().hour();

  let scheduleEl = $(".container-lg").children(".row");
  
  for (let i = 0; i < scheduleEl.length; i++){
    let hourX = $(scheduleEl[i]).attr("id");
    let hourOnly = hourX.slice(5);
    let test = now - 10;
    
    //conditional to assign past/present/future class
    if (hourOnly < test) {
      $(scheduleEl[i]).removeClass("future");
      $(scheduleEl[i]).removeClass("present");
      $(scheduleEl[i]).addClass("past");
    } else if (hourOnly > test) {
      $(scheduleEl[i]).addClass("future");
    } else {
      $(scheduleEl[i]).removeClass("future");
      $(scheduleEl[i]).addClass("present");
    }

  }

});
