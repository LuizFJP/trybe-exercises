function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  /**
   * Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
   */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ulTag = document.querySelector('#days')


for(let index = 0; index < dezDaysList.length; index += 1){

  function createLiTagChild(){
    liTag.innerText = day;
    ulTag.appendChild(liTag);
  }

  let day = dezDaysList[index];
  const liTag = document.createElement('li');
  liTag.className = "day";
  createLiTagChild();

  if(dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31){
    liTag.className += " holiday";
    createLiTagChild();

  }if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25){
    liTag.className += " friday";
    createLiTagChild();
  }
}

/**
 * Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */

function holidayFunction(Feriados){
  const btn = document.createElement("BUTTON");
  btn.innerText = "Feriados";
  btn.id = "btn-holiday";
  divButton = document.getElementsByClassName("buttons-container")[0];
  divButton.appendChild(btn);
}
holidayFunction();

/**Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function clickHoliday(){
 
  let holidays = document.querySelectorAll(".holiday");

  for(let index = 0; index < holidays.length; index+=1){
    if (holidays[index].style.backgroundColor === "white"){
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
    }else{   
      console.log('teste');
      holidays[index].style.backgroundColor = "white";
    }
  }
}

document.getElementById("btn-holiday").addEventListener('click',clickHoliday);