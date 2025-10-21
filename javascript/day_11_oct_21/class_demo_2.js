// ES_6  <2015
class Student {
    constructor(roll, name, course) { // constructor function
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
let std1 = new Student(1, 'sai nath', 'Angular')
let std2 = new Student(2, 'Sreeja', 'SQL')
console.log(std1)
console.log(std2)