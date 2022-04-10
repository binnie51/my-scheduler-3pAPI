// Variable(s) needed:
var save = $(".saveBtn"); //save button

// Displaying current day:
$("#currentDay").text(moment().format('ddd, MMMM Do YYYY'));

// Blocks color coded to indicate the past, present, and future
function timeBlockClr() {
    var hour = moment().hours(); //gets present time

    $(".time-block").each(function() {
        var currentHr = parseInt($(this).attr("id"));

        // console.log(this);
        if (currentHr > hour) {
            $(this).addClass('future');
        }
        else if (currentHr === hour) {
            $(this).addClass('present');
        }
        else {
            $(this).addClass('past');
        }
    })
};

// When save button clicked, the event stored users' value entries in the local storage
save.on("click", function(event) {
    event.preventDefault(); // prevent saved entries from erasure after the page has been refreshed (users can still their entries)
    var time = $(this).siblings('.hour').text();
    var plan = $(this).siblings('.plan').val();

    localStorage.setItem(time, plan);
});

// Get items stored in the local storage 
function plannerUse() {
    
    $(".hour").each(function () {
        var currentHr = $(this).text();
        var plan = localStorage.getItem(currentHr);

        // console.log(currentHr);
        
        if (plan !== null) {
            $(this).siblings(".plan").val(plan);
        }
    });
}

timeBlockClr();
plannerUse();