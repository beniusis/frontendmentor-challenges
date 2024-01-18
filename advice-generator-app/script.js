const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const generateButton = document.querySelector(".generate-advice");

generateAdvice();

async function generateAdvice() {
  try {
    generateButton.children[0].style.animation = "spin 1s infinite";
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    generateButton.children[0].style.animation = "none";
    adviceId.textContent = advice.slip.id;
    adviceText.textContent = advice.slip.advice;
    generateButton.disabled = true;
    await sleep(2000);
    generateButton.disabled = false;
  } catch (error) {
    adviceId.textContent = "000";
    adviceText.textContent = "Could not retrieve the advice. Try again.";
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
