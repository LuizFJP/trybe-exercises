 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        const changeText = () => {
          const aboutMe = document.querySelector('#paragraph');
          aboutMe.innerText = "Rich, programmer and traveling throught the world"
        }

        const changeSquare = () => {
          const greenSquare = document.querySelector(".main-content");
          greenSquare.style.backgroundColor = 'rgb(76,164,109)';
        }

        const changeSquareToWhite = () => {
          const whiteSquare = document.querySelector(".center-content");
          whiteSquare.style.backgroundColor = 'white';
        }

        const correction = () => {
          const correctedTitle = document.querySelector('.title');
          correctedTitle.innerText = 'Exercício 5.1 - JavaScript'
        }

        changeText();
        changeSquare();
        changeSquareToWhite();
        correction();

