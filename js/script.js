
'use strict';


document.addEventListener("scroll", () => {
  console.log("scrolling");
});





document.addEventListener("DOMContentLoaded", () => {

  const weddingDate = new Date(2026, 1, 13, 0, 0, 0).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = "Այսօր մեր մեծ օրն է 💍";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

  }, 1000);

});

console.log("Countdown started");


