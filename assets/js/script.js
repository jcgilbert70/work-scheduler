function init() {
// displays day of the week in text, month in text, and day of month number
$('#currentDay').text(moment().format('dddd, MMMM Do'));


}




//init function to load all locally stored data

// will need a time check/update

// sections for each hour

// input field for each hour section

// a button within each hour section to save entered within input field locally stored

 
function updateHour() { // this function needs to run frequently, set interval?
var currentTime = moment().hours(); // this uses moment.js up to date and time "hour" for keeping hour blocks up to date


// need code to update time blocks, use given css styles of past present and future

}


// set time interval
updateHour();


init();