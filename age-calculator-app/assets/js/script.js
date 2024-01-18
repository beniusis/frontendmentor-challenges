const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const resultYears = document.getElementById("result-years");
const resultMonths = document.getElementById("result-months");
const resultDays = document.getElementById("result-days");

function calculateAge() {
  const year = yearInput.value;
  const month = monthInput.value;
  const day = dayInput.value;

  const today = new Date();
  const birthday = new Date(year, month, day);

  if (!validateDay(day)) {
    if (!validateMonth(month)) {
      if (!validateYear(year)) return;
      else return;
    } else return;
  } else if (validateDay(day)) {
    if (validateMonth(month)) {
      if (validateYear(year)) {
        if (!validateDate(year, month, day)) return;
      } else return;
    } else return;
  }

  let years, months, days;

  years = today.getFullYear() - birthday.getFullYear();

  if (today.getMonth() >= birthday.getMonth()) {
    months = 1 + today.getMonth() - birthday.getMonth();
  } else {
    years--;
    months = 13 + today.getMonth() - birthday.getMonth();
  }

  if (today.getDate() >= birthday.getDate()) {
    days = today.getDate() - birthday.getDate();
  } else {
    months--;
    days = getMonthDays(year, month) + today.getDate() - birthday.getDate();
  }

  if (months === 12) {
    months = 0;
    years++;
  } else if (months < 0) {
    months = 11;
    years--;
  }

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
}

function isValidDay(day) {
  if (day < 1 || day > 31) return false;
  return true;
}

function isValidMonth(month) {
  if (month < 1 || month > 12) return false;
  return true;
}

function isValidYear(year) {
  const currentYear = new Date().getFullYear();
  if (year > currentYear) return false;
  return true;
}

function isValidDate(year, month, day) {
  if (day > getMonthDays(year, month)) return false;
  return true;
}

function getMonthDays(year, month) {
  return new Date(year, month, 0).getDate();
}

function showError(input, label, error, message) {
  input.setAttribute("error", "");
  label.setAttribute("error", "");
  error.textContent = message;
  error.style.display = "block";
}

function hideError(input, label, error) {
  input.removeAttribute("error");
  label.removeAttribute("error");
  error.textContent = "";
  error.style.display = "none";
}

function showWholeFormError() {
  dayInput.setAttribute("error", "");
  monthInput.setAttribute("error", "");
  yearInput.setAttribute("error", "");
  dayLabel.setAttribute("error", "");
  monthLabel.setAttribute("error", "");
  yearLabel.setAttribute("error", "");
  dayError.textContent = "Must be a valid date";
  dayError.style.display = "block";
}

function hideWholeFormError() {
  dayInput.removeAttribute("error");
  monthInput.removeAttribute("error");
  yearInput.removeAttribute("error");
  dayLabel.removeAttribute("error");
  monthLabel.removeAttribute("error");
  yearLabel.removeAttribute("error");
  dayError.textContent = "";
  dayError.style.display = "none";
}

function validateDay(day) {
  if (day === "") {
    showError(dayInput, dayLabel, dayError, "This field is required");
    return false;
  } else if (!isValidDay(day)) {
    showError(dayInput, dayLabel, dayError, "Must be a valid day");
    return false;
  } else {
    hideError(dayInput, dayLabel, dayError);
    return true;
  }
}

function validateMonth(month) {
  if (month === "") {
    showError(monthInput, monthLabel, monthError, "This field is required");
    return false;
  } else if (!isValidMonth(month)) {
    showError(monthInput, monthLabel, monthError, "Must be a valid month");
    return false;
  } else {
    hideError(monthInput, monthLabel, monthError);
    return true;
  }
}

function validateYear(year) {
  if (year === "") {
    showError(yearInput, yearLabel, yearError, "This field is required");
    return false;
  } else if (!isValidYear(year)) {
    showError(yearInput, yearLabel, yearError, "Must be in the past");
    return false;
  } else {
    hideError(yearInput, yearLabel, yearError);
    return true;
  }
}

function validateDate(year, month, day) {
  if (!isValidDate(year, month, day)) {
    showWholeFormError();
    return false;
  } else {
    hideWholeFormError();
    return true;
  }
}
