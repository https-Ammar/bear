const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainElements = document.querySelector(".d-flex, .text, .img_cover");
const successDiv = document.querySelector(".success");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transition = "all 0.5s ease";
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".img_cover").classList.add("hidden");
  document.querySelector(".text").classList.add("hidden");
  document.querySelector(".d-flex").classList.add("hidden");

  setTimeout(() => {
    successDiv.classList.remove("hidden");
  }, 300);
});
