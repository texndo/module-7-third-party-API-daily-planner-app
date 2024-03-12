$(document).ready(function () {
    //* Display current date and time *\\
    var displaytime = document.querySelector("#currentDay");
    var currentTime = day.js().format("dddd, MMMM D, YYYY, h:mm:ss a");
    displaytime.textContent = currentTime;
}); 

//* Save user input to local storage when save button is clicked *\\
$(".saveBtn").on("click", function () {
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);

});

//* Update the background colour of the time blocks based on the current time *\\
function updateHourlyBlocks() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id).split("-")[1]);"))
        $(this).toggleClass("past", blockHour < currentHour);
        $(this).toggleClass("present", blockHour === currentHour);
        $(this).toggleClass("future", blockHour > currentHour);
    });
}

updateHourlyBlocks();

//* Display saved text from local storage in the respective time blocks *\\
function displaySavedText() {
    $(".time-block").each(function () {
        var blockHour = $(this).attr("id");
        $(this).children(".description").val(localStorage.getItem(blockHour));
    });
}

displaySavedText();


