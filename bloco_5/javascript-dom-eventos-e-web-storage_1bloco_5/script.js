/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/
 
 //EXERCÍCIO 1
 function changeText(){
 const futureVision = document.getElementsByTagName("p")[0].innerText = "Daqui 2 anos me vejo trabalhando em uma grande empresa e ganhando um salário acima de 4 mil em uma empresa de software"
 }

changeText();

//EXERCÍCIO 2
function changeColorSquare(){
  const squareBackground = document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)";
}

changeColorSquare();

//EXERCÍCIO 3