const tl = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
});

const tl2 = gsap.timeline({
  defaults: { duration: 1.5, delay: 4 },
});

const tl3 = gsap.timeline({
  defaults: { duration: 1.5 },
});

tl.from(".card-bg", { delay: 1, scale: 0.2, transformOrigin: "center" }, "=.2")
  .from(".card-top", { delay: 1, scaleY: 0, transformOrigin: "top" }, "-=.5")
  .from(".icon", { scale: 0.2, transformOrigin: "center" }, "-=.5")
  .from(".blip1", { scaleX: 0 })
  .from(".blip2", { scaleX: 0 }, "-=.2")
  .from(".blip3", { scaleX: 0 }, "-=.4")
  .from(".blip4", { scaleX: 0 }, "-=.6")
  .from(".blip5", { scaleX: 0 }, "-=.8");

tl2.to(".whole-card", { y: 10, repeat: -1, yoyo: true });
tl3.from(".main-content", { opacity: 0, y: 40, stagger: 0.3 });

document.onkeypress = function (e) {
  e = e || window.event;
  if (e.keyCode === 13) {
    document.documentElement.classList.toggle("light-mode");
  }
};
