const removeChild = () => {
  document.querySelector('.main-content').removeChild(document.querySelector('.left-content'));
} 

const toCenterSection = () => {
  document.querySelector(".right-content").style.textAlign = "auto";
}

const changeMainColor = () => {
  document.getElementsByTagName("main")[0].style.backgroundColor = 'green';
}

const removeChildTopics = () => {
  document.querySelector('.right-content > ul').removeChild(document.querySelector('.right-content > ul').lastElementChild);
  document.querySelector('.right-content > ul').removeChild(document.querySelector('.right-content > ul').lastElementChild);
}

removeChild();
toCenterSection();
changeMainColor();
removeChildTopics();