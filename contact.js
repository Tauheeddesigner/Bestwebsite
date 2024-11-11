// var typed = new Typed('h1', {
//     strings: ['Contact Information'],
//     typeSpeed: 80,
//     backSpeed:80,
//     loop:true
//   });
// let tl=gsap.timeline()
// tl.from("h1",{
//   y:-250,
//   opacity:0,
//   duration:1,
 


// })
// tl.from(".box",{
//   y:-300,
//   opacity:0,
//   duration1,
// })

// tl.from(".information",{
//     y:300,
//     opacity:0,
//     duration:1,
  
    
// })
// JavaScript to animate and add effects on page load
window.onload = function() {
  // Example of animating the background color change for the page
  document.body.style.transition = "background-color 2s ease-in-out";
  document.body.style.backgroundColor = "black";

  // Add typing animation using Typed.js for a dynamic effect
  const typed = new Typed("h1", {
      strings: ["Contact me for more information!", "Feel free to reach out!", "Let's connect on LinkedIn!"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true
  });
}

