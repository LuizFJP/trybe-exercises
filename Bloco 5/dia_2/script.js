const removeChild = () => {
  document.querySelector('.main-content').removeChild(document.querySelector('.left-content'));
} 

const toCenterSection = () => {
  document.querySelector(".right-content").style.textAlign = "auto";
}

const changeMainColor = () => {
  document.getElementsByTagName("main")[0].style.backgroundColor = 'green'
}

removeChild();
toCenterSection();
changeMainColor();