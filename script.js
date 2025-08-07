gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Sidebar elements animation
  gsap.from(".sidebar > *", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });

  gsap.from(".main-h2,.services-h2", {
    scrollTrigger: {
      trigger: ".main-h2",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
  gsap.from(".about p", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

  gsap.from(".card", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
  });
  gsap.from(".section p", {
    scrollTrigger: {
      trigger: ".section p",
      start: "top 100%",
      toggleActions: "play none none none",
      //   markers: true,
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
  });
  gsap.from("ul", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
  });
});
