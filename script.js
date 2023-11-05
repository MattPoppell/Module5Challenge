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