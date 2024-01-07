// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// let test = () => {
// $(function () {

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
  console.log(now);

  let scheduleEl = $(".container-lg").children(".row");
  console.log(scheduleEl);
  
  for (let i = 0; i < scheduleEl.length; i++){
    let hourX = $(scheduleEl[i]).attr("id");
    let hourOnly = hourX.slice(5);
    console.log(hourOnly);  

    //conditional to assign past/present/future class
    if (hourOnly < now) {
      $(scheduleEl[i]).addClass(".past");
    } else if (hourOnly > now) {
      $(scheduleEl[i]).addClass(".future");
    } else {
      $(scheduleEl[i]).addClass(".present");
    }

  }



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

//   });
// }
// test();