const nums = [0,1,2,3,4];
const words = ['element','car','elite', 'exuberant', 'destruction', 'present']
const student = {
    firstname: 'Hady',
    lastname: 'Bah',
    age: 20
  };

//For Each
function forEach(arr, cb){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i, arr);
    }
}

forEach(nums, (element)=> console.log(element));
//nums.forEach(element => console.log(element));

//Map
function mapFunc(arr, cb) {
    const mapArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const mapElement = cb(arr[i], i, arr);
      mapArr.push(mapElement);
    }
  
    return mapArr;
  }
const mapTest = mapFunc(nums, element => element * 2);
console.log(mapTest);


//filter
function filterFunc(arr, cb){
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr.slice();//to return a shallow copy 
}
const filterTest = filterFunc(words, words => words.length > 6);
console.log(filterTest);

//some 
function someFunc(arr, cb){
    for(let i = 0; i <arr.length;i++){
        if(cb(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

const someTest = someFunc(nums, element => element%2 ===0);
console.log(someTest);

//every
function everyFunc(arr, cb){
    for(let i = 0; i <arr.length;i++){
        if(cb(arr[i], i, arr) === false){
            return false;
        }
    }
    return true;
}

const everyTest = everyFunc(nums, element => element < 10);
console.log(everyTest);


//reduce
function reduceFunc(arr, initialValue, cb){
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator += cb(arr[i], i, arr);
  }
  return accumulator;

}
const initialValue = 0;
const reduceTest = reduceFunc(nums, initialValue, element => element + initialValue)
console.log(reduceTest);

//includes
function includesFunc(arr, searchElement, fromIndex){
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
          return true;
        }
      }
      return false;
}
console.log(includesFunc(nums, 3, 0));

//indexOf
function myIndexOf(arr, searchElement, fromIndex){
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
          return i;
        }
      }
      return -1;

}
console.log(myIndexOf(nums, 3, 0));

//push
function myPush(arr, elementToAdd){
    arr[arr.length] = elementToAdd;
    return arr.length;
}
console.log(myPush(nums, 5));
console.log(nums);

//last indexOf
function myLastIndexOf(arr, searchElement){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === searchElement) {
          return i;
        }
      }
      return -1;
}
console.log(myLastIndexOf(nums, 2));

//object.keys()
Object.grabKeys = function(obj) {
    const keys = [];
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  
    return keys;
  };
const keys = Object.grabKeys(student);
console.log(keys);

//object.values()
Object.grabValues = function(obj) {
    const values = [];
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
  
    return values;
  };
const values = Object.grabValues(student);
console.log(values);




//move zeros
function moveZeros(arr) {
    let nonZeroIndex = 0;
  
    //move non zero elements to the front 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
  
    //fill the rest of the array with 0
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
console.log(moveZeros(nums))




