// Reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});

// Typing effect
const text = "FULL STACK DEVELOPER";
let i = 0;
function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Counter animation
document.querySelectorAll("[data-count]").forEach(counter => {
  let target = +counter.dataset.count;
  let count = 0;
  let interval = setInterval(() => {
    count++;
    counter.innerText = count;
    if (count === target) clearInterval(interval);
  }, 50);
});
