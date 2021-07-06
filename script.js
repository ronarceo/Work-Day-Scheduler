//adds current day and date to the header
const today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);


//function to change timeblock colors depending on the hour
function colorHour () {
    let hour = moment().hour();
    
    if (hour > 9) {
        $("#event9").addClass("past");
    } else if (hour == 9) {
        $("#event9").addClass("present");
    } else if (hour < 9) {
        $("#event9").addClass("future");
    }

    if (hour > 10) {
        $("#event10").addClass("past");
    } else if (hour == 10) {
        $("#event10").addClass("present");
    } else if (hour < 10) {
        $("#event10").addClass("future");
    }

    if (hour > 11) {
        $("#event11").addClass("past");
    } else if (hour == 11) {
        $("#event11").addClass("present");
    } else if (hour < 11) {
        $("#event11").addClass("future");
    }

    if (hour > 12) {
        $("#event12").addClass("past");
    } else if (hour == 12) {
        $("#event12").addClass("present");
    } else if (hour < 12) {
        $("#event12").addClass("future");
    }

    if (hour > 13) {
        $("#event1").addClass("past");
    } else if (hour == 13) {
        $("#event1").addClass("present");
    } else if (hour < 13) {
        $("#event1").addClass("future");
    }

    if (hour > 14) {
        $("#event2").addClass("past");
    } else if (hour == 14) {
        $("#event2").addClass("present");
    } else if (hour < 14) {
        $("#event2").addClass("future");
    }

    if (hour > 15) {
        $("#event3").addClass("past");
    } else if (hour == 15) {
        $("#event3").addClass("present");
    } else if (hour < 15) {
        $("#event3").addClass("future");
    }

    if (hour > 16) {
        $("#event4").addClass("past");
    } else if (hour == 16) {
        $("#event4").addClass("present");
    } else if (hour < 16) {
        $("#event4").addClass("future");
    }

    if (hour > 17) {
        $("#event5").addClass("past");
    } else if (hour == 17) {
        $("#event5").addClass("present");
    } else if (hour < 17) {
        $("#event5").addClass("future");
    }
}

colorHour();


$(document).ready(function() {
    //function to save user input to local storage
    $(".saveBtn").click(function() {
        let event = $(this).siblings("textarea").val();
        let time = $(this).siblings("textarea").attr("id");
        localStorage.setItem(time, event);
    });

    //returns user input from local storage
    $("#event9").val(localStorage.getItem("event9"));
    $("#event10").val(localStorage.getItem("event10"));
    $("#event11").val(localStorage.getItem("event11"));
    $("#event12").val(localStorage.getItem("event12"));
    $("#event1").val(localStorage.getItem("event1"));
    $("#event2").val(localStorage.getItem("event2"));
    $("#event3").val(localStorage.getItem("event3"));
    $("#event4").val(localStorage.getItem("event4"));
    $("#event5").val(localStorage.getItem("event5"));
});