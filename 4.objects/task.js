function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;  
  this.marks = [];
}
new Student("Mark", "male", 30);
new Student("Kate", "female", 25);
new Student("Olga", "female", 32);
new Student("Tatyana", "female", 20);
new Student("Anton", "male", 18);

Student.prototype.setSubject = function (subjectName) {
  let subject = subjectName;
  this.subject = subject;  
}

Student.prototype.addMarks = function (...marks) {
  let mark = [...marks];
  this.mark = mark;
  if(this.marks == undefined) {
    this.marks = undefined;
  } else {
    this.marks.push(...mark)
    };  
  
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if(index === arr.length - 1) {
      return acc / arr.length;
    } 
    return acc;
  }, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  let excluded = reason;
  this.excluded = excluded;    
}
