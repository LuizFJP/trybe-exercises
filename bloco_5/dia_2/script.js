const whereYouAre = document.getElementById("elementoOndeVoceEsta");

const dad = whereYouAre.parentElement;dad.style.color = "#3A86FF";

const firstSonOfSon = whereYouAre.firstElementChild;

firstSonOfSon.innerText = "Some text"

const firstSon = dad.firstElementChild;

const firstSonByWhere = whereYouAre.parentElement.parentElement;

const text = whereYouAre.parentElement.parentElement;

const thirdElement = whereYouAre.nextElementSibling;

const thirdElementByDad = dad.lastElementChild.previousElementSibling;

//crie um irmão p/ 'elementoOndeVoceEsta'
const father = document.getElementById('pai');
const whereYouAreBrother = document.createElement('div');
whereYouAreBrother.id = "whereYouAreBrother"
father.appendChild(whereYouAreBrother);

//Crie um filho p/ elementoOndeVoceEsta
const whereYouAreSon = document.createElement('div');
whereYouAreSon.id = "terceiroFilhoDoFilho";
whereYouAre.appendChild(whereYouAreSon);

//Crie um filho para primeiroFilhoDoFilho
const firstSonOfSonSon = document.createElement('div');
firstSonOfSonSon.id = 'firstSonOfSonSon';
firstSonOfSon.appendChild(firstSonOfSonSon);

//A partir desse filho criado, acesse terceiroFilho .
const thirdSon = document.getElementById('firstSonOfSonSon').parentElement.parentElement.nextSibling;



