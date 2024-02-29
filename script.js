//we create a date object and set the time to the day we want it to count down to
//getTime is to get the timestamp in milliseconds 
var countDownDate = new Date("Mar 5, 2024").getTime();
//we set an interval that is executed every one second(1000 millisecond)
var x = setInterval(function(){
    // this collects the curent date and time and assigns it to the variable now
    var now = new Date().getTime();
    // this calculates the difference
    var distance = countDownDate - now;
    //calculations for days, hours ,mins and secs
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);

    //this with diplay the update time in the html file
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    // when the countdown is done, it'll stop it from counting backwards and just stay at 0
    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("secs").innerHTML = "00";
    }

    //the 1000 is the interaval which is in millisecond(1 second)
},1000);