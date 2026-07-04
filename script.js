const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const form = document.querySelector(".feedback-form");
const note = document.querySelector("#form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get("name") || "there").toString().trim();
    note.textContent = `Thanks, ${name || "there"}. Your feedback is captured for this demo.`;
    form.reset();
  });
}
