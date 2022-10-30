

function init() {
    console.log("initialize function began");
    $('#currentDay').text(moment().format('dddd, MMMM Do')); // displays day of the week in text, month in text, and day of month number


}





function saveTask() {
    console.log("save task function began");
    console.log(this);
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(task, hour);
}

//init function to load all locally stored data

// will need a time check/update

// sections for each hour

// input field for each hour section

// a button within each hour section to save entered within input field locally stored


function updateHour() { // this function needs to run frequently, set interval?
    console.log("update hour function began")
    var currentTime = moment().hours(); // this uses moment.js up to date and time "hour" for keeping hour blocks up to date
    // need code to update time blocks, use given css styles of past present and future

}





function showExtras() {
    console.log("show extras function began")
    $(document).removeClass('hideExtras');
}

$('.extrasBtn').on('click', showExtras());








// set time interval
updateHour();

$('.saveBtn').on('click', saveTask());

init();