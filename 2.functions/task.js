// Задание 1
function getArrayParams(arr) {
  let min =arr[0], max=arr[0], sum=0, avg;
  // Ваш код
  for(let i=0; i< arr.length; i++) {
    if (arr[i]>max) {
      max=arr[i];
    }
    else if (arr[i]<min) {
      min=arr[i];
    }
    sum+=arr[i];
  }
  avg=Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum=0;
  // Ваш код
  for(let i=0; i< arr.length; i++) {
    sum+=arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max= -Infinity;
  // Ваш кода
  // for ...
  for(let i=0; i< arrOfArr.length; i++) {
    if (func(arrOfArr[i]) >max) {
      max=func(arrOfArr[i]);
    }

  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let diff, min=arr[0], max=arr[0]
  for(let i=0; i< arr.length; i++) {
    if (arr[i]>max) {
      max=arr[i];
    }
    else if (arr[i]<min) {
      min=arr[i];
    }
    diff = Math.abs(max-min);
  }
  return diff;
}
