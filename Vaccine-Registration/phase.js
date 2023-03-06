document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let age = parseInt(document.getElementById('age').value);
    //Phase countdown timer
    // dates we're counting down to
    let phase2 = new Date("August 27, 2023 15:37:25").getTime();
    let phase3 = new Date("September 6, 2023 15:37:25").getTime();
    let phase4 = new Date("September 21, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance1 = phase2 - now;
    let distance2 = phase3 - now;
    let distance3 = phase4 - now;

    // Time calculations for phase2
    let days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    let hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Time calculations for phase3
    let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Time calculations for phase4
    let days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    let hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
    if(age >= 40) {
        document.getElementById("phase").style.fontSize = "20px";
        // Display the result in the element with id="demo" Phase 2
        document.getElementById("phase").innerHTML = "You qualify for Phase 2 of vaccination distribution. Phase 2 starts on August 27th. Time left until phase 2 starts: " + days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";
    }
    if(age <= 39 && age >= 18) {
        document.getElementById("phase").style.fontSize = "24px";
        // Display the result in the element with id="demo" Phase 3
        document.getElementById("phase").innerHTML = "You qualify for Phase 3 of vaccination distribution. Phase 3 starts on September 6th. Time left until phase 3 starts: " + days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
    }
    if(age <= 17) {
        document.getElementById("phase").style.fontSize = "30px";
        // Display the result in the element with id="demo" Phase 4
        document.getElementById("phase").innerHTML = "You qualify for Phase 4 of vaccination distribution.Phase 4 starts on Septermber 21st. Time left until phase 4 starts: " + days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";
    }  
});

}, 1000);