gsap.from("header", { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from(".about", { opacity: 0, duration: 1, delay: 1, y: 50 });

gsap.utils.toArray(".about p").forEach((paragraph, index) => {
  gsap.from(paragraph, {
    opacity: 0,
    duration: 0.8,
    y: 30,
    delay: 1.5 + index * 0.4,
    ease: "power2.out"
  });
});
