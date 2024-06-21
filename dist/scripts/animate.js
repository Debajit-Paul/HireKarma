// match_skill
gsap.to("#match_skill", {
  scrollTrigger: {
    trigger: "#match_skill",
    start: "0% 100%",
    end: "100% 80%",
    // markers: true,
    scrub: 1,
  },
  startAt: {
    opacity: 0,
    scale: 0,
  },
  opacity: 1,
  scale: 1,
  duration: 3,
});

gsap.to("#stress_free", {
  scrollTrigger: {
    trigger: "#stress_free",
    start: "0% 100%",
    end: "100% 80%",
    // markers: true,
    scrub: 1,
  },
  startAt: {
    opacity: 0,
    scale: 0,
  },
  opacity: 1,
  scale: 1,
  duration: 3,
});

gsap.to("#trust_us", {
  scrollTrigger: {
    trigger: "#trust_us",
    start: "0% 100%",
    end: "100% 70%",
    // markers: true,
    scrub: 1,
  },
  startAt: {
    opacity: 0,
    scale: 0,
  },
  opacity: 1,
  scale: 1,
  duration: 4,
});
