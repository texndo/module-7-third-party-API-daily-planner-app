$(document).ready(function () {
    //* Display current date and time *\\
    var displaytime = document.querySelector("#currentDay");
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
    displaytime.textContent = currentTime;
}); 

//* Save user input to local storage when save button is clicked *\\
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().data("hour");
    localStorage.setItem(time, text);
});

//* Update the background colour of the time blocks based on the current time *\\
function updateHourlyBlocks() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).data("hour"));
        $(this).removeClass("past present future");
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

updateHourlyBlocks();

//* Display saved text from local storage in the respective time blocks *\\
function displaySavedText() {
    $(".time-block").each(function () {
        var blockHour = $(this).data("hour");
        $(this).children(".description").val(localStorage.getItem(blockHour));
    });
}

displaySavedText();



