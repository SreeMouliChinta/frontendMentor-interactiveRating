let frontpage = document.querySelector(".frontpage");
let backpage = document.querySelector(".backpage");
let submit_btn = document.getElementById("submit");
let rate_again_btn = document.getElementById("rate-again");

submit_btn.addEventListener("click", () => {
  backpage.classList.remove("hidden");
  frontpage.style.display = "none";
})

rate_again_btn.addEventListener("click", () => {
  backpage.classList.add("hidden");
  frontpage.style.display = "block";
})

let rating = document.querySelectorAll(".btn");
let selected_rating = document.getElementById("selected-rating");

rating.forEach((value) => {
  value.addEventListener("click", () => {
    selected_rating.innerHTML = value.innerHTML;
  })
})