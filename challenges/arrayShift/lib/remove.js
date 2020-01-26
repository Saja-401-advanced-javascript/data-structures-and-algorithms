


function removeShiftArray(arr){
  var location = Math.ceil(arr.length / 2);
  console.log(location);
  var newArr = [];
  for (let i = 0; i < location; i++){
    newArr[i] = arr[i];
  }
  console.log(newArr);
  for (let i = location; i < arr.length - 1 ;i++){
    newArr[i] = arr[i + 1];
  }
  return newArr;
}
module.exports = removeShiftArray;