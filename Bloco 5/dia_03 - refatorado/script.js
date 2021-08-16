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

const feriados = 'Feriados';
const addHoliday = (feriados) => {
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-holiday';
  buttonFriday.innerText = feriados;
  document.querySelector('.buttons-container').appendChild(buttonFriday);
}

addHoliday(feriados);

document.querySelector('#btn-holiday').addEventListener('click', () => {
  const holidaysGreen = document.querySelectorAll('.holiday');
  console.log(holidaysGreen);
  holidaysGreen.forEach((day) => day.style.backgroundColor = 'rgb(238,238,238)');
})
