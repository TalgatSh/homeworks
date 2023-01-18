function parseCount(number) {
  let parse = Number.parseFloat(number);  
  if (isNaN(parse)) {
    throw new Error("Невалидное значение");
  } else {
    return parse;
  }  
}
function validateCount(number) {
  try {    
    return parseCount(number);
  } catch(error) {    
      return error;
    }  
}

class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
    if (((first + second) < third) || ((first + third) < second) || ((second + third) < first)) {
      throw new Error("Треугольник с такими сторонами не существует");    
    }
  }  
  get perimeter() {
    return this.first + this.second + this.third;
  }
  get area() {    
    let p = this.first * 0.5 + this.second * 0.5 + this.third * 0.5;
    this.p = p;
    return Number(Math.sqrt(this.p * (this.p - this.first) * (this.p - this.second) * (this.p - this.third)).toFixed(3));
  }
}
function getTriangle(first, second, third) {
  try {
    return new Triangle(first, second, third);
  } catch(error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}
  
  