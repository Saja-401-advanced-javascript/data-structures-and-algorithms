


function insertShiftArray(arr,val){
  var location = Math.ceil(arr.length / 2);
  var newArr = [];
  for (let i = 0; i < location; i++){
    newArr[i] = arr[i];
  }
  newArr[newArr.length] = val;
  for (let i = location + 1; i < arr.length + 1 ;i++){
    newArr[i] = arr[i - 1];
  }
  return newArr;
}




module.exports = insertShiftArray;
