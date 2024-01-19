const billTotalInput = document.querySelector(".bill");
const tips = document.getElementsByClassName("tip");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".people-count");
const resetButton = document.querySelector(".reset-button");

const tipAmountPerPersonResult = document.querySelector(
  ".tip-amount-per-person-result"
);
const totalPerPersonResult = document.querySelector(".total-per-person-result");

const defaultTipAmountPerPerson = "$0.00";
const defaultTotalPerPerson = "$0.00";

let tipAmountPerPerson;
let totalPerPerson;

setDefaultValues();

function setDefaultValues() {
  tipAmountPerPersonResult.textContent = defaultTipAmountPerPerson;
  totalPerPersonResult.textContent = defaultTotalPerPerson;
}

function resetInputs() {
  billTotalInput.value = "";
  numberOfPeopleInput.value = "";
  customTipInput.value = "";
}

customTipInput.addEventListener("input", () => {
  customTipInput.style.textAlign = "right";
  if (
    billTotalInput.value !== "" &&
    numberOfPeopleInput.value !== "" &&
    customTipInput.value !== ""
  ) {
    const tipPercentage = parseFloat(customTipInput.value);
    tipAmountPerPerson =
      (parseFloat(billTotalInput.value) /
        parseFloat(numberOfPeopleInput.value) /
        100) *
      tipPercentage;
    tipAmountPerPersonResult.textContent =
      "$" + parseFloat(tipAmountPerPerson).toFixed(2);
    totalPerPerson =
      parseFloat(billTotalInput.value) / parseFloat(numberOfPeopleInput.value) +
      parseFloat(tipAmountPerPerson);
    totalPerPersonResult.textContent =
      "$" + parseFloat(totalPerPerson).toFixed(2);
    resetButton.removeAttribute("disabled");
  } else {
    setDefaultValues();
  }
});

for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", () => {
    const tipPercentage = parseInt(tips[i].value);
    tipAmountPerPerson =
      (parseFloat(billTotalInput.value) /
        parseFloat(numberOfPeopleInput.value) /
        100) *
      tipPercentage;
    tipAmountPerPersonResult.textContent =
      "$" + parseFloat(tipAmountPerPerson).toFixed(2);
    totalPerPerson =
      parseFloat(billTotalInput.value) / parseFloat(numberOfPeopleInput.value) +
      parseFloat(tipAmountPerPerson);
    totalPerPersonResult.textContent =
      "$" + parseFloat(totalPerPerson).toFixed(2);
    resetButton.removeAttribute("disabled");
  });
}

resetButton.addEventListener("click", () => {
  setDefaultValues();
  resetInputs();
  resetButton.setAttribute("disabled", "");
});
