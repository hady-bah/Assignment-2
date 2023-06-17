//For Each
const nums = [1,2,3,4];
const words = ['element','car','elite', 'exuberant', 'destruction', 'present']

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

// //every
// function everyFunc(nums){
//     let c = false
//     for(let i = 0; i <nums.length;i++){
//         if(nums[i] < 6){
//             c = true;
//             break;
//         }
//     }
//     console.log(c)
// }
// everyFunc(nums);

// //reduce
// function reduceFunc(nums){
//     for(let i =0; i<nums.length; i++){

//     }

// }









