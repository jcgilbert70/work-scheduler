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


var stored9am = $('#hour9 .taskInputArea');
var stored10am = $('#hour10 .taskInputArea');
var stored11am = $('#hour11 .taskInputArea');
var stored12pm = $('#hour12 .taskInputArea');
var stored1pm = $('#hour13 .taskInputArea');
var stored2pm = $('#hour14 .taskInputArea');
var stored3pm = $('#hour15 .taskInputArea');
var stored4pm = $('#hour16 .taskInputArea');
var stored5pm = $('#hour17 .taskInputArea');

/*
var storedTaskArary = [
    stored9am,
    stored10am,
    stored11am,
    stored12pm,
    stored1pm,
    stored2pm,
    stored3pm,
    stored4pm,
    stored5pm
];

    for (i = 0; i < storedTaskArary.length; i++) {
        storedTaskArary[i].val(localStorage.getItem(''))

    }
*/

function init() {
    console.log("initialize function began");
    $('#currentDay').text(moment().format('dddd, MMMM Do')); // displays day of the week in text, month in text, and day of month number

    stored9am.val(localStorage.getItem('hour9'));
    stored10am.val(localStorage.getItem('hour10'));
    stored11am.val(localStorage.getItem('hour11'));
    stored12pm.val(localStorage.getItem('hour12'));
    stored1pm.val(localStorage.getItem('hour13'));
    stored2pm.val(localStorage.getItem('hour14'));
    stored3pm.val(localStorage.getItem('hour15'));
    stored4pm.val(localStorage.getItem('hour16'));
    stored5pm.val(localStorage.getItem('hour17'));
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

$(".saveBtn").on("click", function () {
    console.log("save task button pushed");
    var task = $(this).siblings('.taskInputArea').val();
    var hour = $(this).parent().attr('id');
    if (task === "") { // prevents saving empty field
        return;
    }
    localStorage.setItem(hour, task);

    console.log("the text entered within task input area is: " + task)
    console.log("the military hour id value is: " + hour)
})


init();

// set time interval
updateHour();
setInterval(updateHour, 15000);

/*
$('.extrasBtn').on('click', function () {
    console.log("show extras function began");
    $('#rollOverTasks').removeClass('hideExtras');
    $('#hour9').removeClass('hideExtras');
    $('#hour10').removeClass('hideExtras');
    $('#hour11').removeClass('hideExtras');
    $('#hour12').removeClass('hideExtras');
    $('#hour13').removeClass('hideExtras');
    $('#hour14').removeClass('hideExtras');
    $('#hour15').removeClass('hideExtras');
    $('#hour16').removeClass('hideExtras');
    $('#hour17').removeClass('hideExtras');
    $('#hour-9am').removeClass('col-md-10 ');
    $('#hour-9am').addClass('col-md-8');
    $('#hour-10am').removeClass('col-md-10 ');
    $('#hour-10am').addClass('col-md-8');
    $('#hour-11am').removeClass('col-md-10 ');
    $('#hour-11am').addClass('col-md-8');
    $('#hour-12pm').removeClass('col-md-10 ');
    $('#hour-12pm').addClass('col-md-8');
    $('#hour-1pm').removeClass('col-md-10 ');
    $('#hour-1pm').addClass('col-md-8');
    $('#hour-2pm').removeClass('col-md-10 ');
    $('#hour-2pm').addClass('col-md-8');
    $('#hour-3pm').removeClass('col-md-10 ');
    $('#hour-3pm').addClass('col-md-8');
    $('#hour-4pm').removeClass('col-md-10 ');
    $('#hour-4pm').addClass('col-md-8');
    $('#hour-5pm').removeClass('col-md-10 ');
    $('#hour-5pm').addClass('col-md-8');
    $('#saveBtn9').removeClass('saveBtn');
    $('#saveBtn9').addClass('saveBtnExtra');
    $('#saveBtn10').removeClass('saveBtn');
    $('#saveBtn10').addClass('saveBtnExtra');
    $('#saveBtn11').removeClass('saveBtn');
    $('#saveBtn11').addClass('saveBtnExtra');
    $('#saveBtn12').removeClass('saveBtn');
    $('#saveBtn12').addClass('saveBtnExtra');
    $('#saveBtn13').removeClass('saveBtn');
    $('#saveBtn13').addClass('saveBtnExtra');
    $('#saveBtn14').removeClass('saveBtn');
    $('#saveBtn14').addClass('saveBtnExtra');
    $('#saveBtn15').removeClass('saveBtn');
    $('#saveBtn15').addClass('saveBtnExtra');
    $('#saveBtn16').removeClass('saveBtn');
    $('#saveBtn16').addClass('saveBtnExtra');
    $('#saveBtn17').removeClass('saveBtn');
    $('#saveBtn17').addClass('saveBtnExtra');
    $('doneBtn9')
    $('doneBtn10')
    $('doneBtn11')
    $('doneBtn12')
    $('doneBtn13')
    $('doneBtn14')
    $('doneBtn15')
    $('doneBtn16')
    $('doneBtn17')

})
 */
