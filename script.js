$(document).ready(function () {

  let scheduleEl = $(".container-lg").children(".row");
  let todaysDate = dayjs().format("dddd, MMMM DD");

  //set header to today's date
  $("#currentDay").text(todaysDate);

  //function to save user input along with the cooresponding hour-x time block for storage key
  let saveUserInput = (event) => {
    let timeBlock = $(event.target).parent().attr("id");
    let userEventInput = $(event.target).siblings("textarea");
    localStorage.setItem(timeBlock, userEventInput.val());
    userEventInput.text = userEventInput.val();
  }

  //set time blocks to inputs from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //event listener on save button to store user input
  $('.saveBtn').on("click", saveUserInput);

  //function to calculate current time and compare to each time slow to set to past, present, or future
  let updateTimeBlocks = () => {
    let now = dayjs().hour();
    for (let i = 0; i < scheduleEl.length; i++){
      let hourX = $(scheduleEl[i]).attr("id");
      let hourOnly = hourX.slice(5);
      //conditional to assign past/present/future class
      if (hourOnly < now) {
        $(scheduleEl[i]).removeClass("future");
        $(scheduleEl[i]).removeClass("present");
        $(scheduleEl[i]).addClass("past");
      } else if (hourOnly > now) {
        $(scheduleEl[i]).addClass("future");
      } else {
        $(scheduleEl[i]).removeClass("future");
        $(scheduleEl[i]).addClass("present");
      }
    }
  }

  updateTimeBlocks();

  //refresh timeblock formats with updated time
  let checkCurrentTime = setInterval(updateTimeBlocks, 10000);

});
