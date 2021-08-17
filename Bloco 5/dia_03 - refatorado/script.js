const feriados = 'Feriados';
const friday = 'Sexta-feira';

const createNumberDays = () => {
  const dezDaysList = [ 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ];
  const days = document.querySelector('#days');
  dezDaysList.forEach((day) => {
    const numberDay = document.createElement('li');
    numberDay.innerText = day;
    numberDay.className = 'day';
    if ( day === 24 || day === 25 || day === 31) numberDay.className += ' holiday';
    if ( day === 4 || day === 11 || day === 18 || day === 25) numberDay.className += ' friday';
    days.appendChild(numberDay);
  })
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
  createNumberDays();
};

createDaysOfTheWeek();

const addHoliday = (feriados) => {
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = feriados;
  document.querySelector('.buttons-container').appendChild(buttonHoliday);
}

addHoliday(feriados);

document.querySelector('#btn-holiday').addEventListener('click', () => {
  const holidaysGreen = document.querySelectorAll('.holiday');
  holidaysGreen[0].style.backgroundColor !== 'rgb(33, 137, 126)'
  ? holidaysGreen.forEach((day) => day.style.backgroundColor = 'rgb(33, 137, 126)')
  : holidaysGreen.forEach((day) => day.style.backgroundColor = 'rgb(238, 238, 238)');
});

const addFriday = (friday) => {
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = friday;
  document.querySelector('.buttons-container').appendChild(buttonFriday);
}

addFriday(friday);

document.querySelector('#btn-friday').addEventListener('click', () => {
  const days = [4, 11, 18, 25];
  const fridayDays = document.querySelectorAll('.friday');
  fridayDays[0].innerText === 'SEXTOU o/'
  ? fridayDays.forEach((day, index) => day.innerText = days[index])
  : fridayDays.forEach((day) => day.innerText = 'SEXTOU o/');
});
