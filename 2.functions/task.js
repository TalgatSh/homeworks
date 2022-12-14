function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i+= 1) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr [i]
    } if (arr[i] < min) {
      min = arr [i]
    }
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min, max;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr [i]
    } if (arr[i] < min) {
      min = arr [i]
    }    
  }
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement, sumOddElement;
  sumEvenElement = 0;
  sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
    } else (sumOddElement += arr[i])
  }
  return (sumEvenElement - sumOddElement);

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement, countEvenElement;
  sumEvenElement = 0;
  countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i], countEvenElement += 1;
    }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {

}
