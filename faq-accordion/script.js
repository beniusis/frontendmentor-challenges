const item = document.getElementsByClassName("accordion-item");
const buttonIcon = document.getElementsByClassName("button-icon");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    let panel = item[i].children[1];
    if (panel.style.display === "block") {
      panel.style.display = "none";
      buttonIcon[i].src = "assets/images/icon-plus.svg";
    } else {
      panel.style.display = "block";
      buttonIcon[i].src = "assets/images/icon-minus.svg";
    }
  });
}
