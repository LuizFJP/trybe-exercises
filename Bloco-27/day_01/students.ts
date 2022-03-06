class Student {
  private _registry: number
  private _subject: string
  private _grades: number[]
  private _sumGrades: number
  private _average: number

  constructor(registry, subject, grades) {
    this._registry = registry;
    this._subject = subject;
    this._grades = grades;
    this._sumGrades = 0;
  }

  calculateSum():void {
    for (const i of this._grades) {
      this._sumGrades += i;
    }
  }

  calculateAverage() {
    this._average = this._sumGrades / this._grades.length;
  }

  showAverage() {
    console.log(this._average); 
  }
}

const student01 = new Student(01, 'math', [7, 10, 8, 6, 5, 9]);
student01.calculateSum();
student01.calculateAverage();
student01.showAverage();