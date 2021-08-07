const removeChild = () => {
  document.querySelector('.main-content').removeChild(document.querySelector('.left-content'));
} 

const toCenterSection = () => {
  document.querySelector(".right-content").style.textAlign = "auto";
}

removeChild();
toCenterSection();