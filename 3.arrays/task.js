function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  function ArrIndex (elem,index) {
    if ( arr1[index] === arr2[index] ) {
      return true;
    }
    else {
      return false;
    }
  }
  result = arr1.every(ArrIndex) && arr2.every(ArrIndex);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(item => item >0).filter(item => item % 3 ===0).map(item => item*10);

  return resultArr; // array
}
