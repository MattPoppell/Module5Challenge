let topPart= document.querySelector("#currentDate");
let saveButton = $(".save-icon");
let containerEl = $(".container");
console.log("test123")

const currentDate = $('#currentDate');

function displayDate() {
  let date = dayjs().format('dddd, MMMM DD, YYYY');
  currentDate.text(date);
};
  const now = parseInt(dayjs().format('HH'));



  function plannerStateChange() {
    $(".time-block").each(function () {
      let time = parseInt($(this).attr("id").split("hour")[1] * -1);
    console.log("test ", typeof time,typeof now);
      if (time < now) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      };
      if (time === now) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        console.log("test present" );
      };
      if (time > now) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
  
      };
    });
  };

$(function () {
    $(".saveBtn").on("click", function () {
      var hourText = $(this).siblings(".description").val();
      var blockHour = $(this).parent().attr("id");
      localStorage.setItem(blockHour, hourText);
    });
  
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    plannerStateChange();
  
  });
  
  displayDate();
  setInterval(displayDate, 1000);
  