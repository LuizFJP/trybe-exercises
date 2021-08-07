import logo from './logo.svg';
import './App.css';

const Task = (value) => {
   return (
    <li>{value}</li>
  );
}

const schedules = ['gym', 'english', 'edits', 'Trybe', 'lunch', 'Trybe', 'jiu-jitsu'];

function App() {
  return (
    schedules.map((schedule) => Task(schedule))
  );
}


export default App;
