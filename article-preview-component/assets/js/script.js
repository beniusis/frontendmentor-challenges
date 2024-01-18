const shareButton = document.querySelector(".share-button");
const links = document.querySelector(".links");
const icons = document.getElementsByClassName("ref-icon");

shareButton.addEventListener("click", () => {
  const displayStatus = links.style.display;
  if (displayStatus === "flex") {
    links.style.display = "none";
    shareButton.style.backgroundColor = "var(--clr-light-grayish-blue)";
    shareButton.children[0].style.filter = "none";
  } else {
    links.style.display = "flex";
    shareButton.style.backgroundColor = "var(--clr-clicked-gray)";
    shareButton.children[0].style.filter = "brightness(0) invert(1)";
  }
});

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    links.style.display = "none";
    shareButton.style.backgroundColor = "var(--clr-light-grayish-blue)";
    shareButton.children[0].style.filter = "none";
  });
}
