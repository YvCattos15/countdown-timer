

//define the end time (eg 1 hour, 2 hours from now...)
const endTime = new Date("March 10 2024");

//function to update the display
function updateDisplay() {
    
    const now = new Date();
    const timeLeft = endTime - now;
    
    //to change the UI when the timer elapses
    if (timeLeft <= 0) {
        document.getElementById("image").src = "catbp2.jpg";
        document.getElementById("hidden").style.display = "flex";
        document.getElementById("timer-container").style.display = "none";

        //document.getElementById("catbp").style.display = "none";
    }

    //calculate days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //display the time left 
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

//update the display immediately and then every second
updateDisplay();
setInterval(updateDisplay, 1000);