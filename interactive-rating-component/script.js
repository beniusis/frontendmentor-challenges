const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const ratingAnswer = document.querySelector(".selected-rating");

let submittedValue;

function rate(rating) {
  submittedValue = rating;
}

function submit() {
  ratingAnswer.textContent = submittedValue;
  ratingContainer.style.display = "none";
  thankYouContainer.style.display = "flex";
}
