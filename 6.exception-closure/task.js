function parseCount(number) {
  if (!Number.parseFloat(number)) {
    throw new Error("Невалидное значение");
  }  
  return parseFloat(number);
}
function validateCount(number) {
  try {
    if (!Number.parseFloat(number)) {     
        throw new Error("Невалидное значение");   
      }  
      return parseFloat(number);
  } catch(error) {    
      return error;
    }  
}

class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.triangleExist();
  }
  triangleExist() {
    if ((this.first + this.second) < this.third) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else if ((this.first + this.third) < this.second) {
        throw new Error("Треугольник с такими сторонами не существует");
    } else if ((this.second + this.third) < this.first) {
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
  
  