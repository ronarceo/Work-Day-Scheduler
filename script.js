const today = moment();
console.log(today)
$("#currentDay").text(today.format("ddd MMMM Do, YYYY"));