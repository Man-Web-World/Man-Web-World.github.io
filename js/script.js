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


// section reveal

const sections = document.querySelectorAll('.reveal');

function revealSections() {
    const triggerBottom = window.innerHeight / 5 * 4; // երբ section-ը մոտենում է պատուհանի 4/5-րդին

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        }
        // Եթե ուզում ես կրկին թաքցնել scroll վերև գնալիս, uncomment հետևյալը
        // else {
        //   section.classList.remove('active');
        // }
    });
}

window.addEventListener('scroll', revealSections);
revealSections(); // ստուգել բեռնման ժամանակ



// icon reveal
const icons = document.querySelectorAll('.mirror-icon');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // աշխատի մեկ անգամ
      }
    });
  }, {
    threshold: 0.4
  });

  icons.forEach(icon => observer.observe(icon));




  

// text-animation

  const text = document.querySelector('.fade-in-text');

window.addEventListener('scroll', () => {
  const textTop = text.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(textTop < windowHeight - 100) { // երբ տեքստը մոտենում է էկրանին
    text.classList.add('visible');
  }
});

