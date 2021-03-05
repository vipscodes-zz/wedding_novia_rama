// Set the date we're counting down to
var countDownDate = new Date("Apr 04, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = `<h3>${days}</h3>`;
  document.getElementById("hour").innerHTML = `<h3>${hours}</h3>`;;
  document.getElementById("minute").innerHTML = `<h3>${minutes}</h3>`;;
  document.getElementById("second").innerHTML = `<h3>${seconds}</h3>`;;
  document.getElementById("day-mobile").innerHTML = `<h6>${days}<br>D</h6>`;
  document.getElementById("hour-mobile").innerHTML = `<h6>${hours}<br>H</h6>`;;
  document.getElementById("minute-mobile").innerHTML = `<h6>${minutes}<br>M</h6>`;;
  document.getElementById("second-mobile").innerHTML = `<h6>${seconds}<br>S</h6>`;;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = + "0 d " + "0 h "
  + minutes + "0 m " + seconds + "0 s ";
  }
}, 1000);


