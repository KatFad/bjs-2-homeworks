'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let disc = b**2-4*a*c;
  let rootOne;
  let rootTwo;

  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }

  if (disc<0) {
    arr = [];
  }
  else if (disc===0) {
    rootOne = -b/(2*a);
    arr = [rootOne];
  }
  else if (disc>0) {
    rootOne = (-b + Math.sqrt(disc) )/(2*a);
    rootTwo = (-b - Math.sqrt(disc) )/(2*a);
    arr = [rootOne,rootTwo];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь
  let percentNum = parseInt(percent)/100;
  let contributionNum = parseInt(contribution);
  let amountNum = parseInt(amount);


  if (isNaN(percentNum)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contributionNum)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amountNum)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let creditBody = (amountNum - contributionNum);
  let actualDate = new Date();
  let qtyMount = (date.getMonth() - actualDate.getMonth() + (12 * (date.getFullYear() - actualDate.getFullYear())));
  let mountPay = (creditBody*(percentNum/12 + ((percentNum/12)/(((1+ percentNum/12)**qtyMount) -1))));

  console.log(totalAmount = parseFloat((qtyMount*mountPay).toFixed(2)));

  return totalAmount;
}
