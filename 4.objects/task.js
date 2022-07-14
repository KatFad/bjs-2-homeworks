function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  //ваш код
    this.subject= subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
        // добавить первую оценку
        this.marks = [mark];
    } else {
        // добавить вторую и последующие оценки в массив
        this.marks.push(mark)
    }
}

Student.prototype.addMarks = function (...mark) {
    this.marks = mark;
}

Student.prototype.getAverage = function (Average) {
     let average = this.marks.reduce((acc, marks)=> acc+marks,0)/ this.marks.length ;
    return average
}

Student.prototype.exclude = function (reason) {
 delete this.subject;
 delete this.marks;
 this.excluded = reason;
}