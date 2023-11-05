let topPart= document.querySelector("#currentDate");
let saveButton = $(".save-icon");
let containerEl = $(".container");
console.log("test123")


function displayDate() {
  let date = dayjs().format('dddd, MMMM DD, YYYY');
  currentDate.text(date);
};
  const now = dayjs().format('HH');

  const currentDate = $('#currentDate');

  function plannerStateChange() {
    $(".time-block").each(function () {
      let time = parseInt($(this).attr("id").split("hour")[1] * -1);
    
      if (time < now) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      };
      if (time === now) {
        // $(this).removeClass("past");
        // $(this).removeClass("future");
        $(this).addClass("present");
      };
      if (time > now) {
        // $(this).removeClass("present");
        // $(this).removeClass("past");
        $(this).addClass("future");
  
      };
    });
  };