var Student = /** @class */ (function () {
    function Student(registry, subject, grades) {
        this._registry = registry;
        this._subject = subject;
        this._grades = grades;
        this._sumGrades = 0;
    }
    Student.prototype.calculateSum = function () {
        for (var _i = 0, _a = this._grades; _i < _a.length; _i++) {
            var i = _a[_i];
            this._sumGrades += i;
        }
    };
    Student.prototype.calculateAverage = function () {
        this._average = this._sumGrades / this._grades.length;
    };
    Student.prototype.showAverage = function () {
        console.log(this._average);
    };
    return Student;
}());
var student01 = new Student(01, 'math', [7, 10, 8, 6, 5, 9]);
student01.calculateSum();
student01.calculateAverage();
student01.showAverage();
