var workHour9am = $('#hour-9am');
var workHour10am = $('#hour-10am');
var workHour11am = $('#hour-11am');
var workHour12pm = $('#hour-12pm');
var workHour1pm = $('#hour-1pm');
var workHour2pm = $('#hour-2pm');
var workHour3pm = $('#hour-3pm');
var workHour4pm = $('#hour-4pm');
var workHour5pm = $('#hour-5pm');

var workHourArray = [
    workHour9am,
    workHour10am,
    workHour11am,
    workHour12pm,
    workHour1pm,
    workHour2pm,
    workHour3pm,
    workHour4pm,
    workHour5pm
];

function init() {
    console.log("initialize function began");
    $('#currentDay').text(moment().format('dddd, MMMM Do')); // displays day of the week in text, month in text, and day of month number

    // display old tasks
  
}


function updateHour() { // this function needs to run frequently, set interval?
    console.log("update hour function ran");
    var currentTime = moment().hours();
    console.log("The current hour is: " + currentTime) // this uses moment.js up to date and time "hour" for keeping hour blocks up to date

    for (i = 0; i < workHourArray.length; i++) {
        console.log("This hour section and its value: " + workHourArray[i].attr('id') + " and hour value is " + workHourArray[i].data('hour'))

        workHourArray[i].removeClass('past present future'); // removes any of the past present or future styles
        if (currentTime > workHourArray[i].data('hour')) {
            workHourArray[i].addClass('past');
            console.log("work hour array value is: " + workHourArray[i].data('hour') + " and in the past")

        } else if (currentTime === workHourArray[i].data('hour')) {
            workHourArray[i].addClass('present');
            console.log("work hour array value is: " + workHourArray[i].data('hour') + " and in the present")

        } else (workHourArray[i].addClass('future'));
        console.log("work hour array value is: " + workHourArray[i].data('hour') + " and in the future")
    }
}

/*
$('.extrasBtn').on('click', function () {
    console.log("show extras function began");
    $('.body').removeClass('hideExtras');
})
*/

$(".saveBtn").on("click", function () {
    console.log("save task button pushed");
    var task = $(this).siblings('.taskInputArea').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, task);
    console.log(task)
    console.log(hour)
})


init();

// set time interval
updateHour();
setInterval(updateHour, 15000);